import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import groomImage from "../../assets/신랑.png";
import brideImage from "../../assets/신부.png";
import stampBlack from "../../assets/stamp-black.png";
import stampTeal from "../../assets/stamp-teal.png";

export default function CoupleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // 섹션이 뷰포트 하단 진입 시작 → 섹션 상단이 뷰포트 15% 지점 도달 시 완료
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.15"],
  });

  // Card2: translateY 100px(하단 대기) → -250px(Card1 절반 덮음)
  const card2TranslateY = useTransform(scrollYProgress, [0, 1], [100, -250]);

  return (
    <div
      ref={sectionRef}
      style={{
        position: "relative",
        height: "1278px",
        overflow: "hidden",
        border: "3px solid blue",
        background:
          "linear-gradient(to bottom, #7a7267 0%, #a89080 20%, #c8b5a5 45%, #e8ddd4 65%, #f5f0eb 85%, #ffffff 100%)",
      }}
    >
      {/* Card1 - 신랑 (검정 폴라로이드): 섹션 진입 시 하단에서 올라오며 등장 */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "47px",
          transform: "translateX(calc(-50% - 34.5px))",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <PolaroidCard
            bgColor="#000"
            textColor="#fff"
            imageUrl={groomImage}
            stampSrc={stampBlack}
            parentName="김상욱"
            kinshipLabel="이미자의 아들"
            personName="신랑 김제형"
          />
        </motion.div>
      </div>

      {/* Card2 - 신부 (틸 폴라로이드): 스크롤에 따라 위로 올라와 Card1 절반을 덮음 */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "519px",
          transform: "translateX(calc(-50% + 33.5px))",
          zIndex: 2,
        }}
      >
        <motion.div style={{ y: card2TranslateY }}>
          <PolaroidCard
            bgColor="#75c9bd"
            textColor="#fff"
            imageUrl={brideImage}
            stampSrc={stampTeal}
            parentName="김의진"
            kinshipLabel="김인숙의 딸"
            personName="신부 김민아"
            stampCropped
          />
        </motion.div>
      </div>
    </div>
  );
}

interface PolaroidCardProps {
  bgColor: string;
  textColor: string;
  imageUrl: string;
  stampSrc: string;
  parentName: string;
  kinshipLabel: string;
  personName: string;
  stampCropped?: boolean;
}

function PolaroidCard({
  bgColor,
  textColor,
  imageUrl,
  stampSrc,
  parentName,
  kinshipLabel,
  personName,
  stampCropped,
}: PolaroidCardProps) {
  return (
    <div
      style={{
        background: bgColor,
        padding: "20px",
        borderRadius: "1px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "18px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      {/* 사진 영역 */}
      <div
        style={{
          width: "235px",
          height: "317px",
          borderRadius: "1px",
          overflow: "hidden",
          border: "0.5px solid rgba(0,0,0,0.19)",
        }}
      >
        <img
          src={imageUrl}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* 스탬프 로고 */}
      <div
        style={{
          width: "48px",
          height: "32px",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={stampSrc}
          alt=""
          style={
            stampCropped
              ? {
                  position: "absolute",
                  left: "-47%",
                  top: "-47%",
                  width: "194%",
                  height: "194%",
                  maxWidth: "none",
                  objectFit: "contain",
                }
              : {
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "bottom",
                }
          }
        />
      </div>

      {/* 이름 텍스트 행 */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "7px",
            alignItems: "center",
            fontFamily: '"SUIT Variable", sans-serif',
            fontWeight: 400,
            fontSize: "14px",
            color: textColor,
            whiteSpace: "nowrap",
          }}
        >
          <span>{parentName}</span>
          <span>{kinshipLabel}</span>
        </div>
        <span
          style={{
            fontFamily: '"SUIT Variable", sans-serif',
            fontWeight: 500,
            fontSize: "14px",
            color: textColor,
            whiteSpace: "nowrap",
          }}
        >
          {personName}
        </span>
      </div>
    </div>
  );
}
