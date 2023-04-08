import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [text, setText] =useState('');

  const [name, setName] = useState('jays');
   
  //variation1 --> every render
  // useEffect(()=>{
  //    console.log("UI rendering done");
  // });

  //variation 2 --> first render
  useEffect(() =>{
    console.log("UI rendering done");
  }, []);

  //variation3 --> first render + whenever dependency change
  useEffect(() =>{
    console.log("UI render");
  },[name]);

 //variation 4 --> to handle unmounting of a component
 useEffect(()=>{
     //addEventListener
     console.log("listener added");

      return ()=>{
        console.log("listener removed");
      }
 },[text]);

  function changeHandler(event)
  {
    console.log(text); 
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
