import React, {useState} from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home({toDos, addToDo}) {

    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(item => <ToDo {...item} key={item.id} />)}
            </ul>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    return { toDos: state }; 
}

function mapDispatchToProps(dispatch, ownProps) {
    return { 
        addToDo: text => dispatch(actionCreators.addToDo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// 필요없는 부분에 null을 넣어준다. 
// export default connect(null, mapDispatchToProps)(Home);