import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutSection1Bg from "../../assets/about-section-1-bg.webp";
import aboutSection2Bg from "../../assets/about-section-2-bg.webp";
import aboutSection3Bg from "../../assets/about-section-3-bg.webp";
import aboutSection1Title from "../../assets/about-section-1-title.webp";
import aboutSection1Detail from "../../assets/about-section-1-detail.webp";
import aboutSection2Detail from "../../assets/about-section-2-detail.webp";
import aboutSection3Detail from "../../assets/about-section-3-detail.webp";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const bg3Ref = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // section2 진입 시 bg1 → bg2 crossfade
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        })
        .to(bg1Ref.current, { opacity: 0 }, 0)
        .to(bg2Ref.current, { opacity: 1 }, 0);

      // section3 진입 시 bg2 → bg3 crossfade
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section3Ref.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        })
        .to(bg2Ref.current, { opacity: 0 }, 0)
        .to(bg3Ref.current, { opacity: 1 }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* sticky 배경 레이어 */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100dvh",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* 배경1: 신랑 */}
        <div
          ref={bg1Ref}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${aboutSection1Bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              position: "absolute",
              inset: 0,
            }}
          />
        </div>

        {/* 배경2: 신부 */}
        <div
          ref={bg2Ref}
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0,
            backgroundImage: `url(${aboutSection2Bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              position: "absolute",
              inset: 0,
            }}
          />
        </div>

        {/* 배경3: Date & Time */}
        <div
          ref={bg3Ref}
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0,
            backgroundImage: `url(${aboutSection3Bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              position: "absolute",
              inset: 0,
            }}
          />
        </div>
      </div>

      {/* 콘텐츠 섹션 (sticky 위에 오버레이) */}
      <div
        style={{
          marginTop: "-100dvh",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section 1: 신랑 */}
        <div
          ref={section1Ref}
          style={{
            height: "100dvh",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: `${(60 * 100) / 721}%`,
              width: `${(113 * 100) / 390}%`,
              aspectRatio: 113 / 25,
              backgroundImage: `url(${aboutSection1Title})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: `${(53 * 100) / 390}%`,
              bottom: `${(48 * 100) / 721}%`,
              width: `${(310 * 100) / 390}%`,
              aspectRatio: 310 / 393,
              backgroundImage: `url(${aboutSection1Detail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Section 2: 신부 */}
        <div
          ref={section2Ref}
          style={{
            height: "100dvh",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: `${(45 * 100) / 390}%`,
              bottom: `${(132 * 100) / 721}%`,
              width: `${(294 * 100) / 390}%`,
              aspectRatio: 294 / 393,
              backgroundImage: `url(${aboutSection2Detail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Section 3: Date & Time */}
        <div
          ref={section3Ref}
          style={{
            height: "100dvh",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: `${(28 * 100) / 390}%`,
              right: `${(28 * 100) / 390}%`,
              top: "50%",
              transform: "translateY(-50%)",
              aspectRatio: 334 / 198,
              backgroundImage: `url(${aboutSection3Detail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
