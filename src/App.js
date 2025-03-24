// App.js
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import CaseSummaryCard from "./components/CaseSummarycard";
import Chatbot from "./components/Chatbot";
import CaseList from "./components/CaseList";
import Login from "./components/Login";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [task, setTask] = useState(null);
  const [inputText, setInputText] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  // Function to call backend API for AI tasks
  const handleSend = async (apiEndpoint) => {
    if (!inputText) return alert("Please enter a question!");

    try {
      const response = await fetch(`https://your-backend.com/api/${apiEndpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await response.json();
      setAiResponse(data.reply || "No response from AI.");
    } catch (error) {
      setAiResponse("Error connecting to AI.");
    }
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <Login onLogin={() => setLoggedIn(true)} />
      ) : (
        <div>
          <Navbar onLogout={() => setLoggedIn(false)} />
          <Sidebar />
          <div className="content">
            <h1>User Dashboard</h1>

            {/* Case Summary Cards */}
            <div className="summary-cards">
              <CaseSummaryCard title="Pending Cases" status="Pending" count={5} />
              <CaseSummaryCard title="Closed Cases" status="Closed" count={8} />
              <CaseSummaryCard title="Active Cases" status="Active" count={15} />
            </div>

            {/* AI Task Buttons */}
            <div className="task-buttons">
              <button onClick={() => setTask("chatbot")}>Chat with AI</button>
              <button onClick={() => setTask("summarize")}>Summarization</button>
              <button onClick={() => setTask("classify")}>Classification</button>
            </div>

            {/* Show AI Task Input & Response */}
            {task && (
              <div className="ai-task">
                <h2>{task === "chatbot" ? "Ask AI a legal question" : task === "summarize" ? "Enter text to summarize" : "Enter case details for classification"}</h2>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type here..."
                />
                <button onClick={() => handleSend(task)}>Send</button>

                {/* AI Response */}
                {aiResponse && (
                  <div className="ai-response">
                    <h3>AI Response:</h3>
                    <p>{aiResponse}</p>
                  </div>
                )}
              </div>
            )}

            {/* Case List & Chatbot */}
            <CaseList />
            <Chatbot />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
