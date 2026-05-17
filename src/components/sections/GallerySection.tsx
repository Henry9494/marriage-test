import { useEffect, useRef, useState } from 'react'
import stampTeal from '../../assets/stamp-teal.png'

// 약 30개의 갤러리 썸네일 (placeholder 색상 배열)
const GALLERY_COLORS = [
  '#6b5b4e', '#8b7355', '#a08060', '#c4a882', '#d4b896',
  '#7d9b7d', '#5c7a5c', '#8e7d6e', '#b5a090', '#c8b5a5',
  '#a89080', '#9b8878', '#7a6b5d', '#8c7b6c', '#bfaa95',
  '#6b7a6b', '#9aab9a', '#5a6e5a', '#738473', '#485848',
  '#c4b8a8', '#d8cfc5', '#a09888', '#8a8278', '#6e6660',
  '#b8aba0', '#9c9088', '#7a7068', '#5e5850', '#4c4840',
]

const GALLERY_ITEMS = GALLERY_COLORS.map((color, i) => ({ id: i, color }))
const MAIN_PLACEHOLDER = 'https://placehold.co/324x427/6b5b4e/6b5b4e'

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  // 활성 썸네일이 보이도록 캐러셀 스크롤
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    const thumb = carousel.children[activeIndex] as HTMLElement
    if (!thumb) return
    const thumbLeft = thumb.offsetLeft
    const thumbWidth = thumb.offsetWidth
    const carouselWidth = carousel.offsetWidth
    carousel.scrollTo({
      left: thumbLeft - carouselWidth / 2 + thumbWidth / 2,
      behavior: 'smooth',
    })
  }, [activeIndex])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    // 수평 스와이프만 처리 (수직 스크롤 우선)
    if (Math.abs(dx) < Math.abs(dy)) return
    if (dx > 50) {
      setActiveIndex(prev => Math.max(0, prev - 1))
    } else if (dx < -50) {
      setActiveIndex(prev => Math.min(GALLERY_ITEMS.length - 1, prev + 1))
    }
  }

  return (
    <section
      style={{
        background: '#fff',
        paddingBottom: '40px',
        paddingTop: '50px',
      }}
    >
      {/* 섹션 헤더 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          marginBottom: '24px',
        }}
      >
        <div style={{ width: '27px', height: '18px', overflow: 'hidden' }}>
          <img
            src={stampTeal}
            alt=""
            style={{
              position: 'relative',
              left: '-47%',
              top: '-47%',
              width: '194%',
              height: '194%',
              maxWidth: 'none',
              objectFit: 'contain',
            }}
          />
        </div>
        <p
          style={{
            fontFamily: '"SUIT Variable", sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            color: '#1e1e1e',
            margin: 0,
          }}
        >
          Wedding Gallery
        </p>
      </div>

      {/* 상단 메인 이미지 */}
      <div
        style={{
          margin: '0 33px',
          height: '427px',
          borderRadius: '1px',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: GALLERY_ITEMS[activeIndex].color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease',
          }}
        >
          <img
            src={MAIN_PLACEHOLDER}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0,
              position: 'absolute',
            }}
          />
          <span
            style={{
              fontFamily: '"SUIT Variable", sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            {activeIndex + 1} / {GALLERY_ITEMS.length}
          </span>
        </div>
      </div>

      {/* 하단 캐러셀 */}
      <div
        ref={carouselRef}
        style={{
          margin: '16px 33px 0',
          display: 'flex',
          gap: '8.4px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory',
        }}
        className="hide-scrollbar"
      >
        {GALLERY_ITEMS.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(i)}
            style={{
              flexShrink: 0,
              width: '60px',
              height: '60px',
              borderRadius: '1px',
              background: item.color,
              border: 'none',
              cursor: 'pointer',
              opacity: i === activeIndex ? 1 : 0.25,
              transition: 'opacity 0.2s ease',
              scrollSnapAlign: 'start',
              outline: i === activeIndex ? '2px solid #00a8a6' : 'none',
              outlineOffset: '1px',
            }}
          />
        ))}
      </div>
    </section>
  )
}
