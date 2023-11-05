import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem';

const TodoList = () => {
    let initialList = [
        {id: 1, text: 'Clean the office', done: true},
        {id: 2, text: 'Buy milk', done: false},
        {id: 3, text: 'Create todo app in REACT', done: false},
        {id: 4, text: 'Have a shower', done: false}
    ];

    const [list, setList] = useState(initialList);
    const [textInput, setTextInput] = useState('');

    const handleTextInput = (e) => {
        setTextInput(e.target.value);
    };

    let todoItems = list.map((item) => {
        return <TodoItem key={item.id} todo={item} />
    });

    return (
        <Card>
            <Card.Header>TodoList</Card.Header>
            <ListGroup>
                {todoItems}
            </ListGroup>
            <Card.Footer>
                <input type='text' onChange={handleTextInput} value={textInput} />
                <Button variant='primary' className='float-end'>Add</Button>
            </Card.Footer>
        </Card>
    )
}

export default TodoList;