
"use client";

import Link from "next/link";

const games = [
  {
    name: "Coinflip",
    emoji: "🪙",
    description: "Pick heads or tails and test your luck.",
    href: "/coinflip",
  },
  {
    name: "Crash",
    emoji: "📈",
    description: "Watch the multiplier rise in a free demo.",
    href: "/crash",
  },
  {
    name: "Jackpot",
    emoji: "🎰",
    description: "Explore the jackpot game demo.",
    href: "/jackpot",
  },
  {
    name: "Upgrader",
    emoji: "⬆️",
    description: "Try upgrading virtual collectibles.",
    href: "/upgrader",
  },
  {
    name: "Cases",
    emoji: "📦",
    description: "Explore virtual collectible cases.",
    href: "/cases",
  },
  {
    name: "Trading",
    emoji: "🔄",
    description: "Browse the trading demo.",
    href: "/trading",
  },
];

export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#090910",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "30px 20px",
    }}>
      <header style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 15,
      }}>
        <h2 style={{ color: "#b9a3ff", fontSize: 27 }}>
          CASHFLIP
        </h2>

        <Link href="/login" style={{
          color: "white",
          textDecoration: "none",
          background: "#211a35",
          border: "1px solid #9672f5",
          padding: "11px 20px",
          borderRadius: 9,
        }}>
          Roblox Login
        </Link>
      </header>

      <section style={{
        maxWidth: 850,
        margin: "85px auto 65px",
        textAlign: "center",
      }}>
        <p style={{
          color: "#a78bfa",
          letterSpacing: 4,
          fontWeight: 800,
        }}>
          THE LIMITEDS COMMUNITY
        </p>

        <h1 style={{
          fontSize: "clamp(42px, 8vw, 72px)",
          margin: "15px 0",
          fontWeight: 900,
        }}>
          Welcome to <span style={{ color: "#a78bfa" }}>CashFlip</span>
        </h1>

        <p style={{
          color: "#aaa6bb",
          fontSize: 18,
          lineHeight: 1.7,
        }}>
          Explore games, virtual collectibles and the Roblox
          Limiteds community.
        </p>

        <p style={{
          color: "#c4b5fd",
          marginTop: 22,
          fontWeight: 700,
        }}>
          FREE DEMOS · NO BETS · NO ITEM TRANSFERS
        </p>
      </section>

      <section style={{
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        <h2 style={{
          fontSize: 28,
          marginBottom: 25,
          textAlign: "center",
        }}>
          Explore CashFlip
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: 20,
        }}>
          {games.map((game) => (
            <Link
              key={game.name}
              href={game.href}
              style={{
                textDecoration: "none",
                color: "white",
                background: "#14121f",
                border: "1px solid #ffffff18",
                borderRadius: 15,
                padding: 25,
                transition: "0.2s",
              }}
            >
              <div style={{ fontSize: 38 }}>
                {game.emoji}
              </div>

              <h3 style={{
                fontSize: 23,
                margin: "15px 0 8px",
              }}>
                {game.name}
              </h3>

              <p style={{
                color: "#aaa6bb",
                lineHeight: 1.5,
              }}>
                {game.description}
              </p>

              <p style={{
                color: "#b9a3ff",
                fontWeight: 800,
                marginTop: 20,
              }}>
                OPEN GAME →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <footer style={{
        textAlign: "center",
        color: "#777184",
        marginTop: 80,
        padding: 25,
        borderTop: "1px solid #ffffff15",
      }}>
        CashFlip — A virtual community demo.
        <br />
        Not affiliated with Roblox Corporation.
      </footer>
    </main>
  );
}
