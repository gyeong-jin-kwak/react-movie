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

## File management
* src
    * components
    * Routes

## Step 
1. Folder 
2. Router

## plan of screen
- [ ] Home
- [ ] TV show
- [ ] Search
- [ ] Detail

