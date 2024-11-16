import React from "react";
import Sidebar from "./components/Sidebar"; // Adjust the path if needed
import "./App.css"; // Optional: If you have custom global styling for your app

function App() {
  return (
    <div className="App" style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar component */}
      <Sidebar />

      {/* Main content area */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Welcome to the App</h1>
        <p>Your main content will go here.</p>
      </div>
    </div>
  );
}

export default App;
