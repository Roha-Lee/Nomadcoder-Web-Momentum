import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({toDos}) {
    // useParams로 router에서 썼던 id를 가져와서 사용할 수 있다. 
    const id = useParams().id;
    console.log(toDos);
    const toDo = toDos.find(toDo => toDo.id === parseInt(id));
    console.log(toDo, id);
    return (
        <>
        <h1>{toDo?.text}</h1>
        <span>Created at: {toDo?.id}</span>
        </>
    );
}

function mapStateToProps(state, ownProps) {
    return { toDos: state };
}

export default connect(mapStateToProps)(Detail);