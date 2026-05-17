import { useEffect, useRef, useState } from 'react'

const DATETIME_BG = 'https://placehold.co/390x844/1f3528/1f3528'

export default function DateTimeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [cardOffset, setCardOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight

      // 섹션이 뷰포트에 있을 때만 계산
      if (rect.bottom < 0 || rect.top > vh) return

      // 카드가 섹션 스크롤에 따라 살짝 아래로 이동
      const progress = (vh - rect.top) / (rect.height + vh)
      setCardOffset(progress * 30)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        height: '844px',
        overflow: 'hidden',
      }}
    >
      {/* 배경 이미지 - fixed 효과 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
        }}
      >
        <img
          src={DATETIME_BG}
          alt=""
          style={{
            width: '143.79%',
            height: '100.02%',
            maxWidth: 'none',
            objectFit: 'cover',
            position: 'absolute',
            left: '-26.54%',
            top: '-0.02%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.2)',
          }}
        />
      </div>

      {/* 날짜 & 시간 카드 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '208px',
          transform: `translateX(-50%) translateY(${cardOffset}px)`,
          width: '334px',
          willChange: 'transform',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(7px)',
            WebkitBackdropFilter: 'blur(7px)',
            borderRadius: '1px',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* Date and Time 라벨 */}
          <p
            style={{
              fontFamily: '"SUIT Variable", sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              color: '#00a8a6',
              textTransform: 'capitalize',
              width: '100%',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Date and Time
          </p>

          {/* 세부 정보 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              width: '100%',
              fontFamily: '"SUIT Variable", sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: '#000',
            }}
          >
            <p style={{ margin: 0 }}>2026년 9월 20일 일요일 오후 1시</p>
            <p style={{ margin: 0, lineHeight: 1.4 }}>강남구 도산대로 318 SB타워 G층</p>
            <p style={{ margin: 0, lineHeight: 1.4 }}>마리아쥬스퀘어 웨딩홀</p>
          </div>
        </div>
      </div>
    </section>
  )
}
