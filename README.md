# 🌆 Explore Bangalore - Advanced Interactive Tourism Directory

![Status](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Leaflet.js](https://img.shields.io/badge/Leaflet-199900?style=flat&logo=Leaflet&logoColor=white)
![OAuth 2.0](https://img.shields.io/badge/OAuth_2.0-Google_%7C_Meta-blue)

**Live Demo:** [https://project-0w55d.vercel.app](https://project-0w55d.vercel.app)

## 📌 Project Overview
Explore Bangalore is a modern, responsive web application designed to help tourists and locals discover the best places in the city. Originally started as a simple static directory, it has evolved into a fully interactive platform featuring an "Instagram-style" authentication wall, AI-driven place recommendations, dynamic map integration, and deep-linked ride-booking services. 

This project serves as a comprehensive showcase of advanced frontend architectural patterns, complex DOM manipulation, and integrations with third-party APIs.

---

## ✨ Core Features & Implementations

### 1. 🔒 Robust Social Authentication (OAuth 2.0)
- **Instagram-Style Gateway:** Implemented a strict authentication wall. Users must log in or sign up before accessing the platform's content.
- **Google Identity Services:** Integrated official Google Sign-In with popup OAuth 2.0 workflows.
- **Facebook (Meta) SDK:** Integrated Meta's developer toolkit for Facebook Login capabilities.
- **Local Fallback:** Developed locally persisting mock authentication with strict form validation (email regex, password length limits) and simulated "Forgot Password" UI states.
- **Loading States:** UI features dynamic spinners on auth buttons to prevent duplicate network requests and enhance UX.

### 2. 🗺️ Dynamic Mapping & Geospatial Logic
- **Leaflet.js Integration:** Built a custom map view that plots over 50 uniquely curated locations across Bangalore (categorized into North, South, East, West, Central, and Day Trips).
- **Proximity Calculation:** Implements the **Haversine formula** to calculate the straight-line distance between the user's HTML5 Geolocation coordinates and the coordinates of all places in the database.
- **Nearest Location Highlight:** The UI automatically tags and highlights the absolutely closest attraction to the user with a pulsing "📍 Nearest to You!" banner.

### 3. 🤖 AI-Powered Recommendations
- **Algorithmic Verdicts:** Implemented a local decision-mapping algorithm that generates an "AI Verdict" based on a complex weighting of factors (distance, user rating, and entry fee).
- **Dynamic UI Classes:** Places receive visually distinct badges (Excellent, Good, Warning) based on their algorithmic score, helping users immediately identify the best places to visit.
- **Interactive Toggle:** Users can seamlessly toggle the AI feature on and off using a custom-built Switch UI.

### 4. 🚖 Deep-Linked Ride Booking
- **Uber URI Schemes:** Instead of generic web links, the application constructs precise deep links (`m.uber.com/ul/?action=setPickup...`) passing exact latitude and longitude coordinates.
- **Dynamic Cost Estimation:** Automatically calculates approximate Auto and Cab fares based on the user's distance to the location.
- **Seamless UI Integration:** The "Ride with Uber" CTA is strategically placed both on the main dashboard cards and heavily promoted inside the detailed click-through modals.

### 5. 💎 Premium UI/UX & Responsive Design
- **Glassmorphism Modals:** Detailed place views open in a custom modal layer utilizing CSS `backdrop-filter: blur(8px)` to beautifully blur the underlying application.
- **Dynamic Filtering & Sorting:** Users can instantly search by text, filter by category (Malls, Temples, Mosques, Parks, etc.), zone, or sort by closest distance and highest rating.
- **Custom CSS Variables:** Built on a scalable CSS root-variable design system (`var(--primary)`, `var(--zone-north)`, etc.) enabling rapid theme iterations.
- **Mobile-First:** Extensively tested with media queries to ensure grids, modals, and navigation bars respond fluidly on mobile devices.

---

## 🛠️ Technology Stack
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+ Modules)
- **Geospatial & Maps:** Leaflet.js
- **Authentication:** Google Identity API, Facebook SDK
- **Icons & Typography:** FontAwesome 6, Google Fonts (Inter)
- **Hosting & Deployment:** Vercel Edge Network (`vercel.json` optimized)

---

## 🚀 Setup & Local Development

Due to the security requirements of modern OAuth 2.0 Identity Providers, running this application locally requires serving it over a local web server (to avoid Cross-Origin `file://` protocol errors).

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/explore-bangalore.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd explore-bangalore
   ```
3. **Start a local HTTP server:**
   ```bash
   # If using Python
   python -m http.server 8000
   
   # If using Node.js (http-server)
   npx http-server -p 8000
   ```
4. **View the Application:**
   Open your browser and navigate to `http://localhost:8000`

> [!NOTE]
> **Developer Console Configurations:** To test Google or Facebook logins locally, you must temporarily add `http://localhost:8000` to the Authorized JavaScript Origins / Valid OAuth Redirect URIs in your Google Cloud Console and Meta Developer Dashboard.

---

## 📈 Deployment Evolution & Vercel Transition
The project was originally slated for Netlify but was migrated to **Vercel** to utilize its superior global edge caching and free-tier structure. A custom `vercel.json` was authored to handle clean URL routing and ensure static files are served correctly, removing `.html` extensions and preventing 404 errors during direct navigation.

---

_Designed and developed as a comprehensive frontend architecture showcase._
