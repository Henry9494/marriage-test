import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroImg from "../../assets/hero.png";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // 이미지: 스크롤 시 위로 50px 이동 (느림)
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  // 텍스트: 스크롤 시 위로 320px 이동 (빠름)
  const textY = useTransform(scrollYProgress, [0, 1], [0, -320]);

  return (
    <section
      ref={sectionRef}
      style={{
        height: "844px",
        position: "relative",
        overflow: "hidden",
        border: "3px solid red",
      }}
    >
      {/* 배경 이미지 — 패럴랙스용 높이/위치 보정 */}
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "calc(100% + 50px)",
          top: 0,
          border: "3px solid blue",
          y: bgY,
        }}
      >
        <img
          src={heroImg}
          alt="히어로 이미지"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* 어두운 오버레이 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </motion.div>

      {/* 타이틀 텍스트 */}
      <motion.div
        style={{
          position: "absolute",
          left: "32px",
          right: "28px",
          top: "343px",
          y: textY,
        }}
      >
        <p
          style={{
            fontWeight: 900,
            fontSize: "clamp(60px, 23vw, 90px)",
            lineHeight: 1,
            letterSpacing: "-0.08em",
            color: "#8cdbcf",
            margin: 0,
          }}
        >
          ITS
          <br />
          OUR
          <br />
          PARTY
          <br />
          DAY*
        </p>

        <div style={{ height: 22 }} />

        {/* 하단 날짜 & 장소 텍스트 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "8px",
            border: "3px solid yellow",
          }}
        >
          <p
            style={{
              fontWeight: 400,
              fontSize: "12px",
              color: "#fff",
              margin: 0,
            }}
          >
            2026년 9월 20일 일요일 오후 1시
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: "12px",
              color: "#fff",
              margin: 0,
              textAlign: "center",
            }}
          >
            마리아쥬스퀘어
          </p>
        </div>
      </motion.div>
    </section>
  );
}
