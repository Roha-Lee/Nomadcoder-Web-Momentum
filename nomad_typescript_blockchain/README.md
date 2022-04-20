# Typescript
- **typescript**: 타입 안정성 때문에 개발 경험이 좋아진다. 
    - javascript는 매우 유연한 언어 -> 개발자를 이해하려고 노력한다. 에러메시지를 최소한으로 보여준다.
        - ex) 놀랍게도 `[1, 2, 3, 4] + false`는 `'1,2,3,4false'`가 된다. 
        - ex) 
            ```typescript
            function divide(a, b) {
                return a / b
            }
            divide(2, 3)
            divide('111') // 이래도 실행이 된다..
            ```
    - strongly typed programming language이다. 
    - 데이터의 타입에 대해 보호받을 수 있고, 매개변수의 개수에 대해서도 보호 받을 수 있다. 
        - 타입 추론에 의해 가능하다. 
    - 명시적으로 데이터와 변수 타입 설정 가능, 변수만 생성하고 넘어가도 타입스크립트는 **타입을 추론**해준다. 
    - 타입 추론을 사용하는 것이 코드 가독성이 더 좋지만, 아래의 c와 같이 추론이 불가능한 경우에는 명시적으로 타입을 설정해 주는 것이 도움이 된다. 
    ```typescript
    let a = "hello" // string 타입 추론 
    let b : boolean = true // boolean 명시적으로 선언 
    let c : number[] = []
    c.push(1)
    ```
# Typescript의 Types
## 명시적 타입 
- number, string, boolean, null, undefined
- 배열의 경우 []를 타입 뒤에 붙여서 어떤 데이터가 들어오는지 표시해준다. 
- 변수 뒤에 `: type`의 형태로 명시적 타입 표시가 가능하다. 
- 여러 타입을 가질 수 있는 경우 `|` 로 연결시켜준다.
- **any**: 비어있는 값에 대한 기본 타입이다. 
    - 타입스크립트로 부터 빠져나오고 싶을때 사용할 수 있다. 모든 타입을 허용하고 타입스크립트의 보호장치를 끈다.
    - 최대한 any를 사용하지 않는 편이 좋다. 

## option
- `?`를 통해 해당 프로퍼티가 옵션임을 표시해 줄 수 있다. 
```typescript 
const player : {
    name: string, 
    age?: number, 
} = {
    name: 'Roha', 
    age: 20,
}
```
## type alias
- 타입을 재사용하기 위해 type alias를 만들 수 있다. 
```typescript 
type Player = {
    name: string, 
    age?: number
}
```

## parameter, return 
```typescript 
- 아래 코드는 string타입을 인자로 받아서 Player타입을 반환하는 함수를 표시하는 예제
type Player = {
    name: string, 
    age?: number
}
// 함수 선언문 
function playerMaker(name: string) : Player {
    return {
        name
    }
}
// 화살표 함수 
const playerMaker = (name:string) : Player => ({ name });
```
# 읽기전용 프로퍼티 
- 읽기 전용으로 만들게 되면 이후 코드에서 name의 수정이 발생했을때 에러를 발생시킨다. 
```typescript
type Player = { 
    readonly name: string
    age?: number
}

const numbers: readonly number[] = [1, 2, 3, 4]
number.push(1) // readonly속성의 배열에 push를 시도하기 때문에 문제를 발생시킨다. 
```
- 타입스크립트의 readonly 보호 장치로 인하여 **불변성**을 갖게 된다!

# Tuple
- player는 최소 3개의 원소를 필요로 하고 각각의 위치에 대하여 타입을 충족시켜야 한다. 
```typescript
const player: [string, number, boolean] = ['roha', 1, true];
```

- tsc명령어를 통해 타입스크립트를 자바스크립트로 컴파일 할 수 있다. 
- package.json에 prestart를 적어주면 start를 실행하기에 앞서 prestart의 내용을 실행하고 start를 실행시킨다. 
    - 이를 이용하면 prestart에서 먼저 ts를 js로 컴파일해주고
    - start를 통해 js를 실행시키는 것이 가능하다. 
