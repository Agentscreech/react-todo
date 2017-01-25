import React, { Component } from 'react';

//component
import ToDoList from './ToDoList.jsx';


class ToDoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            toDos: []
        }
    }

    clearState() {
        this.setState({toDos: []});
    }
    newItemChange(e){
        this.setState({newItem: e.target.value});
    }
    addItem(e) {
        e.preventDefault();
        const toDos = this.state.toDos;
        toDos.push(this.state.newItem);
        this.setState({toDos: toDos, newItem: ''});
    }

    render(){
        return(
            <div>
                <h1>Hello</h1>
                <button onClick={() =>this.clearState()}>Clear</button>
                <form onSubmit={(event) => this.addItem(event)}>
                    <input type="text" placeholder="Item goes here" onChange={(event) => this.newItemChange(event)} value={this.state.newItem}/>
                </form>
                <ToDoList items={this.state.toDos}></ToDoList>
            </div>
        );

    }
}


export default ToDoApp;
