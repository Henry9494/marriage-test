import iconTmap from "../../assets/icon-tmap.webp";
import iconKakao from "../../assets/icon-kakao.webp";
import iconNaver from "../../assets/icon-naver.webp";
import mapImage from "../../assets/map.webp";
import { Spacing } from "../Spacing";
import { valueWithRatio } from "@/utils";
import { useScale } from "@/context/ScaleContext";

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
  const scale = useScale();

  return (
    <section style={{ background: "#fafafa" }}>
      <Spacing height={61} />
      {/* 섹션 제목 */}
      <div style={{ padding: `0 ${valueWithRatio(20, scale)}px` }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 16,
            color: "#00a8a6",
          }}
        >
          Location
        </div>

        <Spacing height={8} />

        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            color: "#1e1e1e",
            opacity: 0.5,
          }}
        >
          오시는길
        </div>
      </div>

      {/* 지도 이미지 영역 */}
      <div
        style={{
          padding: `0 ${valueWithRatio(29, scale)}px 0  ${valueWithRatio(38, scale)}px`,
        }}
      >
        <div
          style={{
            aspectRatio: "323 / 278",
            backgroundImage: `url(${mapImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <Spacing height={37} />

      {/* 네비게이션 버튼 */}
      <div
        style={{
          padding: `0 ${valueWithRatio(20, scale)}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        {NAV_BUTTONS.map((btn) => (
          <a
            key={btn.label}
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: "1 1 110px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: 10,
              background: "#fff",
              border: "1px solid #e7e7e7",
              borderRadius: 4,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            {/* 아이콘 영역 */}
            <div
              style={{
                width: "14px",
                height: "14px",
                backgroundImage: `url(${btn.icon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              style={{
                fontWeight: 400,
                fontSize: 13,
                color: "#000",
                fontFamily: "var(--font-sans)",
              }}
            >
              {btn.label}
            </div>
          </a>
        ))}
      </div>

      <Spacing height={29} />

      {/* 교통 정보 */}
      <div
        style={{
          padding: `0 ${valueWithRatio(22, scale)}px 0 ${valueWithRatio(18, scale)}px`,
        }}
      >
        <TransportItem label="지하철">
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
            }}
          >
            <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
              <span
                style={{
                  color: "#808b00",
                  fontWeight: 500,
                  fontSize: 13,
                  fontFamily: "var(--font-sans)",
                  lineHeight: "normal",
                }}
              >
                7호선
              </span>
              <span
                style={{
                  color: "#de9800",
                  fontWeight: 500,
                  fontSize: 13,
                  lineHeight: "normal",
                }}
              >
                수인분당선
              </span>
            </div>

            <Spacing height={10} />

            <div
              style={{
                color: "#000",
                fontWeight: 400,
                fontSize: 13,
                fontFamily: "var(--font-sans)",
              }}
            >
              강남구청역 3번출구 (셔틀버스 운행)
            </div>
          </div>
        </TransportItem>

        <TransportItem label="자차">
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 13,
              color: "#000",
            }}
          >
            <div style={{ fontFamily: "var(--font-sans)" }}>
              네비게이션 : '마리아쥬스퀘어' 검색
            </div>
            <Spacing height={12} />
            <div style={{ fontFamily: "var(--font-sans)" }}>
              서울 강남구 도산대로 318
            </div>
          </div>
        </TransportItem>

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

      <Spacing height={84} />
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
    <div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 13,
          color: "#7eafae",
        }}
      >
        {label}
      </div>
      <Spacing height={12} />
      {children}
      <Spacing height={16} />
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "#e7e7e7",
        }}
      />
      <Spacing height={16} />
    </div>
  );
}
