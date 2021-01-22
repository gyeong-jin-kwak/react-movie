# React-Movie

## Fundamaentals
* Arrow Functions 
    * `=>` return 함축
    * `{return }`
    * params 에 default 값 설정 가능 `sayHello = (name: "human") => {return }`
    * arguments 가 2개 이상일 때 `()`괄호 필요
* Template Literals
* Object Destructing
    * `const humean = { name: 'dd', firstName: 'abc', age: 21, nationality: 'china', type:{a: '에이', b: '비비'} }`
    * `const { name, firstName, nationality: korea, type: {a, b} } = human`
* Spread Operator
    * `[...days, ...otherDays]`
* Classes
    * `class Baby extends Human{}`
* Array map
* Array filter
    * `const bigger15 = numbers.filter(item => item > 15);`
* forEach
```
forEach 와 map 의 차이점
* return 값이 있는지 없는지의 차이
* forEach 는 리턴값 x => undefined, map 은 return 값 o 
* map : 리턴값이 원래 배열과 길이가 같으면 / forEach : 길이가 다른 배열 ex. 원소들의 합 등
```

## Install
* `jsconfig.json` , 재시작
```
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```
* `npm install --save prop-types`
* `npm install --save react-router-dom`
* `npm install node-sass@4.14`
* `npm install styled-components`
* `npm install styled-reset`
* `npm install axios`
* `npm install url-loader`
* `npm install babel-loader babel-core babel-preset-es2015 --save-dev`
* `npm install url-loader file-loader --save-dev`

## File management
* src
    * components
    * Routes
        * Home (folder)
            * index.js
            * HomePresenter.js
            * HomeContainer.js
    * api.js

## Step 
1. Folder 
2. Router

## style
1. src > css `@import`
2. Componets > Header 폴더화 &amp; css module 사용 `index.js` `Header.js` `style`
3. styled component 사용
4. styled-reset 전역 스타일을 위해 사용
### src > css 파일 사용
* `@import`
### css module로 사용 (Components - Header 참고)
* `Header.module.css` 자바스크립트로 css 주입 
* `import styles from './Header.module.scss';`
* `<ul className={styles.navList}>`
* 고유의 아이디 생성
* 캡슐화
* scss 도 가능
* 폴더에서 같이 관리
### styled Component 사용
* `npm install styled-components`
---
## axios
* `create` -> `get`

## 변수명 변경하는 방법
`const {data: {results: nowPlaying}} = await moviesApi.nowPlaying();`

## plan of screen
- [ ] Home
- [ ] TV show
- [ ] Search
- [ ] Detail

## API Verbs
* [참고 url](https://developers.themoviedb.org/3/getting-started/introduction)
- [x] Now Playing (Movie)
- [x] UpComing (Movie)
- [x] GetPopular (TV, Movie)
- [x] Search (TV, Movie)
- [x] Get Top rated (TV)
- [x] Airing Today (TV)
- [x] TV Show Detail
- [x] Movie Detail

## Database
* [movie database](https://www.themoviedb.org/documentation/api)
* id_ kgj1352 pw_ a4...
* 프로필 - 설정 - api 
* 357ad6a3e1369f05856eff3e04365942
* www.youtube.com/watch?v=

## file-loader
* `npm run eject` webpack 보기
* `webpack.config.js`