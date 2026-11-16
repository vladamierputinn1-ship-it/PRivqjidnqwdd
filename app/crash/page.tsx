
"use client";

import { useEffect, useState } from "react";

export default function CrashPage() {
  const [multiplier, setMultiplier] = useState(1);
  const [running, setRunning] = useState(false);
  const [crashed, setCrashed] = useState(false);
  const [message, setMessage] = useState("Ready to launch?");

  function startGame() {
    if (running) return;

    setMultiplier(1);
    setCrashed(false);
    setRunning(true);
    setMessage("Multiplier rising...");
  }

  useEffect(() => {
    if (!running) return;

    const crashAt = 1.2 + Math.random() * 7;

    const timer = setInterval(() => {
      setMultiplier((old) => {
        const next = old + 0.04 + old * 0.012;

        if (next >= crashAt) {
          clearInterval(timer);
          setRunning(false);
          setCrashed(true);
          setMessage("💥 CRASHED! Try another round.");
          return crashAt;
        }

        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [running]);

  return (
    <main style={{
      minHeight: "100vh", background: "#090910", color: "white",
      fontFamily: "Arial", padding: 30, textAlign: "center"
    }}>
      <a href="/" style={{ color: "#b9a3ff" }}>← CASHFLIP</a>

      <h1 style={{ fontSize: 42, marginTop: 60 }}>📈 Crash</h1>

      <p style={{ color: "#aaa6bb", marginTop: 12 }}>
        Watch the multiplier climb in this free simulation.
        No bets or item transfers.
      </p>

      <div style={{
        margin: "65px auto 35px", maxWidth: 550,
        padding: "65px 20px", borderRadius: 20,
        background: "radial-gradient(circle,#38205f,#171522 70%)",
        border: "1px solid #a78bfa55",
        boxShadow: "0 0 45px #9672f522"
      }}>
        <div style={{
          fontSize: 65, fontWeight: 800,
          color: crashed ? "#ff6b8a" : "#c4b5fd"
        }}>
          {multiplier.toFixed(2)}x
        </div>

        <p style={{ color: "#aaa6bb", marginTop: 15 }}>
          {message}
        </p>
      </div>

      <button
        onClick={startGame}
        disabled={running}
        style={{
          padding: "16px 45px", border: 0, borderRadius: 9,
          background: running ? "#51466c" : "#9672f5",
          color: "white", fontWeight: 800,
          cursor: running ? "not-allowed" : "pointer"
        }}
      >
        {running ? "RUNNING..." : "START ROUND"}
      </button>

      <p style={{ color: "#777386", marginTop: 25, fontSize: 12 }}>
        Demo only · Multipliers have no monetary or item value.
      </p>
    </main>
  );
}
