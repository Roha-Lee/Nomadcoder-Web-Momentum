# Typescript
- tsc명령어를 통해 타입스크립트를 자바스크립트로 컴파일 할 수 있다. 
- package.json에 prestart를 적어주면 start를 실행하기에 앞서 prestart의 내용을 실행하고 start를 실행시킨다. 
    - 이를 이용하면 prestart에서 먼저 ts를 js로 컴파일해주고
    - start를 통해 js를 실행시키는 것이 가능하다. 
