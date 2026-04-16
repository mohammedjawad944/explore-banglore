package com.explorebangalore.app

import android.webkit.JavascriptInterface

class WebAppInterface(private val activity: MainActivity) {

    @JavascriptInterface
    fun logout() {
        activity.runOnUiThread {
            activity.performLogout()
        }
    }

    @JavascriptInterface
    fun showToast(message: String) {
        activity.runOnUiThread {
            android.widget.Toast.makeText(activity, message, android.widget.Toast.LENGTH_SHORT).show()
        }
    }
}
