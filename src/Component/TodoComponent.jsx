import React, { useState } from "react";
import "./TodoComponent.css";
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = ({ todo, index, markTodo, removeTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <span >
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </span>
    </div>
  );
}

const FormTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      {/* <Button variant="primary mb-3" type="submit"> Submit </Button> */}
    </Form>
  );
}

const TodoComponent = () => {
  const [todos, setTodos] = useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const search = (e) => {
    var filter = e.target.value;
    var search = filter.toLowerCase();
    var list = document.querySelectorAll("#list div");
    console.log(list);
    for (let i of list) {
      let item = i.innerHTML.toLowerCase();
      if (item.indexOf(search) == -1) {
        i.classList.add("hide");
      }
      else {
        i.classList.remove("hide");
      }
    }
  }

  return (
    <div className="box mt-2">
      <h3 className="text-center mb-4">Todo List</h3>
      <Row >
        <Col > <FormTodo addTodo={addTodo} /></Col>
        <Col > <Form.Group className="mb-3">
          <Form.Control type="text" id="searchbox" className="input" onChange={search} placeholder="Search..." />
        </Form.Group></Col>
      </Row>
      <div id="list">
        {todos.map((todo, index) => (
          <Card >
            <Card.Body >
              <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TodoComponent;