## 기본 설정
### localhost 서버 https 적용하는 방법
<div>
    <p>1. npm run setup-https</p>
    <p>2. 실패 시 터미널 로그에 출력된 설명서를 보고 운영체제에 맞게 mkcert를 설치하고 다시 npm run setup-https</p>
    <p>3. localhost-key.pem, localhost.pem 파일 생성됐는지 확인</p>
    <p>4. npm run dev로 실행</p>
</div>

## 📖 프로젝트 소개
### FatePet(페이트펫) : 

<br/>

##  🚀 기술 스택

### 💻 FrontEnd
<div>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
<img src="https://img.shields.io/badge/FetchAPI-5A29E4?style=for-the-badge&logo=FetchAPI&logoColor=white">
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
<img src="https://img.shields.io/badge/zustand-553830?style=for-the-badge&logo=zustand&logoColor=white">
<!-- <img src="https://img.shields.io/badge/storybook-pink?style=for-the-badge&logo=storybook&logoColor=white"> -->
</div>

<br/>

### 협업 툴
<div>
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/figma-EF2D5E?style=for-the-badge&logo=figma&logoColor=black">
<!-- <img src="https://img.shields.io/badge/swagger-white?style=for-the-badge&logo=swagger&logoColor=green"> -->
<!-- <img src="https://img.shields.io/badge/notion-white?style=for-the-badge&logo=notion&logoColor=black"> -->
  
</div>

## Deploy

<div>
<!--   <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white"/> -->
</div>
<br/>

## 👥 팀 동료

### 💻 FrontEnd

| <a href=https://github.com/jjaeho0415><img src="https://avatars.githubusercontent.com/u/91364411?v=4" width=100px/><br/><sub><b>@jjaeho0415</b></sub></a><br/> | <a href=https://github.com/shuding0307><img src="https://avatars.githubusercontent.com/u/129826514?v=4" width=100px/><br/><sub><b>@shuding0307</b></sub></a><br/> | <a href=https://github.com/naga361111><img src="https://avatars.githubusercontent.com/u/148536087?v=4" width=100px/><br/><sub><b>@naga361111</b></sub></a><br/> |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------:|
|                                                                           정재호                                                                            |                                                                            이수현                                                                             |                                             장동연                                        |

<br/>

## 📑 프로젝트 규칙

#### 작업해야할 내용들은 모두 canvan board에 작성하고 issue로 연결한 후 그 작업에 해당하는 브랜치를 새로 파서 작업 진행

### Branch Strategy

> - main / dev 브랜치 기본 생성(main은 배포 branch, dev는 개발 브랜치)
> - main과 dev로 직접, 강제 push 제한
> - 작업 브랜치 명은 canvan으로 팠던 issue 번호에 맞게 (ex. 커밋 접투사/#이슈번호 => style/#30 or feat/#32)
<br/>

### Git Convention

> 1. 적절한 커밋 접두사 작성
> 2. 커밋 메시지 내용 작성

> | 접두사     | 설명                           |
> | ---------- | ------------------------------ |
> | Feat :     | 새로운 기능 구현               |
> | Add :      | 에셋 파일 추가                 |
> | Fix :      | 버그 수정                      |
> | Docs :     | 문서 추가 및 수정              |
> | Style :    | 스타일링 작업                  |
> | Refactor : | 코드 리팩토링 (동작 변경 없음) |
> | Test :     | 테스트                         |
> | Deploy :   | 배포                           |
> | Conf :     | 빌드, 환경 설정                |
> | Chore :    | 기타 작업                      |
>
> <br/>

### Pull Request

> ### Title
>
> - 제목은 'Feat : 홈 페이지 구현'과 같이 작성합니다.

> ### PR Type
>
> - [ ] FEAT: 새로운 기능 구현
> - [ ] ADD : 에셋 파일 추가
> - [ ] FIX: 버그 수정
> - [ ] DOCS: 문서 추가 및 수정
> - [ ] STYLE: 포맷팅 변경
> - [ ] REFACTOR: 코드 리팩토링
> - [ ] TEST: 테스트 관련
> - [ ] DEPLOY: 배포 관련
> - [ ] CONF: 빌드, 환경 설정
> - [ ] CHORE: 기타 작업

### Code Convention

> - 함수명, 변수명, Hooks,타입정의 파일명 camelCase
> - 컴포넌트명, 페이지명, 타입명 PascalCase
> - 폴더명은 소문자로
> - 상수명 SCREAMING_SNAKE_CASE
> - 배열과 객체는 반드시 리터럴로 선언
> - Boolean 타입의 변수의 식별자는 is, has, can 의 접두사를 사용하여 선언
> - assets 폴더 내 파일 이름 camelCase
> - Event handler 사용 (ex. handle ~)
> - export방식 (ex. export default ~)
> - 화살표 함수 사용
> - 주석은 위에 사용
> - 컴포넌트, 함수, 이미지파일 등등 import 하는 경우에는 절대경로로 import
> - styled-component 이름은 PascalCase로 작성
> - types폴더 안에 api명세서에 명시된 카테고리별로 분리 - 공통 api response body type은 response.d.ts 파일 내에 정의
> - 타입 정의할때 타입이름 : I + 메소드타입 + api종류 + (Response or Request) + Type 이런식으로 타입 정의 필수 ex) IGetListResponseType
> - 관련 타입(요청, 응답 body)을 묶어서 한 주석으로 위에 어떤 api에 대한 타입 정의인지 한글로 명시 필요
> - 만약 응답 body의 타입이 response.d.ts에 있는 공통타입이면 따로 정의 X

### Communication Rules

#### 📌 회의 관련


<hr/>
