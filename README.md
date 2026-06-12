# 🤖 AI Smart Chatbot

A simple AI-powered chatbot built using **Flask**, **Groq API**, **Llama 3.3 70B**, **HTML**, **CSS**, and **JavaScript**. The chatbot provides real-time conversational responses through an interactive web interface.

---

## 🚀 Features

* AI-powered conversational chatbot
* Real-time response generation using Groq API
* Interactive and responsive user interface
* Chat history support during runtime
* Flask backend integration
* Clean and modern chat design
* Environment variable support for API security

---

## 🛠️ Tech Stack

### Backend

* Python
* Flask
* Groq API
* python-dotenv

### Frontend

* HTML5
* CSS3
* JavaScript (Fetch API)

### AI Model

* Llama 3.3 70B Versatile

---

## 📂 Project Structure

```text
AI-Smart-Chatbot/
│
├── app.py
├── requirements.txt
├── .env
├── .gitignore
├── README.md
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
└── screenshots/
    ├── home.png
    └── chat.png
```

---

## 📸 Screenshots

### Home Page

![Home Page](screenshots/demo.png)

### Chat Interface

![Chat Demo](screenshots/chat.png)

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-jahnavipriya05/AI-Smart-Chatbot.git
cd AI-Smart-Chatbot
```

### 2. Create Virtual Environment

```bash
python -m venv venv
```

### 3. Activate Virtual Environment

#### Windows

```bash
venv\Scripts\activate
```

#### Linux / Mac

```bash
source venv/bin/activate
```

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

### 5. Create a .env File

Create a `.env` file in the project root directory and add:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### 6. Run the Application

```bash
python app.py
```

### 7. Open in Browser

```text
http://127.0.0.1:5000
```

---

## 🔧 Environment Variables

The following environment variable is required:

| Variable     | Description       |
| ------------ | ----------------- |
| GROQ_API_KEY | Your Groq API Key |

---

## 🎯 Future Improvements

* User Authentication
* Database Integration
* Persistent Chat History
* Multiple AI Model Support
* Dark/Light Theme Toggle
* Chat Export Functionality
* Voice Input and Output
* Streaming Responses

---

## 🧑‍💻 Author

**Jahnavi Priya**

B.Tech Student | CSE
Passionate about Full Stack Development, Data Science, and Generative AI

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Happy Coding! 🚀
