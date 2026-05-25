export default function HeroSection() {
  return (
    <>
      {/* 히어로 이미지 영역 */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "844px",
          overflow: "hidden",
          backgroundColor: "#1a1a1a",
        }}
      >
        {/* 배경 이미지 */}
        <img
          src="https://placehold.co/390x844/2a2a2a/2a2a2a"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* 어두운 오버레이 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* "IT'S" */}
        <p
          style={{
            position: "absolute",
            top: "332px",
            left: "32px",
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "90px",
            lineHeight: "90px",
            letterSpacing: "-1.8px",
            color: "#8cdbcf",
            whiteSpace: "nowrap",
          }}
        >
          IT'S
        </p>

        {/* "OUR PARTY DAY" */}
        <div
          style={{
            position: "absolute",
            top: "424px",
            left: "32px",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "90px",
            lineHeight: "90px",
            letterSpacing: "-1.8px",
            color: "#8cdbcf",
          }}
        >
          <p style={{ margin: 0 }}>OUR</p>
          <p style={{ margin: 0 }}>PARTY</p>
          <p style={{ margin: 0 }}>DAY</p>
        </div>

        {/* 하단 장식 이미지 영역 */}
        <div
          style={{
            position: "absolute",
            bottom: "46px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "72px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* 하단 아이콘 자리 */}
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 2v8M2 6l4 4 4-4"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* 히어로 하단 텍스트 */}
      <div
        style={{
          padding: "32px 20px 40px",
          background: "#fff",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: 1.08,
            letterSpacing: "-1.296px",
            color: "#1e1e1e",
            textTransform: "uppercase",
          }}
        >
          {"{ 2026년 9월 20일 일요일 오후 1시 }"}
          <br />
          {"* "}
          <strong style={{ fontWeight: 700 }}>마리아쥬스퀘어</strong>
          {" * 우리의 새출발에"}
          <br />
          {"소중한 분들을 초대합니다."}
        </p>
      </div>
    </>
  );
}
