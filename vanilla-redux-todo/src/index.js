import {createStore} from "redux";

const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('input');

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  }
}

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO, 
    id,
  }
}
function todoReducer(state=[], action) {
  switch(action.type){
    case ADD_TODO:
      if(action.text !== ""){
        return [{text: action.text, id: Date.now()}, ...state];
      }
      return state;
    case DELETE_TODO:
      return state.filter(item => item.id !== action.id);
    default:
      return state ;
  }
}

const paintTodos = () => {
  ul.innerHTML = '';
  todoStore.getState().forEach(item => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.addEventListener('click', dispatchDeleteTodo);
    btn.innerText = "DEL";
    li.id = item.id;
    li.innerText = item.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

const todoStore = createStore(todoReducer);
todoStore.subscribe(paintTodos);

const dispatchAddTodo = text => {
  todoStore.dispatch(addTodo(text));
}

const dispatchDeleteTodo = (event) => {
  const todoId = parseInt(event.target.parentNode.id);
  todoStore.dispatch(deleteTodo(todoId));
}

const submitHandler = (event) => {
  event.preventDefault();
  const todo = input.value;
  input.value = '';
  dispatchAddTodo(todo);
}

form.addEventListener('submit', submitHandler);