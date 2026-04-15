# Assignment 3 – Advanced Functionality  
## Personal Portfolio Website

🌐 **Live Demo (GitHub Pages):**  
https://ali-a-r9.github.io/202281300-Ali-Al-Ramadan-assignment3/

🔗 **Repository Link:**  
https://github.com/Ali-A-R9/202281300-Ali-Al-Ramadan-assignment3

---

## 📌 Project Description

This project is an advanced version of my personal portfolio website built for Assignment 3.

The goal of this assignment is to demonstrate advanced JavaScript functionality, API integration, state management, and improved user experience while maintaining clean structure and performance.

The website is fully responsive, interactive, and dynamically updates content using real data from external sources.

---

## 🚀 Features

### 🔗 External API Integration
- Connects to the **GitHub REST API**
- Dynamically displays repositories
- Shows:
  - repository name
  - description
  - language
  - stars ⭐
  - last updated date
- Includes **error handling** with fallback data if API fails

---

### 🧠 Complex Logic
- Project system supports:
  - search (by text)
  - filtering (category + level)
  - sorting (date + title)
- Multi-step logic applied together
- Contact form includes advanced validation rules

---

### 💾 State Management
Using `localStorage`, the app remembers:

- light/dark mode 🌙
- visitor name 👤
- About section visibility
- Advanced filters visibility
- GitHub section visibility

---

### ⚡ Performance Optimization
- No unnecessary libraries (Vanilla JS only)
- Lazy-loaded images
- Efficient DOM updates
- Reusable functions (no repeated logic)
- Clean and optimized CSS

---

### 🎯 User Experience (Step-by-Step Guide)

1. **Landing Section**
   - View greeting message (changes based on time)
   - See time spent on website

2. **Personalization**
   - Enter your name → click *Save Name*
   - Website remembers you on future visits

3. **Projects Section**
   - Search projects using keywords
   - Open *Advanced Filters*
   - Filter by:
     - category (Web / Desktop / Portfolio)
     - level (Beginner / Advanced)
   - Sort projects by:
     - newest
     - oldest
     - title (A–Z / Z–A)

4. **GitHub Section**
   - Click *Show GitHub Section*
   - Loads live repositories from GitHub API
   - Click *Refresh* to reload data

5. **Contact Form**
   - Fill in all fields
   - Must:
     - enter valid email
     - write message (15+ characters)
     - check confirmation box
   - Submit → shows success message

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- GitHub REST API
- localStorage
- Git & GitHub

---

## 📁 Folder Structure

```text
id-name-assignment3/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```
## ⚙️ Setup Instructions 

### Option 1: Open Live Website
Simply open the deployed link:  
https://ali-a-r9.github.io/202281300-Ali-Al-Ramadan-assignment3/

---

### Option 2: Run Locally (VS Code)

```bash
# 1. Clone repository
git clone https://github.com/Ali-A-R9/202281300-Ali-Al-Ramadan-assignment3.git

# 2. Open folder
cd 202281300-Ali-Al-Ramadan-assignment3

# 3. Open in VS Code
code .

# 4. Run using Live Server
Right click index.html → Open with Live Server
```
---

## 🤖 AI Usage (Summary)

AI tools were used to support development and learning during this assignment.

- **ChatGPT** was used for debugging, improving logic, and refining documentation.
- **GitHub Copilot** helped with small code suggestions and faster development.

All AI-generated content was reviewed, modified, and tested to ensure correctness and understanding.

👉 Full details are provided in:
`docs/ai-usage-report.md`
