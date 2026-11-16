
"use client";

import { useState } from "react";

const prizes = [
  { name: "Classic Cap", icon: "🧢", rarity: "Common", color: "#aaa6bb" },
  { name: "Neon Shades", icon: "🕶️", rarity: "Rare", color: "#60a5fa" },
  { name: "Crystal Crown", icon: "👑", rarity: "Epic", color: "#c084fc" },
  { name: "Golden Halo", icon: "✨", rarity: "Legendary", color: "#facc15" },
  { name: "Cosmic Wings", icon: "🪽", rarity: "Mythic", color: "#fb7185" },
];

export default function CasesPage() {
  const [opening, setOpening] = useState(false);
  const [prize, setPrize] = useState<typeof prizes[number] | null>(null);
  const [opened, setOpened] = useState(0);

  function openCase() {
    if (opening) return;

    setOpening(true);
    setPrize(null);

    setTimeout(() => {
      const result = prizes[Math.floor(Math.random() * prizes.length)];
      setPrize(result);
      setOpened((count) => count + 1);
      setOpening(false);
    }, 1500);
  }

  return (
    <main style={{
      minHeight: "100vh", background: "#090910", color: "white",
      fontFamily: "Arial", padding: 30, textAlign: "center"
    }}>
      <a href="/" style={{ color: "#b9a3ff" }}>← CASHFLIP</a>

      <h1 style={{ fontSize: 42, marginTop: 55 }}>📦 Case Opening</h1>

      <p style={{ color: "#aaa6bb", marginTop: 12 }}>
        Open free virtual cases and discover collectible-style prizes.
      </p>

      <section style={{
        maxWidth: 520, margin: "45px auto", padding: 30,
        background: "#171522", border: "1px solid #a78bfa55",
        borderRadius: 18
      }}>
        <div style={{
          fontSize: 95, margin: "25px 0",
          filter: opening ? "drop-shadow(0 0 25px #a78bfa)" : "none"
        }}>
          {opening ? "✨" : prize ? prize.icon : "🎁"}
        </div>

        <h2 style={{ fontSize: 25 }}>
          {opening ? "Opening case..." : prize ? prize.name : "Mystery Case"}
        </h2>

        {prize && (
          <div style={{
            marginTop: 18, padding: 15, borderRadius: 10,
            background: "#ffffff0d"
          }}>
            <p style={{ color: prize.color, fontWeight: 800 }}>
              {prize.rarity.toUpperCase()}
            </p>
            <p style={{ color: "#aaa6bb", marginTop: 8 }}>
              You discovered a virtual collectible!
            </p>
          </div>
        )}

        <button onClick={openCase} disabled={opening} style={{
          width: "100%", marginTop: 25, padding: 16,
          border: 0, borderRadius: 9,
          background: "#9672f5", color: "white",
          fontWeight: 800, cursor: "pointer"
        }}>
          {opening ? "OPENING..." : "OPEN FREE CASE"}
        </button>

        <p style={{ color: "#777386", marginTop: 20, fontSize: 12 }}>
          Cases opened: {opened}
        </p>
      </section>

      <p style={{ color: "#777386", fontSize: 12 }}>
        Demo only · Prizes are fictional and have no item or cash value.
      </p>
    </main>
  );
}
