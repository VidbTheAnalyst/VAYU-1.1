"use client";

import { useState } from "react";

export default function VayuNetra() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Namaste. I’m VAYU Netra 👁️ — your pollution intelligence assistant.",
    },
  ]);
  const [input, setInput] = useState("");

  const responses = [
    {
      keywords: ["aqi", "air quality"],
      reply: "The average AQI in India today is around 140.",
    },
    {
      keywords: ["reason", "why", "pollution"],
      reply:
        "India's AQI is consistently high due to vehicular traffic, industrial emissions, construction dust, and crop residue burning.",
    },
    {
      keywords: ["what should i do", "precaution", "protect"],
      reply:
        "Limit outdoor exposure, stay indoors, use HEPA air purifiers, wear N95 masks, and stay hydrated.",
    },
    {
      keywords: ["asthma"],
      reply:
        "It’s better to stay indoors. If necessary, wear an N95 mask and keep your inhaler with you.",
    },
    {
      keywords: ["eyes", "burning"],
      reply:
        "This can be due to air pollution. Wash your eyes with clean water and avoid going outside unnecessarily.",
    },
    {
      keywords: ["throat", "cough"],
      reply:
        "High AQI can irritate your throat. Stay hydrated and limit outdoor exposure.",
    },
    {
      keywords: ["children", "kids"],
      reply:
        "Not recommended ❌ — high pollution can affect their lungs. Keep them indoors.",
    },
    {
      keywords: ["headache", "dizziness"],
      reply:
        "Yes, poor air quality can cause this. Stay indoors and avoid exertion.",
    },
    {
      keywords: ["parents", "old", "elderly"],
      reply:
        "It’s better they avoid outdoor walks during high AQI. Indoor activity is safer.",
    },
    {
      keywords: ["healthy", "normal"],
      reply:
        "Even healthy people can be affected. Limit outdoor time and wear a mask.",
    },
  ];

  const getReply = (text: string) => {
    const lower = text.toLowerCase();

    for (let item of responses) {
      for (let key of item.keywords) {
        if (lower.includes(key)) return item.reply;
      }
    }

    return "I’m VAYU 🌬️ — ask me about AQI, health, or pollution insights anytime.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getReply(input) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* 👁️ Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        style={styles.fab}
      >
        👁️
      </div>

      {/* 💬 Chatbox */}
      <div
        style={{
          ...styles.chatbox,
          transform: open ? "translateY(0)" : "translateY(120%)",
          opacity: open ? 1 : 0,
        }}
      >
        <div style={styles.header}>
          VAYU Netra 👁️
          <span style={styles.status}>● Online</span>
        </div>

        <div style={styles.messages}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                ...styles.msg,
                alignSelf: m.sender === "user" ? "flex-end" : "flex-start",
                background:
                  m.sender === "user"
                    ? "#4df4ff"
                    : "rgba(255,255,255,0.08)",
                color: m.sender === "user" ? "#000" : "#fff",
              }}
            >
              {m.text}
            </div>
          ))}
        </div>

        <div style={styles.inputBox}>
          <input
            style={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about AQI..."
          />
          <button style={styles.btn} onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}

const styles: any = {
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "rgba(10,15,40,0.9)",
    border: "1px solid #4df4ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    cursor: "pointer",
    zIndex: 9999,
    boxShadow: "0 0 20px rgba(77,244,255,0.6)",
  },

  chatbox: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "320px",
    height: "420px",
    background: "rgba(5,10,30,0.95)",
    border: "1px solid rgba(77,244,255,0.3)",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 9999,
    backdropFilter: "blur(12px)",
    transition: "all 0.3s ease",
  },

  header: {
    padding: "12px",
    fontWeight: "bold",
    color: "#4df4ff",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    justifyContent: "space-between",
  },

  status: {
    fontSize: "10px",
    color: "#00ffa3",
  },

  messages: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  msg: {
    padding: "8px 12px",
    borderRadius: "8px",
    maxWidth: "80%",
    fontSize: "13px",
  },

  inputBox: {
    display: "flex",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },

  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "#fff",
  },

  btn: {
    padding: "10px",
    background: "#4df4ff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
};