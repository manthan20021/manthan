"use client";

import { useState, useEffect, useRef } from "react";

const SLIDES = [
  {
    category: "MARKETS",
    number: "01",
    headline: "S&P 500 Surges to Historic Peak",
    sub: "Investors eye central bank signals ahead of the next policy meeting",
    bg: "#ff4d00",
    icon: "📈",
  },
  {
    category: "TECHNOLOGY",
    number: "02",
    headline: "AI Raises $40B in Record Quarter",
    sub: "Venture capital floods into generative AI infrastructure plays",
    bg: "#69ff00",
    icon: "🤖",
  },
  {
    category: "BILLIONAIRES",
    number: "03",
    headline: "Top 10 Add $120B to Net Worth",
    sub: "Tech titans and energy moguls dominate the global wealth surge",
    bg: "#0047ff",
    icon: "💰",
  },
  {
    category: "LEADERSHIP",
    number: "04",
    headline: "4-Day Week Wins Over the CEOs",
    sub: "Fortune 500 productivity metrics astonish even the biggest skeptics",
    bg: "#ff00f5",
    icon: "🏆",
  },
];

const INTERVAL = 3500;
const EXIT_MS  = 260;
const ENTER_MS = 300;
const COUNT    = SLIDES.length;

export default function ForbesCard() {
  const [cur,   setCur]   = useState(0);
  const [prev,  setPrev]  = useState(null);
  const [phase, setPhase] = useState("idle");
  const busy = useRef(false);
  const tid  = useRef(null);

  const transition = (to) => {
    if (busy.current || to === cur) return;
    busy.current = true;
    setPrev(cur);
    setPhase("exit");
    setTimeout(() => {
      setCur(to);
      setPhase("enter");
      setTimeout(() => {
        setPrev(null);
        setPhase("idle");
        busy.current = false;
      }, ENTER_MS);
    }, EXIT_MS);
  };

  const startTimer = (currentIdx) => {
    clearInterval(tid.current);
    let idx = currentIdx;
    tid.current = setInterval(() => {
      if (!busy.current) {
        const next = (idx + 1) % COUNT;
        idx = next;
        busy.current = true;
        setPrev(idx === 0 ? COUNT - 1 : idx - 1);
        setCur((c) => {
          const n = (c + 1) % COUNT;
          setPrev(c);
          setPhase("exit");
          setTimeout(() => {
            setCur(n);
            setPhase("enter");
            setTimeout(() => {
              setPrev(null);
              setPhase("idle");
              busy.current = false;
            }, ENTER_MS);
          }, EXIT_MS);
          return c;
        });
      }
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer(0);
    return () => clearInterval(tid.current);
  }, []);

  const jump = (i) => {
    clearInterval(tid.current);
    transition(i);
    setTimeout(() => startTimer(i), EXIT_MS + ENTER_MS + 100);
  };

  const s  = SLIDES[cur];
  const ps = prev !== null ? SLIDES[prev] : null;

  return (
    <>
      <style>{`
        .fc-exit  { animation: fcUp   ${EXIT_MS}ms  ease-in  forwards; }
        .fc-enter { animation: fcDown ${ENTER_MS}ms ease-out forwards; }
        @keyframes fcUp   { from { opacity:1; transform:translateY(0px);   } to { opacity:0; transform:translateY(-14px); } }
        @keyframes fcDown { from { opacity:0; transform:translateY(14px);  } to { opacity:1; transform:translateY(0px);   } }
      `}</style>

      {/* Wrapper: fixed 344×231, won't affect parent layout */}
      <div
        className={`relative overflow-hidden rounded-lg inline-block flex-shrink-0 transition-colors duration-500 ${s.bg}`}
        style={{ width: 344, height: 231, minWidth: 344, maxWidth: 344 }}
      >
        {/* Left black accent strip */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-black z-10" />

        {/* Exiting slide */}
        {ps && phase === "exit" && (
          <div className="fc-exit absolute inset-0 z-20 flex flex-col justify-between px-4 py-3 pl-5">
            <Inner s={ps} cur={prev} total={COUNT} />
          </div>
        )}

        {/* Active slide */}
        <div className={`${phase === "enter" ? "fc-enter" : ""} absolute inset-0 z-20 flex flex-col justify-between px-4 py-3 pl-5`}>
          <Inner s={s} cur={cur} total={COUNT} jump={jump} />
        </div>
      </div>
    </>
  );
}

function Inner({ s, cur, total, jump }) {
  return (
    <>
      {/* TOP ROW */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm leading-none">{s.icon}</span>
          <span className="font-black text-black text-xs tracking-widest uppercase">
            {s.category}
          </span>
        </div>
        <span className="font-black text-black/10 text-5xl leading-none tracking-tighter select-none">
          {s.number}
        </span>
      </div>

      {/* MIDDLE — HEADLINE + SUB */}
      <div className="flex flex-col gap-1.5">
        <p className="font-black text-black text-xl leading-snug tracking-tight">
          {s.headline}
        </p>
        <p className="font-bold text-black/55 text-[11px] leading-relaxed">
          {s.sub}
        </p>
      </div>

      {/* BOTTOM ROW */}
      <div className="flex items-center justify-between">
        <span className="font-black text-black text-sm tracking-widest uppercase">
          Forbes
        </span>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => jump && jump(i)}
              className={`h-0.5 rounded-full transition-all duration-300 cursor-pointer border-0 p-0 ${i === cur ? "bg-black" : "bg-black/25"}`}
              style={{ width: i === cur ? 20 : 6 }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}