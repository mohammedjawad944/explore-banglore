// js/auth.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('auth-form');
    // If not on login page, ignore
    if (!form) return;

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const spinner = document.getElementById('spinner');
    const toggleFormLink = document.getElementById('toggle-form');
    const authSubtitle = document.getElementById('auth-subtitle');
    const noticeMsg = document.getElementById('notice-msg');
    
    let isLogin = true;

    // Hardcoded allowed users
    const validUsers = [
        { email: 'demo@explorebangalore.com', password: 'Demo@1234' },
        { email: 'test@gmail.com', password: 'Test@1234' }
    ];

    // Check if already logged in via localStorage
    // if (localStorage.getItem('ebUser')) {
    //     window.location.href = 'app.html';
    //     return;
    // }

    toggleFormLink.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;
        
        if(isLogin) {
            btnText.innerText = 'Login';
            authSubtitle.innerText = 'Welcome back! Please login to your account.';
            toggleFormLink.innerText = 'Sign Up';
            toggleFormLink.parentElement.firstChild.nodeValue = "Don't have an account? ";
        } else {
            btnText.innerText = 'Sign Up';
            authSubtitle.innerText = 'Create a new account to explore Bangalore.';
            toggleFormLink.innerText = 'Login';
            toggleFormLink.parentElement.firstChild.nodeValue = "Already have an account? ";
        }
        noticeMsg.classList.add('hidden');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let valid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        const emailVal = emailInput.value.trim().toLowerCase();
        const passVal = passwordInput.value;

        if (!emailRegex.test(emailVal)) {
            emailError.style.display = 'block';
            valid = false;
        } else {
            emailError.style.display = 'none';
        }

        if (passVal.length < 6) {
            passwordError.style.display = 'block';
            valid = false;
        } else {
            passwordError.style.display = 'none';
        }

        if (valid) {
            // Fake Loading state
            btnText.classList.add('hidden');
            spinner.classList.remove('hidden');
            submitBtn.disabled = true;

            setTimeout(() => {
                btnText.classList.remove('hidden');
                spinner.classList.add('hidden');
                submitBtn.disabled = false;

                if (isLogin) {
                    // Check valid credentials + local storage dynamic accounts
                    const localAccounts = JSON.parse(localStorage.getItem('ebAccounts') || '[]');
                    const allUsers = [...validUsers, ...localAccounts];
                    
                    const user = allUsers.find(u => u.email.toLowerCase() === emailVal && u.password === passVal);
                    
                    if (user) {
                        localStorage.setItem('ebUser', JSON.stringify({ email: user.email }));
                        window.location.href = 'app.html';
                    } else {
                        showNotice('Invalid email or password.', true);
                    }
                } else {
                    // Sign up
                    const localAccounts = JSON.parse(localStorage.getItem('ebAccounts') || '[]');
                    if(localAccounts.find(u => u.email.toLowerCase() === emailVal) || validUsers.find(u => u.email.toLowerCase() === emailVal)) {
                        showNotice('Email already exists. Please login.', true);
                    } else {
                        localAccounts.push({ email: emailVal, password: passVal });
                        localStorage.setItem('ebAccounts', JSON.stringify(localAccounts));
                        localStorage.setItem('ebUser', JSON.stringify({ email: emailVal }));
                        window.location.href = 'app.html';
                    }
                }
            }, 1500); // 1.5s timeout requirement
        }
    });

    document.getElementById('forgot-password').addEventListener('click', (e) => {
        e.preventDefault();
        showNotice('A password reset link has been sent to your email.');
    });

    function showNotice(msg, isError = false) {
        noticeMsg.innerText = msg;
        noticeMsg.classList.remove('hidden');
        if(isError) {
            noticeMsg.style.background = 'rgba(231, 76, 60, 0.2)';
            noticeMsg.style.color = '#e74c3c';
            noticeMsg.style.borderColor = 'rgba(231, 76, 60, 0.4)';
        } else {
            noticeMsg.style.background = 'rgba(46, 204, 113, 0.2)';
            noticeMsg.style.color = '#2ecc71';
            noticeMsg.style.borderColor = 'rgba(46, 204, 113, 0.4)';
        }
    }
});

// Google Sign-In Callback (Global)
function handleCredentialResponse(response) {
    if(response.credential) {
        localStorage.setItem('ebUser', JSON.stringify({ email: "google-user@domain.com", isGoogle: true }));
        window.location.href = 'app.html';
    }
}

// Global logout hook if loaded on app.html
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('ebUser');
            window.location.href = 'index.html';
        });
    }
});
