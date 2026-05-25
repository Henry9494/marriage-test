import { useState } from "react";

interface GalleryItem {
  id: number;
  left: number;
  top: number;
  width: number;
  height: number;
}

// 피그마 기준 좌표 (left: 원본-16, top: 원본-158)
const GALLERY_ITEMS: GalleryItem[] = [
  // col 0 (x=0, w=150)
  { id: 1,  left: 0,    top: 0,   width: 150, height: 224 },
  { id: 2,  left: 0,    top: 230, width: 150, height: 224 },
  { id: 3,  left: 0,    top: 460, width: 150, height: 100 },
  // col 1 (x=156, w=160)
  { id: 4,  left: 156,  top: 0,   width: 160, height: 276 },
  { id: 5,  left: 156,  top: 282, width: 160, height: 278 },
  // col 2 (x=322, w=150)
  { id: 6,  left: 322,  top: 0,   width: 150, height: 224 },
  { id: 7,  left: 322,  top: 230, width: 150, height: 100 },
  { id: 8,  left: 322,  top: 336, width: 150, height: 224 },
  // col 3 (x=478, w=150)
  { id: 9,  left: 478,  top: 0,   width: 150, height: 224 },
  { id: 10, left: 478,  top: 230, width: 150, height: 224 },
  { id: 11, left: 478,  top: 460, width: 150, height: 100 },
  // col 4 (x=634, w=150)
  { id: 12, left: 634,  top: 0,   width: 150, height: 224 },
  { id: 13, left: 634,  top: 230, width: 150, height: 100 },
  { id: 14, left: 634,  top: 336, width: 150, height: 224 },
  // col 5 (x=789, w=150)
  { id: 15, left: 789,  top: 0,   width: 150, height: 112 },
  { id: 16, left: 789,  top: 118, width: 150, height: 224 },
  { id: 17, left: 789,  top: 348, width: 150, height: 212 },
  // col 6 (x=945, w=150)
  { id: 18, left: 945,  top: 0,   width: 150, height: 214 },
  { id: 19, left: 945,  top: 220, width: 150, height: 110 },
  { id: 20, left: 945,  top: 336, width: 150, height: 224 },
  // col 7 (x=1101, w=150)
  { id: 21, left: 1101, top: 0,   width: 150, height: 100 },
  { id: 22, left: 1101, top: 106, width: 150, height: 224 },
  { id: 23, left: 1101, top: 336, width: 150, height: 224 },
  // col 8 (x=1257, w=150)
  { id: 24, left: 1257, top: 0,   width: 150, height: 224 },
  { id: 25, left: 1257, top: 230, width: 150, height: 100 },
  { id: 26, left: 1257, top: 336, width: 150, height: 224 },
  // col 9 (x=1413, w=150)
  { id: 27, left: 1413, top: 0,   width: 150, height: 214 },
  { id: 28, left: 1413, top: 220, width: 150, height: 226 },
  { id: 29, left: 1413, top: 452, width: 150, height: 108 },
];

const CONTENT_WIDTH = 1413 + 150; // 1563px
const CONTENT_HEIGHT = 560;

export default function GallerySection() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: "88px",
        paddingBottom: "60px",
      }}
    >
      {/* 헤딩 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          marginBottom: "24px",
        }}
      >
        {/* 하트 아이콘 */}
        <svg
          width="27"
          height="18"
          viewBox="0 0 27 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 15L2.5 5C2.5 2.5 4.5 0.5 7 0.5C9 0.5 10.5 1.5 13.5 4.5C16.5 1.5 18 0.5 20 0.5C22.5 0.5 24.5 2.5 24.5 5L13.5 15Z"
            fill="#1e1e1e"
          />
        </svg>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "16px",
            color: "#1e1e1e",
            textAlign: "center",
          }}
        >
          Wedding Gallery
        </p>
      </div>

      {/* 가로 스크롤 이미지 영역 */}
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          paddingLeft: "16px",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <div
          style={{
            position: "relative",
            width: `${CONTENT_WIDTH}px`,
            height: `${CONTENT_HEIGHT}px`,
            flexShrink: 0,
          }}
        >
          {GALLERY_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              style={{
                position: "absolute",
                left: item.left,
                top: item.top,
                width: item.width,
                height: item.height,
                padding: 0,
                border: "none",
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "1px",
                background: "transparent",
              }}
            >
              <img
                src={`https://placehold.co/${item.width}x${item.height}/c8c0b8/c8c0b8`}
                alt={`갤러리 ${item.id}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* 안내 텍스트 */}
      <p
        style={{
          margin: "16px 0 0",
          fontFamily: "var(--font-display)",
          fontSize: "11px",
          lineHeight: "normal",
          letterSpacing: "-0.22px",
          color: "#1e1e1e",
          opacity: 0.7,
          textAlign: "center",
        }}
      >
        밀어서 볼 수 있습니다.
        <br />
        클릭하면 크게 볼수 있습니다.
      </p>

      {/* 이미지 확대 모달 */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="갤러리 이미지"
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={`https://placehold.co/${selected.width}x${selected.height}/c8c0b8/c8c0b8`}
            alt="갤러리 이미지 확대"
            style={{
              maxWidth: "90vw",
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: "4px",
              display: "block",
            }}
          />
        </div>
      )}
    </section>
  );
}
