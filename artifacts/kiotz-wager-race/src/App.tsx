import { useState, useEffect, useRef } from "react";

function TrophyIcon({ color, size = 48 }: { color: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path opacity="0.2" d="M20.9661 26.0359C22.0325 25.5956 23.116 25.2122 24.1488 25.0285C25.1764 24.8474 25.9796 24.9284 26.4438 25.3616C25.5015 26.2702 24.2313 26.864 23.1031 26.9315C21.9689 27.0026 21.2435 26.5918 20.9661 26.0359ZM20.9661 26.0359C22.0273 25.5714 22.8682 24.7271 23.1988 23.8329C23.5343 22.9339 23.3376 22.2021 22.9134 21.7441C22.2926 22.3709 21.724 23.1004 21.3051 23.9057C20.8913 24.7081 20.7266 25.4529 20.9661 26.0359ZM25.5711 22.5887C26.2801 21.7646 27.0671 20.9811 27.9112 20.3947C28.7523 19.813 29.5162 19.5563 30.1178 19.7557C29.6466 20.9588 28.7743 22.0087 27.8205 22.5262C26.8627 23.0496 26.0621 22.974 25.5711 22.5887ZM25.5711 22.5887C26.2644 21.7451 26.6365 20.6463 26.5473 19.7087C26.4607 18.765 25.9779 18.187 25.4004 17.949C25.1022 18.7672 24.9116 19.6529 24.9045 20.5441C24.9004 21.4307 25.1019 22.1635 25.5711 22.5887ZM28.1659 17.6275C28.473 16.5937 28.8807 15.5607 29.4202 14.6801C29.959 13.8048 30.5572 13.2543 31.1904 13.186C31.2434 14.4747 30.8625 15.7852 30.1987 16.6456C29.5334 17.5129 28.7732 17.773 28.1659 17.6275ZM28.1659 17.6275C28.4505 16.5828 28.3497 15.436 27.8897 14.6234C27.4299 13.8039 26.7529 13.4787 26.1261 13.5023C26.1825 14.3692 26.3626 15.2499 26.7187 16.0577C27.0753 16.8599 27.5625 17.4369 28.1659 17.6275ZM28.5328 12.0514C28.3918 10.9823 28.3317 9.8677 28.4409 8.83459C28.5522 7.80664 28.8468 7.04963 29.395 6.72261C30.0272 7.88683 30.2375 9.24624 29.9891 10.3088C29.7417 11.3782 29.1486 11.931 28.5328 12.0514ZM28.5328 12.0514C28.3669 10.9817 27.793 9.97521 27.0186 9.42156C26.2416 8.86154 25.4724 8.84411 24.9111 9.12749C25.3552 9.90217 25.8957 10.6338 26.559 11.2231C27.2201 11.8072 27.9012 12.129 28.5328 12.0514ZM11.5919 29.4925C11.5919 29.4925 12.2655 27.0433 15.1167 27.0723C26.7428 27.5136 32.0169 14.6718 26.4401 6.78523M11.0413 26.0359C9.97494 25.5956 8.89143 25.2122 7.8586 25.0285C6.83097 24.8474 6.02781 24.9284 5.56364 25.3616C6.50587 26.2702 7.77613 26.864 8.90433 26.9315C10.0385 27.0026 10.7639 26.5918 11.0413 26.0359ZM11.0413 26.0359C9.98013 25.5714 9.13968 24.7271 8.80907 23.8329C8.47364 22.9339 8.6703 22.2021 9.09456 21.7441C9.71536 22.3709 10.2839 23.1004 10.7028 23.9057C11.1166 24.7081 11.2808 25.4529 11.0413 26.0359ZM6.43613 22.5887C5.72718 21.7646 4.94016 20.9811 4.09605 20.3947C3.25499 19.813 2.49108 19.5563 1.88948 19.7557C2.36063 20.9588 3.23298 22.0087 4.18677 22.5262C5.14453 23.0496 5.94518 22.974 6.43613 22.5887ZM6.43613 22.5887C5.74289 21.7451 5.37098 20.6463 5.46017 19.7087C5.54673 18.765 6.02949 18.187 6.60701 17.949C6.90528 18.7672 7.09588 19.6529 7.10298 20.5441C7.10707 21.4307 6.90532 22.1635 6.43613 22.5887ZM3.8419 17.6275C3.53477 16.5937 3.12708 15.5607 2.58765 14.6801C2.04883 13.8048 1.45059 13.2543 0.817381 13.186C0.76444 14.4747 1.14529 15.7852 1.80907 16.6456C2.47437 17.5129 3.23461 17.773 3.8419 17.6275ZM3.8419 17.6275C3.55733 16.5828 3.65787 15.436 4.11783 14.6234C4.57761 13.8039 5.25465 13.4787 5.88143 13.5023C5.82501 14.3692 5.64491 15.2499 5.28888 16.0577C4.93223 16.8599 4.44527 17.4369 3.8419 17.6275ZM3.47462 12.0514C3.61559 10.9823 3.67574 9.8677 3.5665 8.83459C3.45524 7.80664 3.16064 7.04963 2.61241 6.72261C1.98024 7.88683 1.76994 9.24624 2.01832 10.3088C2.26573 11.3782 2.85877 11.931 3.47462 12.0514ZM3.47462 12.0514C3.64047 10.9817 4.21445 9.97521 4.98893 9.42156C5.76592 8.86154 6.53509 8.84411 7.0964 9.12749C6.65228 9.90217 6.11175 10.6338 5.44852 11.2231C4.78744 11.8072 4.10623 12.129 3.47462 12.0514ZM11.5932 26.2576C3.79966 23.3409 0.927058 13.3477 5.56754 6.78525M16.0015 27.0838L16.8913 27.0724C19.7424 27.0433 20.4161 29.4925 20.4161 29.4925M23.7371 4.98443C24.7107 5.78809 25.6176 6.4283 26.477 6.83798C26.4079 5.91445 25.8495 4.76784 24.7456 3.85802C23.6489 2.94381 22.263 2.49849 21.1753 2.51202C21.8696 3.33702 22.7676 4.17813 23.7371 4.98443ZM8.27057 4.98443C7.29691 5.78809 6.39002 6.4283 5.53068 6.83798C5.59976 5.91445 6.15814 4.76784 7.26201 3.85802C8.35878 2.94381 9.74465 2.49849 10.8323 2.51202C10.138 3.33702 9.24006 4.17813 8.27057 4.98443Z" stroke={color} strokeWidth="1.21113" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.9757 11.102V9.29595H17.3497V19.502H15.3337V11.102H13.9757Z" fill={color}/>
    </svg>
  );
}

const TROPHY_COLORS: Record<number, string> = {
  1: "#E1B85C",
  2: "#B0B8C1",
  3: "#A0694A",
};

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

        {/* Top 3 podium cards — above the table */}
        <div className="podium">
          {[1, 0, 2].map((idx) => {
            const rank = idx + 1;
            const p = PLAYERS[idx];
            const labels = ["", "1st", "2nd", "3rd"];
            const color = TROPHY_COLORS[rank];
            return (
              <div key={rank} className={`podium-card podium-card--${rank}`} style={{ borderColor: `${color}22` }}>
                <TrophyIcon color={color} size={52} />
                <div className="podium-rank" style={{ color }}>{labels[rank]}</div>
                <div className="podium-name">{maskName(p.name)}</div>
                <div className="podium-wager">{fmtWager(p.wagered)}</div>
                <div className="podium-prize" style={{ color }}>
                  ${PRIZES[idx].toLocaleString()}
                </div>
              </div>
            );
          })}
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
