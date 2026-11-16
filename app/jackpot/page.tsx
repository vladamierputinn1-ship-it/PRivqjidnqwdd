
"use client";

import { useState } from "react";

const initialPlayers = [
  { name: "ShadowX", tickets: 25 },
  { name: "LunaRoblox", tickets: 40 },
  { name: "PixelKing", tickets: 15 },
  { name: "VoidPlayer", tickets: 20 },
];

export default function JackpotPage() {
  const [players, setPlayers] = useState(initialPlayers);
  const [winner, setWinner] = useState("");
  const [spinning, setSpinning] = useState(false);

  const totalTickets = players.reduce((sum, player) => sum + player.tickets, 0);

  function pickWinner() {
    if (spinning || players.length === 0) return;

    setSpinning(true);
    setWinner("");

    setTimeout(() => {
      let ticket = Math.random() * totalTickets;
      let selected = players[0].name;

      for (const player of players) {
        ticket -= player.tickets;
        if (ticket < 0) {
          selected = player.name;
          break;
        }
      }

      setWinner(selected);
      setSpinning(false);
    }, 1800);
  }

  function reset() {
    setPlayers(initialPlayers);
    setWinner("");
  }

  return (
    <main style={{
      minHeight: "100vh", background: "#090910", color: "white",
      fontFamily: "Arial", padding: 30, textAlign: "center"
    }}>
      <a href="/" style={{ color: "#b9a3ff" }}>← CASHFLIP</a>

      <h1 style={{ fontSize: 42, marginTop: 55 }}>🎰 Jackpot</h1>
      <p style={{ color: "#aaa6bb", marginTop: 12 }}>
        A virtual ticket draw. Demo tickets have no value.
      </p>

      <section style={{
        maxWidth: 600, margin: "35px auto", padding: 25,
        background: "#171522", border: "1px solid #a78bfa55",
        borderRadius: 16
      }}>
        <p style={{ color: "#aaa6bb" }}>TOTAL DEMO TICKETS</p>
        <h2 style={{ color: "#c4b5fd", fontSize: 45, margin: 12 }}>
          {totalTickets}
        </h2>

        <div style={{ marginTop: 25, textAlign: "left" }}>
          {players.map((player) => (
            <div key={player.name} style={{
              display: "flex", justifyContent: "space-between",
              padding: 15, marginBottom: 9, borderRadius: 9,
              background: "#ffffff09"
            }}>
              <strong>👤 {player.name}</strong>
              <span style={{ color: "#b9a3ff" }}>
                {player.tickets} tickets
              </span>
            </div>
          ))}
        </div>

        <button onClick={pickWinner} disabled={spinning} style={{
          width: "100%", padding: 16, marginTop: 20,
          border: 0, borderRadius: 9,
          background: "#9672f5", color: "white",
          fontWeight: 800, cursor: "pointer"
        }}>
          {spinning ? "DRAWING WINNER..." : "DRAW WINNER"}
        </button>

        {winner && (
          <div style={{
            marginTop: 22, padding: 20,
            borderRadius: 12, background: "#a78bfa20"
          }}>
            <p style={{ color: "#aaa6bb" }}>THE WINNER IS</p>
            <h2 style={{ color: "#c4b5fd", marginTop: 10 }}>
              🏆 {winner}
            </h2>
          </div>
        )}

        <button onClick={reset} style={{
          marginTop: 18, background: "transparent",
          border: "1px solid #ffffff30", color: "white",
          padding: "10px 20px", borderRadius: 8, cursor: "pointer"
        }}>
          Reset demo
        </button>
      </section>
    </main>
  );
}
