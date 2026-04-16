# Explore Bangalore — Android App

A hybrid Android app that combines a native Material Design 3 login experience with the full Explore Bangalore web app running inside a WebView.

## Features

- 🎨 **Native Splash Screen** — Dark themed with gold accent branding
- 🔐 **Native Login/Signup** — Material Design 3 with email/password authentication
- 🗺️ **Interactive Map** — Leaflet-powered map with 120+ Bangalore locations
- 🔍 **Smart Filters** — Search, category, zone, and sorting
- 🤖 **AI Assist** — Smart place recommendations based on rating, distance, and entry fee
- 📱 **Native Bottom Navigation** — Map, Search, Places, AI tabs
- 🚕 **Uber Booking Integration** — Direct ride booking from place details
- 📍 **GPS Location** — Real-time distance and nearest place detection

## Demo Credentials

| Email | Password |
|-------|----------|
| demo@explorebangalore.com | Demo@1234 |
| test@gmail.com | Test@1234 |

You can also create a new account via Sign Up.

## How to Open in Android Studio

1. **Open Android Studio**
2. Go to **File → Open**
3. Navigate to this `android` folder and select it
4. Click **OK** — Android Studio will sync the Gradle files
5. Wait for the Gradle sync to complete (first time takes a few minutes)
6. If prompted about Gradle wrapper, click **OK** to use the wrapper
7. Click the **Run ▶** button (or Shift+F10) to build and run

## Project Structure

```
android/
├── app/
│   ├── build.gradle.kts          # App dependencies & config
│   ├── src/main/
│   │   ├── AndroidManifest.xml   # Permissions & activities
│   │   ├── java/.../app/
│   │   │   ├── SplashActivity.kt     # Branded splash screen
│   │   │   ├── LoginActivity.kt      # Native Material3 login
│   │   │   ├── MainActivity.kt       # WebView + bottom nav
│   │   │   └── WebAppInterface.kt    # JS ↔ Native bridge
│   │   ├── res/
│   │   │   ├── layout/          # XML layouts
│   │   │   ├── values/          # Colors, strings, themes
│   │   │   ├── drawable/        # Icons & backgrounds
│   │   │   └── menu/            # Bottom nav menu
│   │   └── assets/
│   │       ├── app.html         # Modified web app
│   │       ├── css/             # Stylesheets
│   │       ├── js/              # JavaScript modules
│   │       └── images/          # 90 place images
├── build.gradle.kts              # Root Gradle config
├── settings.gradle.kts           # Project settings
└── gradle.properties             # Gradle properties
```

## Architecture (Hybrid)

```
┌─────────────────────────────────────┐
│         SplashActivity              │
│    (checks login → routes)          │
└──────────┬──────────────────────────┘
           │
    ┌──────▼──────┐     ┌─────────────┐
    │ LoginActivity│────►│ MainActivity │
    │  (Native)    │     │  (Hybrid)    │
    │  Material3   │     │             │
    │  Email/Pass  │     │ ┌─────────┐ │
    └──────────────┘     │ │ WebView │ │
                         │ │ (map,   │ │
                         │ │ cards,  │ │
                         │ │ modal)  │ │
                         │ └─────────┘ │
                         │ ┌─────────┐ │
                         │ │BottomNav│ │
                         │ │(native) │ │
                         │ └─────────┘ │
                         └─────────────┘
```

## Tech Stack

- **Language**: Kotlin
- **Min SDK**: 24 (Android 7.0+)
- **UI**: Material Design 3
- **Map**: Leaflet.js (via WebView)
- **Build**: Gradle 8.6 + AGP 8.4.0

## Troubleshooting

- **Gradle sync fails**: Make sure you have the Android SDK installed and JAVA_HOME set
- **Map not loading**: The device needs internet access for map tiles
- **Images not showing**: Images are bundled in assets/images/, some use Wikipedia fallback
