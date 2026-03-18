# 👩‍💻 박소민 | Software Engineer

안녕하세요!  
기획–디자인–개발–배포 전 과정을 경험하며, **UX/UI 중심의 개발**에 강점을 가진 박소민입니다.  
React, Next.js, TypeScript 등 최신 프레임워크를 활용해 **사용자가 직관적으로 이해할 수 있는 서비스**를 만드는 것을 목표로 합니다.

---

## 🚀 Projects

### 1. 📂 [Narratix](https://github.com/softeerbootcamp-7th/WEB-Team7-Jackpot)
> 취준생의 경험을 아카이빙하고, 자기소개서를 빠르게 완성하는 플랫폼  

- **기간**: 2026.01 ~ 2026.02 (현대소프티어 부트캠프)  
- **역할**: 프론트엔드 팀장 (메인 개발 및 아키텍처 리팩토링 주도)  
- **개발환경**: React, TypeScript, TanStack Query, Tailwind CSS, FSD Lite 아키텍처  
- **주요 성과 및 해결 과제**:  
  - **확장성과 유지보수성을 고려한 FSD Lite 도입**: 기존 Layered 구조에서 도메인 간 결합도가 높아지는 문제를 해결하기 위해, 프로젝트 중반에 `features`, `shared`, `pages` 계층으로 분리하는 점진적 리팩토링을 주도하여 도메인별 응집도를 높임.  
  - **복합 상태 동기화를 통한 고도화된 검색 엔진 구축**: URL 파라미터, LocalStorage, 컴포넌트 State를 동기화하는 범용 `useSearch` 커스텀 훅 개발. 디바운싱(Debouncing) 적용으로 API 호출을 최적화하고, `isInitializing` 상태 도입으로 초기 동기화 시 UX 깜빡임(Flicker) 현상 제거.  
  - **순수 Date 기반 커스텀 캘린더 구현**: 외부 라이브러리 의존성 없이 순수 JavaScript `Date` 객체만을 활용한 `useCalendar` 로직 설계. 복잡한 날짜 연산과 공고 데이터(CRUD) 연동을 직접 구현해 번들 사이즈 최적화 및 제어권 확보.  
  - **렌더링 성능 및 웹 접근성(A11y) 고도화**: 아이콘 관리를 `import * as` 방식으로 개편해 Tree-shaking 이슈를 해결하고, `React.memo` 및 `useCallback`을 활용해 불필요한 리렌더링 방지. 모달 내 Focus Trap, 키보드 조작 가능한 드롭다운, `aria-live`를 활용한 동적 상태 알림 등 보조기기 사용자를 위한 인터랙션 강화.  

---

### 2. 📂 [포트폴리오](https://github.com/Sminp/portfolio)
> 개인 포트폴리오 웹사이트  

- **기간**: 2025.02 ~ 2025.03 (개인 프로젝트)  
- **역할**: 기획 및 UX/UI, 프론트엔드 개발  
- **개발환경**:  
  - Next.js, TypeScript, Three.js, Zustand, Tailwind CSS  
  - Figma (UX/UI), pnpm, GitHub Actions(CI/CD), GitHub(SVC)  
- **성과**:  
  - Three.js로 시각적 차별성 강화  
  - 애니메이션/인터랙션을 통한 사용자 경험 개선  
  - GitHub Actions 자동 배포 적용  
- **배운 점**:  
  - 웹 디자인 수상작을 참고해 UX를 개선하며, 디자인적 완성도 향상  

---

### 3. 🧠 [OPTT](https://github.com/kny0716/OPTT)
> 설문조사를 통해 OTT를 추천하는 웹사이트  

- **기간**: 2023.10.26 ~ 2023.12.01 (팀 프로젝트, 팀장)  
- **역할**: 팀장(프로젝트 관리, 백로그 운영), UX/UI 설계 및 프로토타입 제작  
- **개발환경**:  
  - React, JavaScript, Recoil, SCSS  
  - MySQL  
  - Jira/Confluence(Agile 관리), Figma(UX/UI), GitHub(SVC)  
- **성과**:  
  - 반응형 웹 디자인 구현 (모바일/태블릿/데스크톱 대응)  
  - REST API 연동으로 DB와 비동기 데이터 처리 완료  
- **배운 점**:  
  - Agile 기반 프로젝트 관리(1주 단위 스프린트, 백로그/회고 운영)  
  - Jira 칸반 보드를 활용한 요구사항 관리 및 협업 경험  

---

### 4. 📊 [Dinary](https://github.com/Sminp/Dinary)
> 일기를 바탕으로 감정을 시각화하고 요약하는 웹서비스  

- **기간**: 2023.03.10 ~ 2023.12.28 (팀 프로젝트)  
- **역할**: 프론트엔드 개발 및 UX/UI 개선 (중간에 웹환경에 맞게 재디자인)  
- **개발환경**:  
  - Frontend: React, JavaScript, Recoil, Styled-Components  
  - Backend & DB: Java(Spring Boot), MySQL  
  - AI: OpenAI, DALL·E 3, koBERT  
  - 협업 툴: Trello, GitHub(SVC), Figma  
- **성과**:  
  - 상태 관리 최적화 (Redux → Recoil 마이그레이션)  
  - API 통신 개선 (Promise → axios로 변경, REST API 연동)  
- **배운 점**:  
  - UX/UI 피드백 반영 → 앱 기반 디자인을 웹 UX/UI로 재구성  
  - 팀원의 중도 이탈 상황에서 협업과 문제 해결 능력 발휘  

---

### 5. 🎮 [UNO Game](https://github.com/Sminp/Softwareengineering.git)
> Pygame을 활용한 UNO 카드 게임  

- **기간**: 2023.03.14 ~ 2023.05.23 (팀 프로젝트, 팀장)  
- **역할**: 팀장(기획/역할 분배), 게임 세부 기능 개발  
- **개발환경**: Python, Pygame, GitHub(SVC)  
- **성과**:  
  - 로컬 멀티플레이어, 스토리 모드, 업적 시스템, 배경음악 구현  
- **배운 점**:  
  - 프로젝트 관리와 팀원의 역량에 맞춘 과제 분배의 중요성 체득  
  - 초보 팀원 지원 및 동기 부여 경험 → 리더십 역량 강화  
  - ChatGPT 활용으로 학습 효율 및 게임 구현 가속화  

---

### 6. 🍳 [CookIndoor](https://github.com/Seeyou2000/OpenSourceProject)
> 카메라(OpenCV)를 활용한 온라인 요리 게임  

- **기간**: 2022.11 ~ 2022.12 (팀 프로젝트)  
- **역할**: Notion을 통한 기획, PowerPoint UX/UI 설계, 일부 게임 로직 개발  
- **개발환경**: Python, Pygame, OpenCV  
- **성과**:  
  - 게임 단계별 흐름 제어 및 OOP 기반 코드 가시성 향상  
- **배운 점**:  
  - 세부 기획의 중요성 체득  
  - 팀 프로젝트에서 개인 컨디션 관리가 팀워크에 미치는 영향 경험  
  - 함수/클래스 기반 OOP의 필요성과 장점을 학습  

---

## 📌 Tech Highlights
- **Frontend**: React, Next.js, TypeScript, JavaScript
- **Database & API**: MySQL, REST API 연동 경험  
- **Design/UX**: Figma
- **Collaboration**: Notion, GitHub, Slack

---

## 🔍 About Me
- 🌏 **교환학생 경험 (오스트리아, 2024)** → 글로벌 환경에서의 뛰어난 영어 커뮤니케이션 능력 및 유연한 글로벌 협업 역량 보유  
- 🎯 **목표**: 사용자의 니즈를 깊이 이해하고 직관적인 서비스를 구축하는 프론트엔드 개발자  
- 📚 **현재**: React, Next.js 기반 아키텍처 고도화 및 확장성 높은 UI 구축에 집중 중  

---
