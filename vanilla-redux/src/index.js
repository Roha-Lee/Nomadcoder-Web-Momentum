import { createStore } from "redux";
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const number = document.querySelector('span');

// reducer: Data를 바꾸는 유일한 함수
// reducer가 return 하는 값이 data가 된다. 
// 두번째 매개변수인 action을 통해 값을 바꾸는 작업을 한다. 
// store.dispatch를 이용해서 action을 보낼 수 있다.
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const countModifier = (count = 0, action) => {
  switch(action.type) {
    case ADD:
      return count + 1;
    case SUBTRACT:
      return count - 1;
    default:
      return count;
  }
}

const onChange = () => {
  number.innerText = countStore.getState();
}

const countStore = createStore(countModifier);
// subscribe: 변화가 일어남을 감지한다. 
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type: ADD});
}

const handleSubtract = () => {
  countStore.dispatch({type: SUBTRACT})
}
// dispatch를 부르면 redux가 countModifier(currentState, {type: "ADD"})를 호출한다. 
add.addEventListener('click', handleAdd);
subtract.addEventListener('click', handleSubtract);