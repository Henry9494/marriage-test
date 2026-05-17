# 결혼 모바일 청첩장

## 프로젝트 개요

모바일 청첩장 웹사이트. 피그마 디자인을 기준으로 픽셀 단위 구현.

- **피그마**: https://www.figma.com/design/PnsEGkO0Dv1i4K0Ay3dV5Q/Untitled?node-id=1-7&m=dev

## 기술 스택

- Vite / React / TypeScript
- Tailwind CSS v4
- shadcn/ui (base-nova 스타일)
- yarn

## 개발 원칙

- 피그마 디자인을 최대한 그대로 구현한다.
- 모바일 기준(max-width: 390px)으로 개발하고, 화면 중앙에 배치한다.
- 섹션별로 컴포넌트를 분리한다.
- 컴포넌트는 가능한 구조 있게 나눈다 (섹션 > 서브 컴포넌트).
- 이미지는 placeholder 이미지로 처리한다. (실제 이미지 교체 예정)
- 폰트: SUIT Variable (CDN: `https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.css`)

## 컴포넌트 구조

```
src/
  components/
    sections/               # 페이지를 구성하는 섹션 단위 컴포넌트
      HeroSection.tsx
      CoupleSection.tsx
      GreetingSection.tsx
      DateTimeSection.tsx
      GallerySection.tsx
      LocationSection.tsx
      AccountSection.tsx
      FooterSection.tsx
    ui/                     # shadcn 컴포넌트
  App.tsx                   # 섹션 순서대로 조합
```

## 섹션 순서 및 인터랙션 스펙

### 1. HeroSection

- 배경 이미지 + "ITS OUR PARTY DAY*" 타이틀 + 날짜 + 신랑신부 이름
- **패럴랙스**: 스크롤 시 배경 이미지와 텍스트가 서로 다른 속도로 움직인다.
  - 배경 이미지: 느리게 (transform translateY 0.5x)
  - 텍스트: 상대적으로 빠르게 (transform translateY 0.8x)

### 2. CoupleSection

- 폴라로이드 스타일 카드 2장 + 신랑/신부 이름
- **카드 애니메이션**:
  - 카드1: 스크롤이 섹션에 진입하면 자연스럽게 하단에서 위로 올라오며 등장
  - 카드2: 스크롤을 내릴수록 카드1 위로 겹쳐지면서 올라옴
  - 최종 상태: 카드2가 카드1의 절반 정도를 덮은 채로 고정 (완전 겹침 아님)
- **텍스트 애니메이션**: 섹션에 스크롤이 도달하면 페이드인으로 자연스럽게 등장

### 3. DateTimeSection

- 배경 이미지 + 날짜/시간 카드
- **애니메이션**: 스크롤 시 배경은 fixed(고정), 날짜·시간 카드가 살짝 하단으로 함께 이동

### 4. GallerySection ("Wedding Gallery")

- **레이아웃**: 상단 대형 이미지 영역 + 하단 소형 캐러셀
- **인터랙션**:
  - 하단 캐러셀에서 포커스된 이미지가 상단 대형 영역에 크게 표시됨
  - 상단 대형 이미지 영역: 좌우 스와이프 가능
  - 하단 소형 캐러셀: 좌우 스와이프 가능 + 아이템 터치 시 해당 이미지 포커스
  - 하단 캐러셀 이미지: 약 30개
  - 상단/하단 상태는 항상 동기화

### 5. LocationSection

- 지도 + 주소 + 교통편 탭 (자가/버스/지하철)
- **외부 링크 버튼 3개** (새 탭으로 열기):
  - **티맵**: `https://poi.tmobiweb.com/app/share/position?contents=cGtleT0yOTA2ODA0MDAmcG9pSWQ9MjkwNjgwNCZuYXZTZXE9MCZ0eXBlPTImcG9pTmFtZT0lRUIlQTclODglRUIlQTYlQUMlRUMlOTUlODQlRUMlQTUlQUMlRUMlOEElQTQlRUQlODAlOTglRUMlOTYlQjQmY2VudGVyWD00NTczMzkzJmNlbnRlclk9MTM1MDY4MyZ0aW1lPTIwMjUlRUIlODUlODQrMDklRUMlOUIlOTQrMjYlRUMlOUQlQkMrMDclM0EzNSZ0ZWw9MDItNTQxLTUwMDcmYWRkcj0lRUMlODQlOUMlRUMlOUElQjgrJUVBJUIwJTk1JUVCJTgyJUE4JUVBJUI1JUFDKyVFQiU4RiU4NCVFQyU4MiVCMCVFQiU4QyU4MCVFQiVBMSU5QiszMTg=&tailParam=%7B%22reqType%22%3A%220%22%2C%22reqMode%22%3A%221100%22%2C%22extra%22%3A%22112%22%7D`
  - **카카오맵**: `https://map.kakao.com/?map_type=TYPE_MAP&itemId=17416438&urlLevel=3&urlX=508095&urlY=1117368`
  - **네이버지도**: `https://map.naver.com/p/entry/place/21413303`

### 6. AccountSection

- 마음 전하기 — 신랑측/신부측 가족별 계좌번호

### 7. FooterSection

- 마지막 커플 사진

## 명령어

```bash
yarn dev      # 개발 서버
yarn build    # 빌드
yarn preview  # 빌드 결과 미리보기
```

## 컴포넌트 추가

```bash
npx shadcn@latest add <component>
```
