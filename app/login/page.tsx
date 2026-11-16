
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [phrase, setPhrase] = useState("");
  const [status, setStatus] = useState("");

  async function generatePhrase() {
    if (!username.trim()) {
      setStatus("Enter your Roblox username first.");
      return;
    }

    setStatus("Generating your verification phrase...");

    try {
      const response = await fetch("/.netlify/functions/roblox-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "start", username }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Could not generate phrase.");

      setPhrase(data.phrase);
      setStatus("Add these two words to your Roblox profile About section, then click Verify.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  async function verifyProfile() {
    if (!username.trim() || !phrase) return;

    setStatus("Checking your public Roblox profile...");

    try {
      const response = await fetch("/.netlify/functions/roblox-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "verify", username, phrase }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Verification failed.");

      setStatus("Profile verified! Roblox ownership confirmed.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <main style={{
      minHeight: "100vh", background: "#090910", color: "white",
      display: "grid", placeItems: "center", padding: 24,
      fontFamily: "Arial, sans-serif"
    }}>
      <section style={{
        width: "100%", maxWidth: 440, padding: 32,
        background: "#171522", border: "1px solid #ffffff20",
        borderRadius: 18
      }}>
        <a href="/" style={{ color: "#a78bfa", fontWeight: 800 }}>← CASHFLIP</a>
        <h1 style={{ fontSize: 32, marginTop: 28 }}>Connect Roblox</h1>
        <p style={{ color: "#aaa6bb", lineHeight: 1.6, marginTop: 12 }}>
          Verify that you own your Roblox username using a temporary
          phrase in your public profile. Never enter your Roblox password.
        </p>

        <label style={{ display: "block", marginTop: 28, marginBottom: 8 }}>
          Roblox username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Roblox username"
          style={{
            width: "100%", padding: 14, borderRadius: 9,
            border: "1px solid #ffffff25", background: "#0d0c15",
            color: "white", outline: "none"
          }}
        />

        <button onClick={generatePhrase} style={buttonStyle}>
          Generate verification words
        </button>

        {phrase && (
          <div style={{
            marginTop: 22, padding: 20, textAlign: "center",
            borderRadius: 12, background: "#a78bfa18",
            border: "1px solid #a78bfa55"
          }}>
            <p style={{ color: "#aaa6bb", fontSize: 12 }}>YOUR TWO WORDS</p>
            <h2 style={{ color: "#c4b5fd", margin: "12px 0", fontSize: 27 }}>
              {phrase}
            </h2>
            <p style={{ color: "#aaa6bb", fontSize: 12 }}>
              Add these words to your Roblox profile About section.
            </p>
            <button onClick={verifyProfile} style={buttonStyle}>
              Verify profile
            </button>
          </div>
        )}

        {status && (
          <p style={{ color: "#c4b5fd", marginTop: 20, lineHeight: 1.5 }}>
            {status}
          </p>
        )}
      </section>
    </main>
  );
}

const buttonStyle = {
  width: "100%", padding: 14, marginTop: 18,
  border: "none", borderRadius: 9, background: "#9672f5",
  color: "white", fontWeight: 700, cursor: "pointer"
};
