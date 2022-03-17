Enzyme은 테스트할 때, A컴포넌트와 B컴포넌트를 만들때, props를 교환한다. A컴포넌트에 state가 흐르고, B컴포넌트에도 state가 흐른다. 이런 state나 props를 교환하는 부분에 초점을 맞춰서
구현

React Testing Library는 props나 state에 포커스를 두는 대신 사용자 입장에서 어떻게 동작하는지에 초점을 둔다.

jest가 Test 파일 찾는 방법

1. {filename}.test.js
2. {filename}.spec.js
3. tests 폴더 안에 파일이 있을때

describe: 여러 관련 테스트를 그룹화 하는 블록을 만듭니다. it: 개별 테스트를 수행하는 곳, 각 테스트를 작은 문장처럼 설명합니다. expect: 값을 테스트할 때마다 사용됩니다. 그리고 expect 함수
혼자서는 거의 사용되지 않으며, matcher와 함께 사용됩니다. matcher: 다른 방법으로 값을 테스트 하도록 "매처"를 사용합니다.

## 쿼리함수

- getBy...
쿼리에대해 일치하는 노드를 반환 하고 일치하는 요소가 없거나 둘 이상의 일치가 발견되면 오류를 발생시킵니다(둘 이상의 요소가 예 상되는 경우 대신 getAllBy 사용).
- queryBy...
쿼리에 대해 일치하는 노드를 반환 하고 일치하는 요소가 없으면 null 을 반환합니다. 이것은 존재하지 않는 요소를 어설션하는데 유용합니다. 둘 이상의 일치 항목이 발견되면 오류가 발생합니다(확인된 경우 대 신
queryAllBy 사용).
- findBy...
주어진 쿼리와 일치하는 요소가 발 견되면 Promise를 반환합니다. 요소 가 발견되지 않거나 기본 제한 시간 인 1000ms 후에 둘 이상의 요소가 발견되면 Promise가 거부됩니다. 둘 이상의 요소를 찾아야
하는 경우 findAllBy를 사용하십시오.

getBy + waitFor = findBy

# ESLINT

$ npm i eslint-plugin-testing-library eslint-plugin-jest-dom -D

```json
// .eslintrc.json
{
  "plugins": [
    "testing-library",
    "jest-dom"
  ],
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:testing-library/react", // vue, angular도 있다.
    "plugin:jest-dom/recommended"
  ]
}
```
plugins: eslint-plugin-testing-library, eslint-plugin-jest-dom 라이브러리를 설치 후에, plugin에 추가해줘야 한다.
(eslint-plugin- 부분 생략가능) - 규칙들이라고 보면 된다.(plugin에 추가해도 바로 사용은 못하고, extends를 해야 사용가능)
extends: plugin이 갖고있는 여러 규칙들 중에서 어떤 규칙을 사용할지 상세로 적어준다.

