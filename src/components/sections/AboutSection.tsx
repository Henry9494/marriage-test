import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      gsap.timeline({
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
      gsap.timeline({
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
          }}
        >
          <img
            src="https://placehold.co/390x900/2c3e50/2c3e50"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.2)",
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
          }}
        >
          <img
            src="https://placehold.co/390x900/3d2c1e/3d2c1e"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.2)",
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
          }}
        >
          <img
            src="https://placehold.co/390x900/1a2a1a/1a2a1a"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </div>

      {/* 콘텐츠 섹션 (sticky 위에 오버레이) */}
      <div style={{ marginTop: "-100dvh", position: "relative", zIndex: 1 }}>
        {/* Section 1: 신랑 */}
        <div
          ref={section1Ref}
          style={{
            height: "100dvh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0 20px",
            color: "#fff",
          }}
        >
          {/* ABOUT US 레이블 */}
          <p
            style={{
              margin: 0,
              paddingTop: "60px",
              textAlign: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: 1.05,
              letterSpacing: "-1.296px",
              textTransform: "uppercase",
            }}
          >
            ABOUT US
          </p>

          {/* 신랑 이름 + 번호 */}
          <div
            style={{
              marginTop: "auto",
              paddingBottom: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "54px",
                  lineHeight: 1.05,
                  letterSpacing: "-2.916px",
                  textTransform: "uppercase",
                }}
              >
                신랑 * 김제형
              </p>
            </div>

            {/* 사진 + 설명 */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              {/* 설명 텍스트 */}
              <div
                style={{
                  flex: 1,
                }}
              >
                <p
                  style={{
                    margin: "0 0 4px",
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    lineHeight: 1.16,
                    letterSpacing: "-0.51px",
                    textTransform: "uppercase",
                  }}
                >
                  김상욱 이미자의 아들 김제형 입니다.
                </p>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    lineHeight: 1.16,
                    letterSpacing: "-0.51px",
                    textTransform: "uppercase",
                  }}
                >
                  저는 IT 개발자이고
                  <br />
                  진지하고 차분한 성격이에요
                  <br />
                  여기저기 여행다니는걸 좋아해요
                </p>
              </div>

              {/* 사진 */}
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  flexShrink: 0,
                  border: "0.5px solid rgba(0,0,0,0.19)",
                  borderRadius: "1px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://placehold.co/120x120/cccccc/cccccc"
                  alt="신랑 사진"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* 섹션 번호 */}
          <p
            style={{
              alignSelf: "center",
              marginTop: "auto",
              marginBottom: "24px",
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              opacity: 0.6,
            }}
          >
            ①
          </p>
        </div>

        {/* Section 2: 신부 */}
        <div
          ref={section2Ref}
          style={{
            height: "100dvh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0 20px",
            color: "#fff",
          }}
        >
          {/* 신부 이름 */}
          <div style={{ marginTop: "auto", paddingBottom: "8px" }}>
            <p
              style={{
                margin: "0 0 16px",
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "54px",
                lineHeight: 1.05,
                letterSpacing: "-2.916px",
                textTransform: "uppercase",
              }}
            >
              신부 * 김민아
            </p>

            {/* 사진 + 설명 */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              {/* 사진 */}
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  flexShrink: 0,
                  border: "0.5px solid rgba(0,0,0,0.19)",
                  borderRadius: "1px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://placehold.co/120x120/dddddd/dddddd"
                  alt="신부 사진"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* 설명 텍스트 */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    lineHeight: 1.16,
                    letterSpacing: "-0.51px",
                    textTransform: "uppercase",
                  }}
                >
                  김의진 김인숙의 딸 김민아입니다.
                </p>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    lineHeight: 1.16,
                    letterSpacing: "-0.51px",
                    textTransform: "uppercase",
                  }}
                >
                  저는 IT 디자이너이고
                  <br />
                  웃음이 많고 밝은 에너지가 넘쳐요
                  <br />
                  빵이랑 커피를 아주 좋아해요
                </p>
              </div>
            </div>
          </div>

          {/* 섹션 번호 */}
          <p
            style={{
              alignSelf: "center",
              marginTop: "auto",
              marginBottom: "24px",
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              opacity: 0.6,
            }}
          >
            ②
          </p>
        </div>

        {/* Section 3: Date & Time */}
        <div
          ref={section3Ref}
          style={{
            height: "100dvh",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 28px",
          }}
        >
          {/* 날짜·시간 카드 */}
          <div
            style={{
              width: "334px",
              maxWidth: "100%",
              padding: "40px 24px",
              borderRadius: "1px",
              backdropFilter: "blur(7px)",
              WebkitBackdropFilter: "blur(7px)",
              backgroundColor: "rgba(255,255,255,0.8)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "normal",
                color: "#00a8a6",
                textTransform: "capitalize",
              }}
            >
              Date and Time
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  lineHeight: "normal",
                  color: "#000",
                }}
              >
                2026년 9월 20일 일요일 오후 1시
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  lineHeight: 1.4,
                  color: "#000",
                }}
              >
                강남구 도산대로 318 SB타워 G층
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  lineHeight: 1.4,
                  color: "#000",
                }}
              >
                마리아쥬스퀘어 웨딩홀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
