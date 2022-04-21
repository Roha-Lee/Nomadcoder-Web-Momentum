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
## unknown, void
- unknown: 변수의 타입을 미리 알고있지 않은 경우 사용할 수 있다. `let a:unknown;`
    - 단, 이 경우 a를 사용하기 위해서는 타입을 먼저 확인해 주어야 한다. 그렇지 않는 경우 에러를 발생시킨다.
    ```typescript
    let a: unknown;
    if (typeof a === 'number') {
        let b = a + 1;
    }
    if (typeof a === 'string') {
        let b = a.toUpperCase();
    }
    ```
- void: 아무것도 반환하지 않는 함수에 사용한다. 
- never: 
    - 절대 반환하지 않는 함수에 사용할 수 있다. 
    ```typescript 
    function hello():never {
        throw new Error('ERROR!');
    }
    ```
    - 두 가지 이상의 타입을 가지는 인자를 사용할 때 볼 수 있다. 
    - 두 가지 이상의 타입을 가지는 인자의 경우 아래와 같이 type을 직접 확인해서 사용해야한다. 
    ```typescript 
    function hello(name: string | number) {
        if (typeof name === 'string') {
            name // string
        }
        else if (typeof name === 'number') {
            name // number
        }   
        else {
            name // never
        }
    }
    ```

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

# Call signature
- 함수의 인자와 반환 정보를 명시해 줄 수 있다. 
- 타입 선언을 구현 부분과 분리해 줄 수 있어서 좋다. 
```typescript 
// call signature의 간단한 방법 
type Add = (a: number, b: number) => number; 
// call signature의 정석
type Add = {
    (a: number, b: number): number, 
} 
const add: Add = (a, b) => a + b;
```

# Overloading
- 함수 또는 메서드가 여러개의 call signature를 가지고 있는 경우를 말한다. 
- 아래와 같이 타입 체크를 해줘야한다!
```typescript
type Add = {
    (a: number, b: number): number, 
    (a: number, b: string): number,
} 
const add: Add = (a, b) => {
    if(typeof b === 'number') return a;
    return a + b;
}
```
- 조금 더 현실적인 예제를 살펴보면 아래와 같다. 
```typescript 
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string):void,
    (config: Config):void
}

const push: Push = (config) => {
    if(typeof config === 'string') {
        console.log(config);
    }
    else {
        console.log(config.path);
    }
}

```
- 인자의 타입이 다를때 뿐만 아니라 개수가 다를 때는 아래와 같이 사용할 수 있다. 
```typescript 
type Add = {
    (a: number, b: number): number,
    (a: number, b: number, c: number): number,
}

const add: Add = (a, b, c?:number) => {
    if (c) return a + b + c;
    return a + b;
}
```
# Polymorphism 
- 다양한 구조를 갖는다. poly + morphos
- number, string, boolean과 같은 concrete type을 갖게 할 수도 있지만, generic type을 이용하면 훨씬 효율적으로 코드를 작성할 수 있다. 
    - generic이라는 것은 type의 placeholder와 같다. 
- call signature를 작성하는데 concrete type을 모르는 경우가 있다. 이 경우에 generic을 이용하면 편리하다. 
```typescript 
type SuperPrint = {
    <T>(arr: T[]): T // 타입스크립트가 타입을 추론하여 해당 타입의 배열을 입력으로, 해당 타입을 반환하는 call signature를 만들어준다. 
}
const superPrint: SuperPrint = (arr) => arr[0];
superPrint([1, 2, 3, 4]); // T는 number
superPrint([true, false, false, true]); // T는 boolean
superPrint(['1', '2', '3', '4']); // T는 string
superPrint([1, 2, false, '4']); // T는 number | boolean | string
```

# Generics 
- 타입스크립트는 제너릭이 처음 사용되는 곳을 기준으로 타입 추론을 한다. 
- any를 사용하지 않고 generics을 사용하는 이유? 
    - 만약에 any를 사용하게 되면 이후에 모든 보호장치를 사용할 수 없다. 
    - 반면 generic을 사용하게 되면 보호장치를 사용할 수 있다. 
    ```typescript 
    type SuperPrint = {
        (arr: any[]): any
    };
    const superPrint: SuperPrint = (arr) => arr[0];
    const a = superPrint([1, 2, 3, 4]);
    const b = superPrint([true, false, false, true]);
    const c = superPrint(['1', '2', '3', '4']);
    const d = superPrint([1, 2, false, '4']);
    ```
    - 위의 경우 d가 any타입이기 때문에 무슨짓을 해도 전부 허용된다. 
    - 반면 generic을 이용하는 경우 d는 number | boolean | string이기 때문에 이에 기반한 보호장치가 동작할 수 있게 된다. 
- generic은 내가 요구한대로 call signature를 만들어 주는 도구의 일종이다.
- 다른 generic 사용 예시 
    - 아래의 예시와 같이 명시적으로 제너릭의 타입을 알려줄 수 있지만, 타입스크립트가 알아서 타입을 추론하게 하는 것이 좋다. 
        ```typescript 
        function superPrint<T> (a: T[]) {
            return a[0];
        }
        superPrint<boolean>([true, false]) // 명시적으로 타입을 알려줄 수 있다. 
        ``` 
    - typescript에서 type을 생성할때도 generic을 사용한다. 
        ```typescript 
        type A = Array<number>;
        const a: A = [1, 2, 3, 4, 5];
        ``` 
    - react에서도 useState를 사용할때 타입을 명시해 주기 위해 generic을 이용한다. 
        ```typescript 
        useState<number>();
        ```
    - 많은 프로퍼티가 공통으로 있고, 일부 프로퍼티만 다른 경우 generic을 이용할 수 있다. 
        ```typescript 
        type Player<E> = {
            name: string, 
            extraInfo: E,
        };

        type RohaExtra = {
            favFood: string
        };

        type RohaPlayer = Player<RohaExtra>;

        const rohaPlayer: RohaPlayer = {
            name: 'roha', 
            extraInfo: {
                favFood: 'bread', 
            }
        }
        ```
# 클래스 
- 타입스크립트에서는 생성자를 아래와 같이 작성할 수 있고, 이는 자바스크립트 코드로 다음과 같이 변환된다. 

**타입스크립트**
```typescript
class Player {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string
    ) {}
}
```
**변환된 자바스크립트**
```javascript
class Player {
    constructor(firstName, lastName, nickName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
    }
}
```
- firstName과 lastName 프로퍼티의 경우 private로 만들었기 때문에 직접적으로 접근하게 되면 typescript에서 에러를 발생시킨다. 

## abstract class 
- 타입스크립트는 추상클래스를 제공한다. 
- 다른 클래스가 상속을 받을 수는 있지만, 직접 인스턴스를 생성할 수 없는 클래스 
- 추상메소드를 제공한다. 
    - 추상 메소드는 추상 클래스를 상속받는 모든 클래스가 실제로 구현해야 하는 클래스이다. 
    - 추상 클래스에서는 call signature만 작성하고 실제 구현은 상속받는 클래스 안에서 이루어져야 한다. 
```typescript 
abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected nickName: string
    ) {}
    abstract getNickName(): void // 자식 클래스에서 무조건 구현해야함. 
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Player extends User {
    getNickName() {
        console.log(this.nickName);
    }
}
```

# 제한된 프로퍼티를 가지는 객체 타입
- 프로퍼티의 이름은 알지 못하지만 타입만 알고 있는 경우 아래와 같이 특정 타입만을 허용하는 객체 타입을 만들 수 있다. 
```typescript 
// 아래의 타입은 key, value가 모두 string인 프로퍼티만을 허용한다. 
type Words = {
    [key: string]: string
};
const dict: Words = {
    'roha': 'gru'
};
```
# 클래스를 이용하는 예시
- 클래스 이름을 타입처럼 사용할 수 있다. 
- constructor에서 프로퍼티를 만들지 않고 밖에서 만든 뒤 constructor에서는 초기화만 진행 할 수 있다. 
```typescript 
type Words = {
    [key: string]: string
}

class Dict {
    private words: Words;
    constructor() {
        this.words = {};
    }
    
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }

    def(term: string) {
        return this.words[term];
    }
}

class Word {
    constructor(
        public term: string, 
        public def: string
    ) {}
}
```
# 기타 
- tsc명령어를 통해 타입스크립트를 자바스크립트로 컴파일 할 수 있다. 
- package.json에 prestart를 적어주면 start를 실행하기에 앞서 prestart의 내용을 실행하고 start를 실행시킨다. 
    - 이를 이용하면 prestart에서 먼저 ts를 js로 컴파일해주고
    - start를 통해 js를 실행시키는 것이 가능하다. 
