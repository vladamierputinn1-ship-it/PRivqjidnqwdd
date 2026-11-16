
"use client";

import { useState } from "react";

const items = [
  { name: "Classic Crown", icon: "👑", value: 1200, rarity: "Rare" },
  { name: "Neon Shades", icon: "🕶️", value: 2500, rarity: "Epic" },
  { name: "Crystal Halo", icon: "💎", value: 4800, rarity: "Legendary" },
  { name: "Golden Wings", icon: "🪽", value: 8500, rarity: "Mythic" },
];

export default function TradingPage() {
  const [selected, setSelected] = useState(0);
  const [comparison, setComparison] = useState(1);
  const [message, setMessage] = useState("");

  const first = items[selected];
  const second = items[comparison];

  const difference = Math.abs(first.value - second.value);

  return (
    <main style={{
      minHeight: "100vh", background: "#090910", color: "white",
      fontFamily: "Arial", padding: 30, textAlign: "center"
    }}>
      <a href="/" style={{ color: "#b9a3ff" }}>← CASHFLIP</a>

      <h1 style={{ fontSize: 42, marginTop: 55 }}>🔄 Trading</h1>
      <p style={{ color: "#aaa6bb", marginTop: 12 }}>
        Compare fictional collectible values in a trade simulator.
      </p>

      <section style={{
        maxWidth: 650, margin: "40px auto", padding: 25,
        background: "#171522", border: "1px solid #a78bfa55",
        borderRadius: 16
      }}>
        <h2 style={{ marginBottom: 20 }}>Your item</h2>

        <div style={{ display: "grid", gap: 10 }}>
          {items.map((item, index) => (
            <button key={item.name} onClick={() => {
              setSelected(index);
              setMessage("");
            }} style={{
              padding: 15, display: "flex",
              justifyContent: "space-between",
              borderRadius: 9,
              border: selected === index
                ? "2px solid #a78bfa"
                : "1px solid #ffffff20",
              background: selected === index ? "#9672f522" : "#ffffff08",
              color: "white", cursor: "pointer"
            }}>
              <span>{item.icon} {item.name}</span>
              <span style={{ color: "#c4b5fd" }}>{item.value.toLocaleString()} pts</span>
            </button>
          ))}
        </div>

        <div style={{ fontSize: 30, margin: 25 }}>⇅</div>

        <h2 style={{ marginBottom: 20 }}>Compare with</h2>

        <div style={{ display: "grid", gap: 10 }}>
          {items.map((item, index) => (
            <button key={item.name} onClick={() => {
              setComparison(index);
              setMessage("");
            }} style={{
              padding: 15, display: "flex",
              justifyContent: "space-between",
              borderRadius: 9,
              border: comparison === index
                ? "2px solid #a78bfa"
                : "1px solid #ffffff20",
              background: comparison === index ? "#9672f522" : "#ffffff08",
              color: "white", cursor: "pointer"
            }}>
              <span>{item.icon} {item.name}</span>
              <span style={{ color: "#c4b5fd" }}>{item.value.toLocaleString()} pts</span>
            </button>
          ))}
        </div>

        <div style={{
          background: "#ffffff09", borderRadius: 10,
          padding: 20, marginTop: 25
        }}>
          <p style={{ color: "#aaa6bb" }}>VALUE DIFFERENCE</p>
          <h2 style={{ color: "#c4b5fd", fontSize: 30, marginTop: 8 }}>
            {difference.toLocaleString()} pts
          </h2>
          <p style={{ color: "#aaa6bb", marginTop: 8 }}>
            {first.value === second.value
              ? "These items have equal demo values."
              : first.value > second.value
              ? "Your selected item has the higher demo value."
              : "The comparison item has the higher demo value."}
          </p>
        </div>

        <button onClick={() => setMessage(
          selected === comparison
            ? "Select two different items to compare."
            : "Comparison complete! No real items were traded."
        )} style={{
          width: "100%", marginTop: 20, padding: 16,
          border: 0, borderRadius: 9,
          background: "#9672f5", color: "white",
          fontWeight: 800, cursor: "pointer"
        }}>
          COMPARE ITEMS
        </button>

        {message && <p style={{ color: "#c4b5fd", marginTop: 18 }}>{message}</p>}
      </section>

      <p style={{ color: "#777386", fontSize: 12 }}>
        Demo values only · No Roblox items are transferred.
      </p>
    </main>
  );
}
