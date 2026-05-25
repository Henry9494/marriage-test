import iconTmap from "../../assets/icon-tmap.png";
import iconKakao from "../../assets/icon-kakao.png";
import iconNaver from "../../assets/icon-naver.png";

const NAV_BUTTONS = [
  {
    label: "티맵",
    icon: iconTmap,
    url: "https://poi.tmobiweb.com/app/share/position?contents=cGtleT0yOTA2ODA0MDAmcG9pSWQ9MjkwNjgwNCZuYXZTZXE9MCZ0eXBlPTImcG9pTmFtZT0lRUIlQTclODglRUIlQTYlQUMlRUMlOTUlODQlRUMlQTUlQUMlRUMlOEElQTQlRUQlODAlOTglRUMlOTYlQjQmY2VudGVyWD00NTczMzkzJmNlbnRlclk9MTM1MDY4MyZ0aW1lPTIwMjUlRUIlODUlODQrMDklRUMlOUIlOTQrMjYlRUMlOUQlQjArMDclM0EzNSZ0ZWw9MDItNTQxLTUwMDcmYWRkcj0lRUMlODQlOUMlRUMlOUElQjgrJUVBJUIwJTk1JUVCJTgyJUE4JUVBJUI1JUFDKyVFQiU4RiU4NCVFQyU4MiVCMCVFQiU4QyU4MCVFQiVBMSU5QiszMTg%3D&tailParam=%7B%22reqType%22%3A%220%22%2C%22reqMode%22%3A%221100%22%2C%22extra%22%3A%22112%22%7D",
  },
  {
    label: "카카오맵",
    icon: iconKakao,
    url: "https://map.kakao.com/?map_type=TYPE_MAP&itemId=17416438&urlLevel=3&urlX=508095&urlY=1117368",
  },
  {
    label: "네이버지도",
    icon: iconNaver,
    url: "https://map.naver.com/p/entry/place/21413303",
  },
];

export default function LocationSection() {
  return (
    <section style={{ background: "#fafafa", paddingBottom: "56px" }}>
      {/* 섹션 제목 */}
      <div style={{ padding: "61px 16px 0" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "16px",
            color: "#00a8a6",
            margin: 0,
            textTransform: "capitalize",
          }}
        >
          Location
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: "12px",
            color: "#1e1e1e",
            opacity: 0.5,
            margin: "8px 0 0",
          }}
        >
          오시는길
        </p>
      </div>

      {/* 지도 이미지 영역 */}
      <div
        style={{
          margin: "24px 34px 0",
          aspectRatio: "323 / 278",
          overflow: "hidden",
          borderRadius: "1px",
        }}
      >
        <img
          src="https://placehold.co/323x278/e8e8e8/aaaaaa"
          alt="마리아쥬스퀘어 약도"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* 네비게이션 버튼 */}
      <div
        style={{
          margin: "24px 20px 0",
          display: "flex",
          gap: "10px",
        }}
      >
        {NAV_BUTTONS.map((btn) => (
          <a
            key={btn.label}
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              height: "40px",
              background: "#fff",
              border: "1px solid #e7e7e7",
              borderRadius: "4px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {/* 아이콘 영역 */}
            <div
              style={{
                width: "14px",
                height: "14px",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <img
                src={btn.icon}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "13px",
                color: "#000",
                whiteSpace: "nowrap",
              }}
            >
              {btn.label}
            </span>
          </a>
        ))}
      </div>

      {/* 교통 정보 */}
      <div
        style={{
          margin: "32px 20px 0",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <TransportItem label="지하철">
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
            }}
          >
            <div style={{ lineHeight: "normal", marginBottom: "12px" }}>
              <span style={{ color: "#808b00", fontWeight: 500 }}>7호선</span>
              {"  "}
              <span style={{ color: "#de9800", fontWeight: 500 }}>
                수인분당선
              </span>
            </div>
            <p style={{ margin: 0, color: "#000", fontWeight: 400 }}>
              강남구청역 3번출구 (셔틀버스 운행)
            </p>
          </div>
        </TransportItem>

        <Divider />

        <TransportItem label="자차">
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "13px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              color: "#000",
            }}
          >
            <p style={{ margin: 0 }}>네비게이션 : '마리아쥬스퀘어' 검색</p>
            <p style={{ margin: 0 }}>서울 강남구 도산대로 318</p>
          </div>
        </TransportItem>

        <Divider />

        <TransportItem label="주차">
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "13px",
              color: "#000",
              margin: 0,
            }}
          >
            SB타워 B2~B4층 ( 주차장 입구 : 건물후면 )
          </p>
        </TransportItem>
      </div>
    </section>
  );
}

function TransportItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: "13px",
          color: "#7eafae",
          margin: 0,
        }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        background: "#e7e7e7",
      }}
    />
  );
}
