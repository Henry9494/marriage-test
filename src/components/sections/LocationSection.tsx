import mapImg from '../../assets/map.png'
import iconTmap from '../../assets/icon-tmap.png'
import iconKakao from '../../assets/icon-kakao.png'
import iconNaver from '../../assets/icon-naver.png'

const NAV_BUTTONS = [
  {
    label: '티맵',
    icon: iconTmap,
    url: 'https://poi.tmobiweb.com/app/share/position?contents=cGtleT0yOTA2ODA0MDAmcG9pSWQ9MjkwNjgwNCZuYXZTZXE9MCZ0eXBlPTImcG9pTmFtZT0lRUIlQTclODglRUIlQTYlQUMlRUMlOTUlODQlRUMlQTUlQUMlRUMlOEElQTQlRUQlODAlOTglRUMlOTYlQjQmY2VudGVyWD00NTczMzkzJmNlbnRlclk9MTM1MDY4MyZ0aW1lPTIwMjUlRUIlODUlODQrMDklRUMlOUIlOTQrMjYlRUMlOUQlQjArMDclM0EzNSZ0ZWw9MDItNTQxLTUwMDcmYWRkcj0lRUMlODQlOUMlRUMlOUElQjgrJUVBJUIwJTk1JUVCJTgyJUE4JUVBJUI1JUFDKyVFQiU4RiU4NCVFQyU4MiVCMCVFQiU4QyU4MCVFQiVBMSU5QiszMTg%3D&tailParam=%7B%22reqType%22%3A%220%22%2C%22reqMode%22%3A%221100%22%2C%22extra%22%3A%22112%22%7D',
  },
  {
    label: '카카오맵',
    icon: iconKakao,
    url: 'https://map.kakao.com/?map_type=TYPE_MAP&itemId=17416438&urlLevel=3&urlX=508095&urlY=1117368',
  },
  {
    label: '네이버지도',
    icon: iconNaver,
    url: 'https://map.naver.com/p/entry/place/21413303',
  },
]

export default function LocationSection() {
  return (
    <section style={{ background: '#fafafa', paddingBottom: '56px' }}>
      {/* 섹션 제목 */}
      <div style={{ padding: '61px 16px 0' }}>
        <p
          style={{
            fontFamily: '"SUIT Variable", sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            color: '#00a8a6',
            margin: 0,
          }}
        >
          Location
        </p>
        <p
          style={{
            fontFamily: '"SUIT Variable", sans-serif',
            fontWeight: 500,
            fontSize: '12px',
            color: '#1e1e1e',
            opacity: 0.5,
            margin: '8px 0 0',
          }}
        >
          오시는길
        </p>
      </div>

      {/* 지도 이미지 */}
      <div
        style={{
          margin: '24px auto 0',
          width: '323px',
          height: '278px',
          overflow: 'hidden',
        }}
      >
        <img
          src={mapImg}
          alt="마리아쥬스퀘어 약도"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      {/* 네비게이션 버튼 */}
      <div
        style={{
          margin: '24px auto 0',
          width: '350px',
          display: 'flex',
          gap: '10px',
        }}
      >
        {NAV_BUTTONS.map(btn => (
          <a
            key={btn.label}
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              height: '40px',
              background: '#fff',
              border: '1px solid #e7e7e7',
              borderRadius: '4px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <img src={btn.icon} alt="" style={{ width: '14px', height: '14px', objectFit: 'cover' }} />
            <span
              style={{
                fontFamily: '"Noto Sans KR", sans-serif',
                fontWeight: 400,
                fontSize: '13px',
                color: '#000',
                whiteSpace: 'nowrap',
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
          margin: '32px auto 0',
          width: '350px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <TransportItem label="지하철">
          <div
            style={{
              fontFamily: '"SUIT Variable", sans-serif',
              fontSize: '13px',
              lineHeight: 0,
            }}
          >
            <span style={{ color: '#808b00', fontWeight: 500, lineHeight: 'normal' }}>7호선</span>
            {'  '}
            <span style={{ color: '#de9800', fontWeight: 500, lineHeight: 'normal' }}>수인분당선</span>
            <br />
            <span style={{ color: '#000', fontWeight: 400, lineHeight: 'normal', display: 'block', marginTop: '12px' }}>
              강남구청역 3번출구 (셔틀버스 운행)
            </span>
          </div>
        </TransportItem>

        <Divider />

        <TransportItem label="버스">
          <div
            style={{
              fontFamily: '"SUIT Variable", sans-serif',
              fontSize: '13px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div>
              <p style={{ fontWeight: 500, color: '#000', margin: '0 0 4px' }}>145, 440, 3301, 4212</p>
              <p style={{ fontWeight: 400, color: '#000', margin: 0 }}>도산공원 사거리, 호림아트센터 하차</p>
            </div>
            <div>
              <p style={{ fontWeight: 500, color: '#000', margin: '0 0 4px' }}>3011, 4212</p>
              <p style={{ fontWeight: 400, color: '#000', margin: 0 }}>영동119안전센터 하차</p>
            </div>
          </div>
        </TransportItem>

        <Divider />

        <TransportItem label="자차">
          <div
            style={{
              fontFamily: '"SUIT Variable", sans-serif',
              fontWeight: 400,
              fontSize: '13px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              color: '#000',
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
              fontFamily: '"SUIT Variable", sans-serif',
              fontWeight: 400,
              fontSize: '13px',
              color: '#000',
              margin: 0,
            }}
          >
            SB타워 B2~B4층 ( 주차장 입구 : 건물후면 )
          </p>
        </TransportItem>
      </div>
    </section>
  )
}

function TransportItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p
        style={{
          fontFamily: '"SUIT Variable", sans-serif',
          fontWeight: 500,
          fontSize: '13px',
          color: '#7eafae',
          margin: 0,
        }}
      >
        {label}
      </p>
      {children}
    </div>
  )
}

function Divider() {
  return (
    <div
      style={{
        width: '100%',
        height: '1px',
        background: '#e7e7e7',
      }}
    />
  )
}
