import './App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");

  const onSubmit = () => {
    props.onSubmit(input);
    setInput("");
  };




  return (<div>
    <TextField
       id="todo-item-input"
       label="Todo Item"
       variant="outlined"
       onChange={(e) => setInput(e.target.value)} value={input}
    />
    <Button variant="outlined" onClick={onSubmit}>Submit</Button>
   </div>);
  };

  const TodoItemList = (props) => {
    const todoList = props.todoItemList.map((todoItem, index) => {
      return <li key={index}>{todoItem.todoItemContent}</li>;
    });



    return (<div>
      <ul>{todoList}</ul>
    </div>;
  };




function App() {
  return (
    <div className="App">
      <TodoItemInputField onSubmit={() => {}} />
      <TodoItemList todoItemList={[]} />
    </div>
    
  );
}

export default App;
