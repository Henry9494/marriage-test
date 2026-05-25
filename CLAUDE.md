# 결혼 모바일 청첩장

## 프로젝트 개요

모바일 청첩장 웹사이트. 피그마 디자인을 기준으로 픽셀 단위 구현.

- **피그마**: https://www.figma.com/design/PnsEGkO0Dv1i4K0Ay3dV5Q/Untitled?node-id=5-37&m=dev

## 기술 스택

- Vite / React / TypeScript
- CSS (인라인 스타일 위주)
- GSAP + ScrollTrigger (스크롤 애니메이션)
- yarn

## 개발 원칙

- 피그마 디자인을 최대한 그대로 구현한다.
- 모바일 기준(max-width: 390px)으로 개발하고, 화면 중앙에 배치한다.
- 섹션별로 컴포넌트를 분리한다.
- 스타일은 인라인 style prop 사용 (Tailwind 없음).
- 이미지는 placehold.co placeholder로 처리. (실제 이미지 교체 예정)
- 폰트:
  - **SUIT Variable** (CDN 로드)
  - **Faktum Test** (로컬: `/public/fonts/FaktumTest-Regular.woff2`, `/public/fonts/FaktumTest-Bold.woff2` 추가 필요)

## 컴포넌트 구조

```
src/
  components/
    sections/
      HeroSection.tsx       # 히어로 이미지 + 타이틀 + 하단 초대 문구
      AboutSection.tsx      # 신랑/신부/Date&Time - GSAP 크로스페이드
      GallerySection.tsx    # 가로 스크롤 갤러리 + 이미지 확대 모달
      LocationSection.tsx   # 지도 + 네비 버튼 + 교통 정보
      AccountSection.tsx    # 마음전하실곳 (계좌번호)
      FooterSection.tsx     # LOVE + 커플 사진
  App.tsx
  index.css
  reset.css
```

## 섹션 순서

1. **HeroSection** — 배경 이미지 + "IT'S OUR PARTY DAY" (애니메이션 없음)
2. **AboutSection** — 신랑/신부/DateTime 각 100dvh, GSAP ScrollTrigger 배경 crossfade
3. **GallerySection** — 고정 크기 이미지 가로 스크롤, 클릭 시 모달 확대
4. **LocationSection** — 지도 이미지 + 티맵/카카오맵/네이버지도 버튼 + 교통 정보
5. **AccountSection** — 신랑측/신부측 계좌번호 카드, 복사 버튼
6. **FooterSection** — LOVE 원형 + 커플 사진

## 명령어

```bash
yarn dev      # 개발 서버
yarn build    # 빌드
yarn preview  # 빌드 결과 미리보기
```
