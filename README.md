# 원티드 프리온보딩 기업과제
[🔗 배포 링크](wanted-10th-3.vercel.app)

## 목차
- [프로젝트 소개](#1-프로젝트-소개)
- [주요 기능](#2-주요-기능)
- [실행 방법](#3-실행-방법)
- [개발 환경](#4-개발-환경)
- [기술 스택](#5-기술-스택)
- [파일 구조](#6-파일-구조)

## 1. 프로젝트 소개
추천 Todo 불러오기 및 Todo를 추가할 수 있는 웹 사이트입니다.

## 2. 주요 기능

- 기존 코드인 Todo의 CRUD 리팩터링(ts 적용, style 파일 분리 등)
- 추천 Todo가 무한 스크롤로 출력되도록 구현
- `useThrottle` 커스텀 훅을 생성하여 무한 스크롤 구현 시 검색 결과 출력 API 호출 최적화
- `Context API`를 사용하여 컴포넌트들이 동일한 `Context`를 사용할 수 있도록 구현
- Todo를 삭제할 때 `Optimistic Update` 기법을 사용하여 사용자 UI 개선

## 3. 실행 방법

#### install

```
npm install
```

#### start

```
npm start
```

## 4. 개발 환경

- 테스트 환경: Chrome browser
- IDE: Visual Studio Code 1.71.0 (Universal)
- 인프라: Vercel
- 주요 라이브러리
  - react: 18.0.0
  - typescript": 5.0.4

## 5. 기술 스택

#### Environment

<code><img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/VScode-007ACC?style=for-the-badge&logo=vscode&logoColor=white"></code>

#### config

<code><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"></code>

#### Language

<code><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"></code>

#### Development

<code><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"></code>

#### deploy

<code><img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=Axios&logoColor=white"/></code>

## 6. 파일 구조

```
 📦public
 📦src
 ┣ 📂api
 ┣ 📂components
 ┃ ┣ 📜Dropdown.tsx
 ┃ ┣ 📜DropdownItem.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜InputTodo.tsx
 ┃ ┣ 📜TodoItem.tsx
 ┃ ┗ 📜TodoList.tsx
 ┣ 📂css
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┗ 📜Main.tsx
 ┣ 📂static
 ┣ 📂types
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```
