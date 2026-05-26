import { valueWithRatio } from "@/utils";
import heroBg from "../../assets/hero-bg.webp";
import { useScale } from "@/context/ScaleContext";
import { Spacing } from "../Spacing";

export default function HeroSection() {
  const scale = useScale();

  return (
    <>
      <section
        style={{
          aspectRatio: "61 / 132",
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <section
        style={{
          padding: `0 ${valueWithRatio(25, scale)}px`,
          backgroundColor: "#fff",
          fontFamily: "var(--font-display)",
        }}
      >
        <Spacing height={22} />
        <div
          style={{
            fontWeight: 400,
            fontSize: 24,
            lineHeight: "108%",
            letterSpacing: "-1.296px",
            fontFamily: "var(--font-display)",
          }}
        >
          {"{ "}2026년 9월 20일 일요일 오후 1시{" }"}
          <br />
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              fontFamily: "var(--font-display)",
              lineHeight: "108%",
              letterSpacing: "-1.296px",
            }}
          >
            {" "}
            * 마리아쥬스퀘어 *{" "}
          </span>
          우리의 새출발에 소중한 분들을 초대합니다.
        </div>
        <Spacing height={124} />
      </section>
    </>
  );
}
