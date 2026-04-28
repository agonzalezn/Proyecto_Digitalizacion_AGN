# 🏐 VoleyPro - Digital Scoreboard & Tactical Assistant

VoleyPro is a web application designed to track the score and manage the tactics of your volleyball matches directly from your mobile device or computer.

* No installation required
* No internet connection needed to use the scoreboard
* All match data is stored locally on your device

---

## 🎯 Motivation

The digital transformation of amateur sports is lagging. Referees and coaches still rely on paper and pencil, leading to data loss and calculation errors. VoleyPro was created to solve this by providing a frictionless, offline-first digital tool that works on any device without complex setups.

---

## 📥 How to deploy and use the app

Unlike other applications, you don't need to download any `.exe` file. VoleyPro runs directly in your web browser.

### 🔹 Step 1 – Download the code

1. Go to this repository.
2. Click on the green **`<> Code`** button in the top right corner.
3. Select **Download ZIP**.
4. Extract (unzip) the folder to your Desktop or preferred location.

![WhatsApp Image 2026-03-03 at 12 55 05](https://github.com/user-attachments/assets/a0b0e212-8016-435d-b701-45e47e20420c)

### 🔹 Step 2 – Run the App

1. Open the folder you just extracted.
2. Double-click the `index.html` file.
3. You're done! It will automatically open in your default browser (Chrome, Safari, Edge...) and is ready to use.

### 🌐 Live Demo
If you don't want to download the code, you can try a fully functional live version of the app here:
**[👉 Launch VoleyPro Live](https://agonzalezn.github.io/Proyecto_Digitalizacion_AGN/)** 
---

## ⚠️ VERY IMPORTANT – Data Storage

Before you start saving matches, you should know how the app's memory works:

VoleyPro **does not use cloud servers**. It uses a browser technology called `LocalStorage` to save your match history and team names. 

**Why is this important to know?**
* Your data is **100% private**, no one else can see it.
* If you are tracking a match, accidentally close the tab, and reopen it, **the score will still be there**.
* 🚨 **Warning:** If you completely clear your browsing data, cookies, or browser cache, **you will delete your match history**.

---

## 🚀 Usage Examples

### 1️⃣ The Scoreboard (Live)
* Tap on "LOCAL" or "VISITA" to set the real team names.
* Use the giant **`+`** button to add points.
* If you make a mistake, use the **`-1`** button.
* When a team reaches 25 points (or 15 in a tie-break), tap **`SET 🏆`**.
* When the match ends, click **`🔄 Finalizar Partido y Guardar Acta`** (End Match and Save Record).

### 2️⃣ History & Statistics
In the bottom menu, tap the scroll icon (📜):
* See a visual summary of your victories and your Win Rate.
* Access the full list of all saved matches.
* **Export to CSV:** Download your entire match history as a `.csv` file to analyze in Excel, Google Sheets, or send to the federation.
* You can clear the entire list using the delete button.

### 3️⃣ Tactics & Training
On the position (📍) and arm (💪) icons:
* Review the 6 rotation zones.
* Check exactly what each player does (Libero, Setter, Middle Blocker, Opposite).
* Access a video masterclass to improve your jumping, passing, and serving technique.

---

## 💻 Requirements

* Works on Windows, macOS, Linux, Android, and iOS.
* You only need a modern web browser (Chrome, Firefox, or Safari recommended).
* No databases or extra libraries required.

---

## 📁 Project Structure

If you are a developer or teacher, this is how the code is structured:

* `index.html` → Main panel and scoreboard.
* `historial.html` → Match record table logic.
* `posiciones.html` → Visual explanation of tactics and zones.
* `entrenamientos.html` → Multimedia library.
* `style.css` → Modern Glassmorphism design.
* `script.js` → Mathematical logic for scoring and saving to `LocalStorage`.

---

## 🪪 License
This project is published under the **MIT** License (Open Source).

## 👨‍💻 Author
**Aarón González**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aar%C3%B3n-gonz%C3%A1lez-naranjo-660b62406/)
