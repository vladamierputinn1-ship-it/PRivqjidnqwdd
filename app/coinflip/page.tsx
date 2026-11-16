
"use client";

import { useState } from "react";

export default function CoinflipPage() {
  const [choice, setChoice] = useState<"heads" | "tails">("heads");
  const [result, setResult] = useState("");
  const [flipping, setFlipping] = useState(false);

  function flip() {
    if (flipping) return;
    setFlipping(true);
    setResult("");

    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? "heads" : "tails";
      setResult(
        outcome === choice
          ? `It's ${outcome.toUpperCase()} — you guessed correctly!`
          : `It's ${outcome.toUpperCase()} — better luck next time!`
      );
      setFlipping(false);
    }, 900);
  }

  return (
    <main style={{
      minHeight: "100vh", background: "#090910", color: "white",
      fontFamily: "Arial", padding: 30, textAlign: "center"
    }}>
      <a href="/" style={{ color: "#b9a3ff" }}>← CASHFLIP</a>
      <h1 style={{ fontSize: 42, marginTop: 65 }}>🪙 Coinflip</h1>
      <p style={{ color: "#aaa6bb", marginTop: 12 }}>
        Pick a side and test your luck. Free demo — no bets or item transfers.
      </p>

      <div style={{
        width: 150, height: 150, borderRadius: "50%",
        margin: "45px auto", display: "grid", placeItems: "center",
        background: "linear-gradient(135deg,#a78bfa,#5429a8)",
        border: "5px solid #d7caff",
        boxShadow: "0 0 45px #9672f566",
        fontSize: 30, fontWeight: 800
      }}>
        {flipping ? "..." : result ? result.includes("HEADS") ? "H" : result.includes("TAILS") ? "T" : "?" : "?"}
      </div>

      <p style={{ color: "#aaa6bb" }}>Choose your side</p>
      <div style={{ display: "flex", justifyContent: "center", gap: 14, margin: 20 }}>
        {(["heads", "tails"] as const).map((side) => (
          <button key={side} onClick={() => setChoice(side)} style={{
            padding: "14px 25px", borderRadius: 9,
            border: choice === side ? "2px solid #b9a3ff" : "1px solid #ffffff30",
            background: choice === side ? "#9672f533" : "#171522",
            color: "white", cursor: "pointer", fontWeight: 700
          }}>
            {side.toUpperCase()}
          </button>
        ))}
      </div>

      <button onClick={flip} disabled={flipping} style={{
        padding: "15px 45px", border: 0, borderRadius: 9,
        background: "#9672f5", color: "white",
        fontWeight: 800, cursor: "pointer"
      }}>
        {flipping ? "FLIPPING..." : "FLIP COIN"}
      </button>

      {result && <h3 style={{ marginTop: 25, color: "#c4b5fd" }}>{result}</h3>}
    </main>
  );
}
