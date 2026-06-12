from flask import Flask, render_template, request, jsonify
from groq import Groq
from dotenv import load_dotenv
import os

app = Flask(__name__)
load_dotenv()

client = Groq(api_key = os.getenv("GROQ_API_KEY"))

chat_history = []

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat",methods = ["POST"])
def chat():
    data = request.json
    
    user_message = data["message"]
    
    chat_history.append({
        "role" :"user",
        "content" : user_message
    })
    
    # send reques to groq
    completion = client.chat.completions.create(
        model = "llama-3.3-70b-versatile",
        messages = chat_history,
        temperature =0.7,
        max_tokens = 1024
    )
    
    bot_reply = completion.choices[0].message.content
    
    # store bot reply
    chat_history.append({
        "role" :"assistant",
        "content" : bot_reply
    })
    
    # send msg to frontend
    return jsonify({
        "reply" : bot_reply
    })
    
if __name__ == "__main__":
    app.run(debug=True)