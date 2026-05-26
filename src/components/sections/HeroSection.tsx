import { valueWithRatio } from "@/utils";
import heroBg from "../../assets/hero-bg.webp";
import { useScale } from "@/context/ScaleContext";
import { MAX_WIDTH } from "@/constants";
import { Spacing } from "../Spacing";

export default function HeroSection() {
  const scale = useScale();

  return (
    <>
      <section
        style={{
          aspectRatio: `${MAX_WIDTH} / 844`,
        }}
      >
        <img
          src={heroBg}
          alt="히어로 이미지"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </section>

      <section style={{ padding: `0 ${valueWithRatio(25, scale)}px` }}>
        <Spacing height={22} />
        <div
          style={{
            fontWeight: 400,
            fontSize: 24,
            lineHeight: "108%",
            letterSpacing: "-1.296px",
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
