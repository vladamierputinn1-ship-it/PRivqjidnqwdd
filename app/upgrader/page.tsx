
"use client";

import { useState } from "react";

const items = [
  { name: "Common Crown", chance: 85, icon: "👑" },
  { name: "Neon Shades", chance: 60, icon: "🕶️" },
  { name: "Crystal Halo", chance: 35, icon: "💎" },
  { name: "Golden Dominus", chance: 10, icon: "✨" },
];

export default function UpgraderPage() {
  const [selected, setSelected] = useState(0);
  const [result, setResult] = useState("");
  const [busy, setBusy] = useState(false);

  function upgrade() {
    if (busy) return;

    setBusy(true);
    setResult("");

    setTimeout(() => {
      const success = Math.random() * 100 < items[selected].chance;

      setResult(
        success
          ? `🎉 Upgrade successful! You unlocked ${items[selected].name}!`
          : "💥 Upgrade failed! Try another demo round."
      );

      setBusy(false);
    }, 1300);
  }

  return (
    <main style={{
      minHeight: "100vh", background: "#090910", color: "white",
      fontFamily: "Arial", padding: 30, textAlign: "center"
    }}>
      <a href="/" style={{ color: "#b9a3ff" }}>← CASHFLIP</a>

      <h1 style={{ fontSize: 42, marginTop: 55 }}>⚡ Upgrader</h1>

      <p style={{ color: "#aaa6bb", marginTop: 12 }}>
        Try your luck upgrading virtual collectibles.
        No real items or value involved.
      </p>

      <section style={{
        maxWidth: 520, margin: "40px auto", padding: 25,
        background: "#171522", border: "1px solid #a78bfa55",
        borderRadius: 16
      }}>
        <div style={{ fontSize: 65, margin: 20 }}>💎</div>

        <h2>Choose your target</h2>

        <div style={{ display: "grid", gap: 10, marginTop: 22 }}>
          {items.map((item, index) => (
            <button
              key={item.name}
              onClick={() => {
                setSelected(index);
                setResult("");
              }}
              style={{
                display: "flex", justifyContent: "space-between",
                padding: 16, borderRadius: 9,
                border: selected === index
                  ? "2px solid #a78bfa"
                  : "1px solid #ffffff20",
                background: selected === index ? "#9672f522" : "#ffffff08",
                color: "white", cursor: "pointer"
              }}
            >
              <span>{item.icon} {item.name}</span>
              <strong style={{ color: "#c4b5fd" }}>
                {item.chance}% chance
              </strong>
            </button>
          ))}
        </div>

        <button
          onClick={upgrade}
          disabled={busy}
          style={{
            width: "100%", marginTop: 25, padding: 16,
            border: 0, borderRadius: 9,
            background: "#9672f5", color: "white",
            fontWeight: 800, cursor: "pointer"
          }}
        >
          {busy ? "UPGRADING..." : "TRY UPGRADE"}
        </button>

        {result && (
          <h3 style={{ color: "#c4b5fd", marginTop: 25 }}>
            {result}
          </h3>
        )}
      </section>
    </main>
  );
}
