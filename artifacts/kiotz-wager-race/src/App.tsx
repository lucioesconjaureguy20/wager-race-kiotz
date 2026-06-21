import { useState, useEffect, useRef } from "react";

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
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function maskName(name: string) {
  if (name.length <= 2) return name;
  return name.slice(0, 2) + "*".repeat(Math.max(4, name.length - 2));
}

function fmtWager(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(2)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}K`;
  return `$${n.toFixed(2)}`;
}

const NAV_ITEMS = ["Home", "Leaderboard", "Rules"];

type Section = "Home" | "Leaderboard" | "Rules";

export default function App() {
  const [active, setActive] = useState<Section>("Home");
  const { d, h, m, s } = useCountdown(RACE_END);

  const homeRef = useRef<HTMLDivElement>(null);
  const lbRef = useRef<HTMLDivElement>(null);
  const rulesRef = useRef<HTMLDivElement>(null);

  const refs: Record<Section, React.RefObject<HTMLDivElement | null>> = {
    Home: homeRef,
    Leaderboard: lbRef,
    Rules: rulesRef,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.getAttribute("data-section") as Section;
            if (id) setActive(id);
          }
        });
      },
      { threshold: 0.4 }
    );
    [homeRef, lbRef, rulesRef].forEach((r) => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (section: Section) => {
    refs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="root">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand" onClick={() => scrollTo("Home")}>
            <img src="/logo.png" alt="Kiotz" className="nav-logo" />
            <span className="nav-name">KIOTZ9</span>
          </div>
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  className={`nav-btn${active === item ? " nav-btn--active" : ""}`}
                  onClick={() => scrollTo(item as Section)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="https://stake.com/?c=KIOTZ9"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Play on Stake
          </a>
        </div>
      </nav>

      {/* HOME */}
      <section className="section home-section" data-section="Home" ref={homeRef}>
        <div className="home-inner">
          <div className="home-left">
            <div className="home-tag">JUNE 2026 · MONTHLY RACE</div>
            <h1 className="home-title">
              Wager<br />
              <span className="accent">Race</span>
            </h1>
            <p className="home-desc">
              Wager on{" "}
              <a href="https://stake.com/?c=KIOTZ9" target="_blank" rel="noreferrer" className="stake-link">
                Stake
              </a>{" "}
              using code{" "}
              <span className="code-tag">KIOTZ9</span>{" "}
              and climb the leaderboard to win your share of the prize pool.
            </p>
            <div className="home-actions">
              <a href="https://stake.com/?c=KIOTZ9" target="_blank" rel="noreferrer" className="btn-primary">
                Register on Stake
              </a>
              <button className="btn-ghost" onClick={() => scrollTo("Leaderboard")}>
                View Leaderboard →
              </button>
            </div>
          </div>
          <div className="home-right">
            <div className="prize-card">
              <div className="prize-card-label">TOTAL PRIZE POOL</div>
              <div className="prize-card-amount">$6,000</div>
              <div className="prize-card-divider" />
              <div className="prize-card-meta">
                <div className="prize-meta-item">
                  <span className="prize-meta-label">Casino</span>
                  <span className="prize-meta-val">Stake</span>
                </div>
                <div className="prize-meta-item">
                  <span className="prize-meta-label">Code</span>
                  <span className="prize-meta-val accent">KIOTZ9</span>
                </div>
                <div className="prize-meta-item">
                  <span className="prize-meta-label">Winners</span>
                  <span className="prize-meta-val">Top 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COUNTDOWN */}
        <div className="countdown-wrap">
          <div className="countdown-label">RACE ENDS IN</div>
          <div className="countdown">
            {[
              { v: d, l: "Days" },
              { v: h, l: "Hours" },
              { v: m, l: "Min" },
              { v: s, l: "Sec" },
            ].map(({ v, l }, i) => (
              <div key={l} className="cd-group">
                <div className="cd-block">
                  <span className="cd-num">{pad(v)}</span>
                  <span className="cd-unit">{l}</span>
                </div>
                {i < 3 && <span className="cd-sep">:</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERBOARD */}
      <section className="section lb-section" data-section="Leaderboard" ref={lbRef}>
        <div className="section-head">
          <div>
            <h2 className="section-title">Leaderboard</h2>
            <p className="section-sub">Updated in real time · June 2026</p>
          </div>
        </div>

        <div className="lb-table-wrap">
          <table className="lb-table">
            <thead>
              <tr>
                <th style={{ width: 60 }}>Rank</th>
                <th>Player</th>
                <th className="align-right">Wagered</th>
                <th className="align-right">Prize</th>
              </tr>
            </thead>
            <tbody>
              {PLAYERS.map((p, i) => {
                const rank = i + 1;
                return (
                  <tr key={p.name} className="lb-row">
                    <td>
                      <span className="rank-num">{rank}</span>
                    </td>
                    <td>
                      <span className="player-name">{maskName(p.name)}</span>
                    </td>
                    <td className="align-right wagered-amt">{fmtWager(p.wagered)}</td>
                    <td className="align-right">
                      <span className="prize-amt">
                        ${PRIZES[i].toLocaleString()}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Top 3 podium cards */}
        <div className="podium">
          {[1, 0, 2].map((idx) => {
            const rank = idx + 1;
            const p = PLAYERS[idx];
            const labels = ["", "1st", "2nd", "3rd"];
            return (
              <div key={rank} className={`podium-card podium-card--${rank}`}>
                <div className="podium-rank">{labels[rank]}</div>
                <div className="podium-name">{maskName(p.name)}</div>
                <div className="podium-wager">{fmtWager(p.wagered)}</div>
                <div className="podium-prize">
                  ${PRIZES[idx].toLocaleString()}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* RULES */}
      <section className="section rules-section" data-section="Rules" ref={rulesRef}>
        <h2 className="section-title">Rules</h2>
        <p className="section-sub">How to participate and win</p>

        <div className="rules-grid">
          <div className="rule-card">
            <div className="rule-num">01</div>
            <h3 className="rule-title">Sign Up</h3>
            <p className="rule-text">
              Register on Stake using the code <span className="code-tag">KIOTZ9</span>. Only players with a valid referral code are eligible.
            </p>
          </div>
          <div className="rule-card">
            <div className="rule-num">02</div>
            <h3 className="rule-title">Wager</h3>
            <p className="rule-text">
              Place bets on any casino game on Stake — slots, live casino, or Stake originals. Sports bets do not count.
            </p>
          </div>
          <div className="rule-card">
            <div className="rule-num">03</div>
            <h3 className="rule-title">Climb the Board</h3>
            <p className="rule-text">
              Rankings are based on total amount wagered during the race period. The leaderboard updates continuously.
            </p>
          </div>
          <div className="rule-card">
            <div className="rule-num">04</div>
            <h3 className="rule-title">Collect Your Prize</h3>
            <p className="rule-text">
              Prizes are distributed via direct message at the end of the race. Top 10 players split the $6,000 pool.
            </p>
          </div>
        </div>

        <div className="eligibility-box">
          <h4 className="elig-title">Eligibility & Fair Play</h4>
          <ul className="elig-list">
            <li>One account per person. Multi-accounting results in immediate disqualification.</li>
            <li>Kiotz reserves the right to disqualify accounts with suspicious wagering activity.</li>
            <li>Prizes are non-transferable and not redeemable for cash outside of Stake.</li>
            <li>This promotion is for entertainment purposes. Gamble responsibly. 18+</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/logo.png" alt="Kiotz" className="footer-logo" />
            <span className="footer-name">KIOTZ9</span>
          </div>
          <div className="footer-links">
            <a href="https://kick.com/kiotz9" target="_blank" rel="noreferrer">Kick</a>
            <a href="https://stake.com/?c=KIOTZ9" target="_blank" rel="noreferrer">Stake</a>
          </div>
          <p className="footer-disclaimer">
            Gambling involves risk. Play responsibly. 18+ only.
          </p>
        </div>
      </footer>
    </div>
  );
}
