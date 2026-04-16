package com.explorebangalore.app

import android.content.Intent
import android.content.SharedPreferences
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.View
import android.widget.LinearLayout
import android.widget.ProgressBar
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.button.MaterialButton
import com.google.android.material.checkbox.MaterialCheckBox
import com.google.android.material.textfield.TextInputEditText
import com.google.android.material.textfield.TextInputLayout
import org.json.JSONArray
import org.json.JSONObject

class LoginActivity : AppCompatActivity() {

    private lateinit var tilEmail: TextInputLayout
    private lateinit var tilPassword: TextInputLayout
    private lateinit var etEmail: TextInputEditText
    private lateinit var etPassword: TextInputEditText
    private lateinit var btnSubmit: MaterialButton
    private lateinit var cbRemember: MaterialCheckBox
    private lateinit var tvForgotPassword: TextView
    private lateinit var tvTogglePrefix: TextView
    private lateinit var tvToggleLink: TextView
    private lateinit var tvSubtitle: TextView
    private lateinit var tvNotice: TextView
    private lateinit var optionsRow: LinearLayout
    private lateinit var progressBar: ProgressBar
    private lateinit var prefs: SharedPreferences

    private var isLoginMode = true

    private val validUsers = listOf(
        Pair("demo@explorebangalore.com", "Demo@1234"),
        Pair("test@gmail.com", "Test@1234")
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        prefs = getSharedPreferences("explore_bangalore", MODE_PRIVATE)
        initViews()
        setupListeners()
    }

    private fun initViews() {
        tilEmail = findViewById(R.id.tilEmail)
        tilPassword = findViewById(R.id.tilPassword)
        etEmail = findViewById(R.id.etEmail)
        etPassword = findViewById(R.id.etPassword)
        btnSubmit = findViewById(R.id.btnSubmit)
        cbRemember = findViewById(R.id.cbRemember)
        tvForgotPassword = findViewById(R.id.tvForgotPassword)
        tvTogglePrefix = findViewById(R.id.tvTogglePrefix)
        tvToggleLink = findViewById(R.id.tvToggleLink)
        tvSubtitle = findViewById(R.id.tvSubtitle)
        tvNotice = findViewById(R.id.tvNotice)
        optionsRow = findViewById(R.id.optionsRow)
        progressBar = findViewById(R.id.progressBar)
    }

    private fun setupListeners() {
        btnSubmit.setOnClickListener { handleSubmit() }

        tvToggleLink.setOnClickListener {
            isLoginMode = !isLoginMode
            tvNotice.visibility = View.GONE
            if (isLoginMode) {
                btnSubmit.text = getString(R.string.login_btn)
                tvSubtitle.text = getString(R.string.login_subtitle)
                tvTogglePrefix.text = getString(R.string.no_account)
                tvToggleLink.text = getString(R.string.sign_up_link)
                optionsRow.visibility = View.VISIBLE
            } else {
                btnSubmit.text = getString(R.string.signup_btn)
                tvSubtitle.text = getString(R.string.signup_subtitle)
                tvTogglePrefix.text = getString(R.string.have_account)
                tvToggleLink.text = getString(R.string.login_link)
                optionsRow.visibility = View.GONE
            }
        }

        tvForgotPassword.setOnClickListener { handleForgotPassword() }
    }

    private fun handleSubmit() {
        val email = etEmail.text.toString().trim().lowercase()
        val password = etPassword.text.toString()

        // Validate
        var valid = true
        val emailRegex = Regex("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")

        if (!emailRegex.matches(email)) {
            tilEmail.error = getString(R.string.invalid_email)
            valid = false
        } else {
            tilEmail.error = null
        }

        if (password.length < 6) {
            tilPassword.error = getString(R.string.invalid_password)
            valid = false
        } else {
            tilPassword.error = null
        }

        if (!valid) return

        // Show loading
        btnSubmit.isEnabled = false
        progressBar.visibility = View.VISIBLE

        Handler(Looper.getMainLooper()).postDelayed({
            progressBar.visibility = View.GONE
            btnSubmit.isEnabled = true

            if (isLoginMode) {
                handleLogin(email, password)
            } else {
                handleSignup(email, password)
            }
        }, 1000)
    }

    private fun handleLogin(email: String, password: String) {
        val localAccounts = getLocalAccounts()
        val allUsers = validUsers + localAccounts

        val user = allUsers.find { it.first.lowercase() == email && it.second == password }

        if (user != null) {
            saveSession(user.first)
            navigateToMain()
        } else {
            showNotice(getString(R.string.invalid_credentials), isError = true)
        }
    }

    private fun handleSignup(email: String, password: String) {
        val localAccounts = getLocalAccounts()
        val allEmails = validUsers.map { it.first.lowercase() } + localAccounts.map { it.first.lowercase() }

        if (email in allEmails) {
            showNotice(getString(R.string.email_exists), isError = true)
        } else {
            val accounts = localAccounts.toMutableList()
            accounts.add(Pair(email, password))
            saveLocalAccounts(accounts)
            saveSession(email)
            navigateToMain()
        }
    }

    private fun handleForgotPassword() {
        val email = etEmail.text.toString().trim().lowercase()
        if (email.isEmpty()) {
            showNotice(getString(R.string.enter_email_reset), isError = true)
            return
        }
        val emailRegex = Regex("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")
        if (!emailRegex.matches(email)) {
            showNotice(getString(R.string.invalid_email), isError = true)
            return
        }

        val localAccounts = getLocalAccounts()
        val allEmails = validUsers.map { it.first.lowercase() } + localAccounts.map { it.first.lowercase() }

        if (email in allEmails) {
            showNotice(getString(R.string.reset_sent), isError = false)
        } else {
            showNotice(getString(R.string.no_account_found), isError = true)
        }
    }

    private fun showNotice(msg: String, isError: Boolean) {
        tvNotice.text = msg
        tvNotice.visibility = View.VISIBLE
        tvNotice.setTextColor(
            if (isError) getColor(R.color.error_red) else getColor(R.color.success_green)
        )
    }

    private fun saveSession(email: String) {
        prefs.edit()
            .putBoolean("is_logged_in", true)
            .putString("user_email", email)
            .apply()
    }

    private fun navigateToMain() {
        startActivity(Intent(this, MainActivity::class.java))
        overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
        finish()
    }

    private fun getLocalAccounts(): List<Pair<String, String>> {
        val json = prefs.getString("local_accounts", "[]") ?: "[]"
        val arr = JSONArray(json)
        val list = mutableListOf<Pair<String, String>>()
        for (i in 0 until arr.length()) {
            val obj = arr.getJSONObject(i)
            list.add(Pair(obj.getString("email"), obj.getString("password")))
        }
        return list
    }

    private fun saveLocalAccounts(accounts: List<Pair<String, String>>) {
        val arr = JSONArray()
        accounts.forEach {
            val obj = JSONObject()
            obj.put("email", it.first)
            obj.put("password", "hidden")
            arr.put(obj)
        }
        prefs.edit().putString("local_accounts", arr.toString()).apply()
    }
}
