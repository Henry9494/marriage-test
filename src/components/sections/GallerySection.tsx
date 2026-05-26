import { useState, useCallback, useEffect } from "react";

const galleryImages = import.meta.glob<string>("../../assets/gallery/*.webp", {
  eager: true,
  import: "default",
});
const getGalleryImage = (id: number): string =>
  galleryImages[`../../assets/gallery/${id}.webp`] ?? "";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import iconHeart from "../../assets/icon-heart.svg";
import iconClose from "../../assets/icon-close.svg";
import iconArrowLeft from "../../assets/icon-arrow-left.svg";
import iconArrowRight from "../../assets/icon-arrow-right.svg";
import { Spacing } from "../Spacing";
import { useScale } from "../../context/ScaleContext";
import { valueWithRatio } from "../../utils";
import { RemoveScroll } from "react-remove-scroll";

// 각 컬럼이 embla 슬라이드 하나가 됨 (item.id - 1 = 갤러리 전체 index)
interface ColumnItem {
  id: number;
  top: number;
  height: number;
}
interface Column {
  width: number;
  items: ColumnItem[];
}

const GALLERY_COLUMNS: Column[] = [
  {
    width: 150,
    items: [
      { id: 1, top: 0, height: 224 },
      { id: 2, top: 230, height: 224 },
      { id: 3, top: 460, height: 100 },
    ],
  },
  {
    width: 160,
    items: [
      { id: 4, top: 0, height: 276 },
      { id: 5, top: 282, height: 278 },
    ],
  },
  {
    width: 150,
    items: [
      { id: 6, top: 0, height: 224 },
      { id: 7, top: 230, height: 100 },
      { id: 8, top: 336, height: 224 },
    ],
  },
  {
    width: 150,
    items: [
      { id: 9, top: 0, height: 224 },
      { id: 10, top: 230, height: 224 },
      { id: 11, top: 460, height: 100 },
    ],
  },
  {
    width: 150,
    items: [
      { id: 12, top: 0, height: 224 },
      { id: 13, top: 230, height: 100 },
      { id: 14, top: 336, height: 224 },
    ],
  },
  {
    width: 150,
    items: [
      { id: 15, top: 0, height: 112 },
      { id: 16, top: 118, height: 224 },
      { id: 17, top: 348, height: 212 },
    ],
  },
  {
    width: 150,
    items: [
      { id: 18, top: 0, height: 214 },
      { id: 19, top: 220, height: 110 },
      { id: 20, top: 336, height: 224 },
    ],
  },
  {
    width: 150,
    items: [
      { id: 21, top: 0, height: 100 },
      { id: 22, top: 106, height: 224 },
      { id: 23, top: 336, height: 224 },
    ],
  },
  {
    width: 150,
    items: [
      { id: 24, top: 0, height: 224 },
      { id: 25, top: 230, height: 100 },
      { id: 26, top: 336, height: 224 },
    ],
  },
  {
    width: 150,
    items: [
      { id: 27, top: 0, height: 214 },
      { id: 28, top: 220, height: 226 },
      { id: 29, top: 452, height: 108 },
    ],
  },
];

const TOTAL_ITEMS = GALLERY_COLUMNS.reduce(
  (sum, col) => sum + col.items.length,
  0,
);
const CONTENT_HEIGHT = 560;
const COLUMN_GAP = 6;

interface GalleryModalProps {
  initialIndex: number;
  onClose: () => void;
}

function GalleryModal({ initialIndex, onClose }: GalleryModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, startIndex: initialIndex },
    [Fade()],
  );
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const goPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const goNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <RemoveScroll>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        role="dialog"
        aria-modal="true"
        aria-label="갤러리 이미지"
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          backgroundColor: "rgba(0,0,0,0.8)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ width: "90vw", maxWidth: 360 }}
        >
          {/* 헤더: 카운터 + 닫기 */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 16,
            }}
          >
            <span
              style={{
                color: "#fff",
                fontFamily: "var(--font-display)",
                fontSize: 13,
                lineHeight: "normal",
                fontWeight: 400,
                letterSpacing: "-0.26px",
              }}
            >
              {currentIndex + 1}/{TOTAL_ITEMS}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                lineHeight: 0,
              }}
            >
              <img
                src={iconClose}
                alt="닫기"
                style={{ width: 16, height: 16, display: "block" }}
              />
            </button>
          </div>

          <Spacing height={53} />

          {/* 이미지 캐러셀 + 화살표 */}
          <div style={{ position: "relative" }}>
            <div ref={emblaRef} style={{ overflow: "hidden", borderRadius: 4 }}>
              <div style={{ display: "flex" }}>
                {GALLERY_COLUMNS.flatMap((col) =>
                  col.items.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        flex: "0 0 100%",
                        minWidth: 0,
                        aspectRatio: "45 / 67",
                        backgroundImage: `url(${getGalleryImage(item.id)})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  )),
                )}
              </div>
            </div>

            {/* 이전 버튼 */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              style={{
                position: "absolute",
                left: -18,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={iconArrowLeft}
                alt="이전"
                style={{ width: 36, height: 36, display: "block" }}
              />
            </button>

            {/* 다음 버튼 */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              style={{
                position: "absolute",
                right: -18,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={iconArrowRight}
                alt="다음"
                style={{ width: 36, height: 36, display: "block" }}
              />
            </button>
          </div>
        </div>
      </motion.div>
    </RemoveScroll>
  );
}

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [galleryRef] = useEmblaCarousel({ dragFree: true, align: "start" });

  const scale = useScale();

  return (
    <section style={{ backgroundColor: "#fafafa" }}>
      <Spacing height={88} />

      <div style={{ textAlign: "center" }}>
        <img src={iconHeart} alt="하트 아이콘" />
        <Spacing height={6} />
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 16,
            color: "#1e1e1e",
          }}
        >
          Wedding Gallery
        </div>
      </div>

      <Spacing height={26} />

      {/* embla 갤러리 가로 스크롤 (dragFree, 컬럼별 슬라이드) */}
      <div ref={galleryRef} style={{ overflow: "hidden" }}>
        <div
          style={{ display: "flex", paddingLeft: valueWithRatio(16, scale) }}
        >
          {GALLERY_COLUMNS.map((col, colIndex) => {
            const prevItemCount = GALLERY_COLUMNS.slice(0, colIndex).reduce(
              (sum, c) => sum + c.items.length,
              0,
            );
            return (
              <div
                key={colIndex}
                style={{
                  position: "relative",
                  width: col.width,
                  height: CONTENT_HEIGHT,
                  flexShrink: 0,
                  marginRight:
                    colIndex < GALLERY_COLUMNS.length - 1 ? COLUMN_GAP : 0,
                }}
              >
                {col.items.map((item, itemIndex) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIndex(prevItemCount + itemIndex)}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: item.top,
                      width: col.width,
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
                      src={getGalleryImage(item.id)}
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
            );
          })}
          {/* 오른쪽 끝 패딩용 스페이서 */}
          <div style={{ width: valueWithRatio(16, scale), flexShrink: 0 }} />
        </div>
      </div>

      <Spacing height={26} />

      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 11,
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
      </div>

      {selectedIndex !== null && (
        <GalleryModal
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}

      <Spacing height={109} />
    </section>
  );
}
