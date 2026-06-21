import { useState, useEffect } from "react";

const PRIZES = [2500, 1500, 800, 500, 300, 200, 100, 50, 30, 20];

const PLAYERS = [
  { name: "xX_ShadowBet_Xx", wagered: 247832.5 },
  { name: "NightFalcon99", wagered: 198441.2 },
  { name: "DragonSlayer47", wagered: 156723.8 },
  { name: "CryptoKing88", wagered: 132059.1 },
  { name: "VipWagger420", wagered: 98441.6 },
  { name: "LuckyAce77", wagered: 76320.4 },
  { name: "RocketBet21", wagered: 54819.7 },
  { name: "GoldRush555", wagered: 41203.3 },
  { name: "DarkHorse69", wagered: 28541.9 },
  { name: "WildCard33", wagered: 17882.2 },
];

const RACE_END = new Date();
RACE_END.setDate(RACE_END.getDate() + 6);
RACE_END.setHours(23, 59, 59, 0);

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return timeLeft;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function fmt(n: number) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const RANK_COLORS: Record<number, string> = {
  1: "#FFD700",
  2: "#C0C0C0",
  3: "#CD7F32",
};

const RANK_BG: Record<number, string> = {
  1: "rgba(255,215,0,0.07)",
  2: "rgba(192,192,192,0.05)",
  3: "rgba(205,127,50,0.05)",
};

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1)
    return (
      <span className="rank-badge gold">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
        1
      </span>
    );
  if (rank === 2)
    return <span className="rank-badge silver">2</span>;
  if (rank === 3)
    return <span className="rank-badge bronze">3</span>;
  return <span className="rank-badge default">{rank}</span>;
}

export default function App() {
  const { d, h, m, s } = useCountdown(RACE_END);

  return (
    <div className="page">
      <div className="bg-glow" />

      <header className="header">
        <div className="logo-wrap">
          <img src="/logo.png" alt="Kiotz" className="logo-img" />
          <div>
            <div className="channel-name">KIOTZ</div>
            <div className="channel-sub">Kick Official Channel</div>
          </div>
        </div>
        <div className="stake-badge">
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#00e701"/>
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#000" fontSize="18" fontWeight="bold">S</text>
          </svg>
          <span>Powered by <strong>Stake</strong></span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-tag">MENSUAL · JUNIO 2026</div>
        <h1 className="hero-title">
          WAGER <span className="green">RACE</span>
        </h1>
        <div className="prize-pool">
          <span className="prize-label">PRIZE POOL</span>
          <span className="prize-amount">$6,000</span>
        </div>
        <p className="hero-desc">
          Apostá en <strong style={{ color: "#00e701" }}>Stake</strong> usando el código{" "}
          <span className="code-pill">KIOTZ</span> y clasificate en el leaderboard para ganar premios reales.
        </p>
      </section>

      <section className="countdown-section">
        <div className="countdown-label">TERMINA EN</div>
        <div className="countdown">
          {[
            { v: d, l: "DÍAS" },
            { v: h, l: "HORAS" },
            { v: m, l: "MIN" },
            { v: s, l: "SEG" },
          ].map(({ v, l }, i) => (
            <div key={l} className="countdown-block">
              <span className="countdown-num">{pad(v)}</span>
              <span className="countdown-unit">{l}</span>
              {i < 3 && <span className="colon">:</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="leaderboard-section">
        <div className="section-header">
          <h2 className="section-title">LEADERBOARD</h2>
          <span className="live-pill">
            <span className="live-dot" />
            EN VIVO
          </span>
        </div>

        <div className="table-wrap">
          <table className="lb-table">
            <thead>
              <tr>
                <th>#</th>
                <th>JUGADOR</th>
                <th className="right">APOSTADO</th>
                <th className="right">PREMIO</th>
              </tr>
            </thead>
            <tbody>
              {PLAYERS.map((p, i) => {
                const rank = i + 1;
                const color = RANK_COLORS[rank] || "#39ff14";
                const bg = RANK_BG[rank] || "transparent";
                return (
                  <tr key={p.name} style={{ background: bg }} className="lb-row">
                    <td>
                      <RankBadge rank={rank} />
                    </td>
                    <td>
                      <span className="player-name" style={{ color }}>
                        {p.name}
                      </span>
                    </td>
                    <td className="right wagered">${fmt(p.wagered)}</td>
                    <td className="right">
                      <span className="prize-cell" style={{ color: rank <= 3 ? color : "#39ff14" }}>
                        ${PRIZES[i].toLocaleString()}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rules-section">
        <h3 className="rules-title">REGLAS</h3>
        <ul className="rules-list">
          <li>Registrate en Stake con el código <span className="code-pill">KIOTZ</span></li>
          <li>El leaderboard se calcula en base al monto total apostado durante el mes</li>
          <li>Solo cuentan apuestas en juegos de casino (slots, live casino, originales de Stake)</li>
          <li>Los premios se distribuyen al finalizar la race y se acreditan por DM</li>
          <li>Kiotz se reserva el derecho de descalificar cuentas con actividad sospechosa</li>
        </ul>
      </section>

      <footer className="footer">
        <img src="/logo.png" alt="Kiotz" className="footer-logo" />
        <p>
          Seguime en{" "}
          <a href="https://kick.com/kiotz" target="_blank" rel="noreferrer" className="kick-link">
            kick.com/kiotz
          </a>
        </p>
        <p className="disclaimer">
          Jugar con dinero real implica riesgos. Apostá con responsabilidad. +18.
        </p>
      </footer>
    </div>
  );
}
