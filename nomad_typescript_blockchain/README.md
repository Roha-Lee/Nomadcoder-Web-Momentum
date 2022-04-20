# Typescript
- **typescript**: 타입 안정성 때문에 개발 경험이 좋아진다. 
    - javascript는 매우 유연한 언어 -> 개발자를 이해하려고 노력한다. 에러메시지를 최소한으로 보여준다.
        - ex) 놀랍게도 `[1, 2, 3, 4] + false`는 `'1,2,3,4false'`가 된다. 
        - ex) 
            ```javascript
            function divide(a, b) {
                return a / b
            }
            divide(2, 3)
            divide('111') // 이래도 실행이 된다..
            ```
    - strongly typed programming language이다. 
    - 데이터의 타입에 대해 보호받을 수 있고, 매개변수의 개수에 대해서도 보호 받을 수 있다. 
        - 타입 추론에 의해 가능하다. 
    

- tsc명령어를 통해 타입스크립트를 자바스크립트로 컴파일 할 수 있다. 
- package.json에 prestart를 적어주면 start를 실행하기에 앞서 prestart의 내용을 실행하고 start를 실행시킨다. 
    - 이를 이용하면 prestart에서 먼저 ts를 js로 컴파일해주고
    - start를 통해 js를 실행시키는 것이 가능하다. 
