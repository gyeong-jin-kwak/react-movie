# React-Movie

## Setting

- `yarn global add npx` : 업데이트 버전관리를 위해
- `npx create-react-app`

## Fundamaentals

- Arrow Functions
  - `=>` return 함축
  - `{return }`
  - params 에 default 값 설정 가능 `sayHello = (name: "human") => {return }`
  - arguments 가 2개 이상일 때 `()`괄호 필요
- Template Literals
- Object Destructing
  - `const humean = { name: 'dd', firstName: 'abc', age: 21, nationality: 'china', type:{a: '에이', b: '비비'} }`
  - `const { name, firstName, nationality: korea, type: {a, b} } = human`
- Spread Operator
  - `[...days, ...otherDays]`
- Classes
  - `class Baby extends Human{}`
- Array map
- Array filter
  - `const bigger15 = numbers.filter(item => item > 15);`
- forEach

```
forEach 와 map 의 차이점
* return 값이 있는지 없는지의 차이
* forEach 는 리턴값 x => undefined, map 은 return 값 o
* map : 리턴값이 원래 배열과 길이가 같으면 / forEach : 길이가 다른 배열 ex. 원소들의 합 등
```

## Install

- `jsconfig.json` , 재시작

```
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

- `npm install --save prop-types`
- `npm install --save react-router-dom`
- `npm install node-sass@4.14`
- `npm install styled-components`
- `npm install styled-reset`
- `npm install axios`
- `npm install url-loader`
- `npm install babel-loader babel-core babel-preset-es2015 --save-dev`
- `npm install url-loader file-loader --save-dev`
- `npm install react-helmet` / head를 수정하기 쉬움
- `npm install gh-pages`

## File management

- src
  - components
  - Routes
    - Home (folder)
      - index.js
      - HomePresenter.js
      - HomeContainer.js
  - api.js

## Step

1. Folder
2. Router

## style

1. src > css `@import`
2. Componets > Header 폴더화 &amp; css module 사용 `index.js` `Header.js` `style`
3. styled component 사용
4. styled-reset 전역 스타일을 위해 사용

### src > css 파일 사용

- `@import`

### css module로 사용 (Components - Header 참고)

- `Header.module.css` 자바스크립트로 css 주입
- `import styles from './Header.module.scss';`
- `<ul className={styles.navList}>`
- 고유의 아이디 생성
- 캡슐화
- scss 도 가능
- 폴더에서 같이 관리

### styled Component 사용

- `npm install styled-components`

---

## axios

- `create` -> `get`

## 변수명 변경하는 방법

`const {data: {results: nowPlaying}} = await moviesApi.nowPlaying();`

## plan of screen

- [ ] Home
- [ ] TV show
- [ ] Search
- [ ] Detail

## API Verbs

- [참고 url](https://developers.themoviedb.org/3/getting-started/introduction)

* [x] Now Playing (Movie)
* [x] UpComing (Movie)
* [x] GetPopular (TV, Movie)
* [x] Search (TV, Movie)
* [x] Get Top rated (TV)
* [x] Airing Today (TV)
* [x] TV Show Detail
* [x] Movie Detail

## Database

- [movie database](https://www.themoviedb.org/documentation/api)
- id* kgj1352 pw* a4...
- 프로필 - 설정 - api
- 357ad6a3e1369f05856eff3e04365942
- www.youtube.com/watch?v=

## file-loader

- `npm run eject` webpack 보기
- `webpack.config.js`

## Code Challenge

- [ ] IMDB Link
- [ ] Tabs inside of Movie / Show Details (YouTube Videos, Production Company & Countries)
- [ ] Collections Link
- [ ] /Collections Route

## 깃허브 배포

- `npm install gh-pages`
- script에 deploy, predeploy 추가 `package.js`

```
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "deploy": "gh-pages -d build",
    "predeploy": "yarn run build"
  },
```

- homepage 추가
  `"homepage": "https://gyeong-jin-kwak.github.io/react-movie/",`
- `yarn deploy`

## netlify 배포

- [netlify](https://www.netlify.com/)
- New site from git
- github
- only select repositories
- github
- Build command : CI= npm run build / yarn build x
  - [오류해결](https://dev.to/kapi1/solved-treating-warnings-as-errors-because-of-process-env-ci-true-bk5)
- Publish directory : build/
- deploy site
