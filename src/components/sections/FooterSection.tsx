const FOOTER_PLACEHOLDER = "https://placehold.co/390x521/c4b5a0/c4b5a0";

export default function FooterSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(to bottom, #e6d9cc, #e5d9cd)",
        height: "975px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 배경 그라데이션 블러 */}
      <div
        style={{
          position: "absolute",
          inset: "-88px -17px 0",
          background: "linear-gradient(to bottom, #e6d9cc, #e5d9cd)",
          filter: "blur(17px)",
          zIndex: 0,
        }}
      />

      {/* PS 캡션 */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          marginTop: "60px",
        }}
      >
        <p
          style={{
            fontFamily: '"SUIT Variable", sans-serif',
            fontWeight: 600,
            fontSize: "11px",
            color: "rgba(0,0,0,0.6)",
            lineHeight: 1.5,
          }}
        >
          ps. 제형이랑 사진찍기 정말 힘들었습니다..
          <br />
          내가 너무 좋은가보다..
        </p>
      </div>

      {/* 하단 커플 사진 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "521px",
          zIndex: 1,
        }}
      >
        <img
          src={FOOTER_PLACEHOLDER}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
