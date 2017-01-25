import React, { Component } from 'react';

//component
import ListItem from './ListItem';


class ToDoList extends Component {
    render(){
        const todoItems = this.props.items.map(item => {
            return <ListItem item={item}></ListItem>;
        });
        return (
            <ul>{todoItems}</ul>
        );
    }
}

export default ToDoList;
