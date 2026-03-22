# 📝  To-Do Management System
### *Web Development Internship Task (SCT_WD_04)*

A high-performance, responsive **To-Do Web Application** built with a mobile-first approach. This project demonstrates the implementation of **CRUD operations**, **Persistent State Management**, and a modern **Glassmorphic UI** using vanilla web technologies.

---

## ✨ Premium Features

* 🚀 **Dynamic Task Engine:** Add, edit, and manage tasks with real-time DOM updates.
* 🔴 **Visual Priority System:** Color-coded status bars (Emerald for Low, Amber for Medium, Rose for High) for instant visual hierarchy.
* 🖍 **Red-Mark Completion:** A professional "red-pen" strikethrough effect for completed tasks to simulate real-world checklists.
* 💾 **Persistent State:** Full **LocalStorage API** integration—your tasks survive browser refreshes and session restarts.
* 📊 **Live Productivity Analytics:** Real-time counters for *Total*, *Done*, and *Pending* tasks to track daily progress.
* 🔔 **Smart Reminders:** Logic-based alerts that trigger based on your scheduled date and time using `setInterval` polling.
* 📱 **Responsive Design:** Optimized for seamless performance on desktops, tablets, and smartphones.

---

## 🛠 Tech Stack

| Technology | Role |
| :--- | :--- |
| **HTML5** | Semantic structure and ARIA-compliant elements for accessibility. |
| **CSS3** | Custom variables, Flexbox/Grid, and Keyframe animations for a premium feel. |
| **JavaScript (ES6)** | DOM Manipulation, JSON parsing, and Functional State Management. |
| **Local Storage** | Client-side data persistence for a "database-less" user experience. |

---

## 📁 Project Architecture

```text
SCT_WD_04/
│
├── index.html    # Semantic structure & SEO-friendly meta tags
├── style.css     # 300+ lines of custom UI logic & Responsive breakpoints
├── script.js     # State management, Reminders, and DOM Logic
└── README.md     # Project documentation

🚀 Getting Started
1️⃣ Clone the Repository
git clone [https://github.com/Kousalyac48/SCT_WD_04.git](https://github.com/Kousalyac48/SCT_WD_04.git)

Gemini said
Since you are submitting this for your MCA internship task (SCT_WD_04), the README needs to be "Recruiter Ready." It should not just list features, but explain the Technical Architecture and Logic Flow to show off your engineering mindset.

Copy and paste this into your README.md file:

Markdown
# 📝 NexusTask | Advanced To-Do Management System
### *Web Development Internship Task (SCT_WD_04)*

A high-performance, responsive **To-Do Web Application** built with a mobile-first approach. This project demonstrates the implementation of **CRUD operations**, **Persistent State Management**, and a modern **Glassmorphic UI** using vanilla web technologies.

---

## ✨ Premium Features

* 🚀 **Dynamic Task Engine:** Add, edit, and manage tasks with real-time DOM updates.
* 🔴 **Visual Priority System:** Color-coded status bars (Emerald for Low, Amber for Medium, Rose for High) for instant visual hierarchy.
* 🖍 **Red-Mark Completion:** A professional "red-pen" strikethrough effect for completed tasks to simulate real-world checklists.
* 💾 **Persistent State:** Full **LocalStorage API** integration—your tasks survive browser refreshes and session restarts.
* 📊 **Live Productivity Analytics:** Real-time counters for *Total*, *Done*, and *Pending* tasks to track daily progress.
* 🔔 **Smart Reminders:** Logic-based alerts that trigger based on your scheduled date and time using `setInterval` polling.
* 📱 **Responsive Design:** Optimized for seamless performance on desktops, tablets, and smartphones.

---

## 🛠 Tech Stack

| Technology | Role |
| :--- | :--- |
| **HTML5** | Semantic structure and ARIA-compliant elements for accessibility. |
| **CSS3** | Custom variables, Flexbox/Grid, and Keyframe animations for a premium feel. |
| **JavaScript (ES6)** | DOM Manipulation, JSON parsing, and Functional State Management. |
| **Local Storage** | Client-side data persistence for a "database-less" user experience. |

---

## 📁 Project Architecture

```text
SCT_WD_04/
│
├── index.html    # Semantic structure & SEO-friendly meta tags
├── style.css     # 300+ lines of custom UI logic & Responsive breakpoints
├── script.js     # State management, Reminders, and DOM Logic
└── README.md     # Project documentation
🚀 Getting Started
1️⃣ Clone the Repository
Bash
git clone [https://github.com/Kousalyac48/SCT_WD_04.git](https://github.com/Kousalyac48/SCT_WD_04.git)

2️⃣ Navigate to the Folder
cd SCT_WD_04

3️⃣ Launch the Application
Simply open index.html in your preferred web browser to start managing your tasks. No server setup required!

📋 Logic Workflow
Data Fetching: On application mount, the script retrieves the vivid_tasks array from LocalStorage.

The Render Loop: The render() function iterates through the task array, dynamically injecting HTML into the DOM.

State Updates: When a task is toggled, the completed boolean flips, triggering a re-render that applies the .completed CSS class (Red Scratch effect).

Validation: All inputs are .trim() validated to prevent empty task entries.

👩‍💻 Author
Kousalya C
MCA Student | Aspiring Web Developer intern

🔗 GitHub: Kousalyac48

📍 Location: Bengaluru, India
