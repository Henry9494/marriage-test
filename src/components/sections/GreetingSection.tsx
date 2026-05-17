import { useEffect, useRef, useState } from 'react'

export default function GreetingSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(to bottom, #d8cbc0, #fff)',
        padding: '60px 20px 80px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          fontFamily: '"SUIT Variable", sans-serif',
          fontWeight: 400,
          fontSize: '14px',
          color: '#222',
          lineHeight: 1.3,
          letterSpacing: '-0.14px',
          textAlign: 'center',
          maxWidth: '350px',
          margin: 0,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          whiteSpace: 'pre-wrap',
        }}
      >
        {`저희는 정 반대의 두 사람이지만\n맛있는 걸 먹으며 행복해하고,\n좋은 날씨엔 종일 돌아다니는 걸 좋아합니다.\n\n친구이자 연인, 그리고 가족으로\n즐겁고 행복하게 살겠습니다.`}
      </p>
    </section>
  )
}
