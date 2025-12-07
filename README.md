# WeatherXplorer

Name - Sandhya Kumari Kushwaha
Roll No- KRMU2541805
MCA AI OR ML 


## 📌 Features
- Search weather by city name
- Fetch weather using your device's location
- Display temperature, humidity, wind speed, feels-like temperature
- Clean two-panel UI with icons
- Fully responsive on mobile & desktop

---

## 🚀 How to Run This Project

### 1️⃣ Get an API Key  
1. Go to https://openweathermap.org  
2. Sign up (free)  
3. Navigate to **API Keys**  
4. Copy your API key  

### 2️⃣ Add Your API Key  
Open the file **app.js** and replace:

```
const API_KEY = "YOUR_API_KEY_HERE";
```

with:

```
const API_KEY = "YOUR_REAL_API_KEY";
```

### 3️⃣ Run the App  
▶ Option 1: **Directly open index.html**  
- Double-click `index.html` to open in your browser  
- Note: Some browsers block geolocation on `file://` mode  

▶ Option 2: **Run with a local server (recommended)**  
If you have Python installed:
```
python -m http.server 8000
```
Then open:
```
http://localhost:8000
```

---

## 📊 Flowchart (How the App Works)

```
               ┌──────────────────────┐
               │   User Opens App    │
               └──────────┬──────────┘
                          │
             ┌────────────┴────────────┐
             │                         │
     User enters city            User taps "Use my location"
             │                         │
             ▼                         ▼
┌──────────────────────┐      ┌────────────────────────┐
│ Fetch weather by     │      │ Get geolocation (GPS)  │
│ city name (API call) │      └─────────────┬──────────┘
└────────────┬─────────┘                    │
             │                               ▼
             │                    ┌────────────────────────┐
             ▼                    │ Fetch weather using     │
┌──────────────────────┐          │ latitude + longitude    │
│ Receive API response │          └─────────────┬──────────┘
└────────────┬─────────┘                    │
             ▼                               ▼
    ┌────────────────────┐        ┌────────────────────┐
    │ Extract weather    │        │ Extract weather     │
    │ data (temp, etc.) │        │ data (temp, etc.)   │
    └──────────┬────────┘        └──────────┬──────────┘
               ▼                              ▼
       ┌──────────────────────────┐
       │ Update UI with weather   │
       │ icon, temp, humidity etc │
       └──────────┬──────────────┘
                  ▼
         ┌─────────────────┐
         │  Show results   │
         └─────────────────┘
```

---

## 📁 Project Structure

```
weather-app/
├── index.html   → Main UI
├── style.css    → Styling
├── app.js       → Weather logic + API calls
└── README.md    → Documentation
```

---

## 📝 Notes
- This is a fully static HTML/CSS/JS project
- Works offline but requires internet for API calls
- Use HTTPS server for geolocation support

