import logo from './logo.svg';
import './App.css';   
import {useState} from "react";

function App() {

//  const [firstName, setFirstname] =useState("");
//  const [lastName, setLastname]  = useState("");


//  console.log(firstName);
//  console.log(lastName);

//   function firstChangeHandler(event)
//   {
//     console.log("first name printing");
//     // console.log(event.target.value);
//     setFirstname(event.target.value);
//   }
//   function lastChangeHandler(event)
//   {
//     console.log("last name printing");
//     // console.log(event.target.value);
//     setLastname(event.target.value);
//   }

const [formData, setFormData] = useState({firstName:"",lastName:"", email:"",comments:"",isVisible:"true", mode:"" , favCar:""});

function changeHandler(event)
{
  const {name, value,checked,type}= event.target;
  setFormData(prevFormData =>{
    return {
      ...prevFormData,
      //  [event.target.name] : event.target.value
      [name]: type ==="checkbox" ? checked :value
    }
  });
}

function submitHandler(event){

  event.preventDefault();
  console.log("Printing the entire form....");
  console.log(formData);
}

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
         type="text"
         placeholder="first name"
         name="firstName"
         onChange={changeHandler}
         value={formData.firstName}/>
         
         <br/>
         <br/>
          
         <input
         type="text"
         placeholder="last name"
         name="lastName"
         onChange={changeHandler}
         value={formData.lastName}/>
         <br/>
         <br/>
          
         <input
         type="email"
         placeholder="email"
         name="email"
         onChange={changeHandler}
         value={formData.email}/>

         <br/><br/>
         <textarea
           placeholder='enter your comments here...'
           onChange={changeHandler}
           name="comments"
           value={formData.comments}/>

          <br/> <br/>
        
           <input
           type="checkbox"
           onChange={changeHandler}
           name="isVisible"
           id="isVisible"
           checked={formData.isVisible}/>

          <label htmlFor='isVisible'>
            Am I visible?
            </label>
   
          <br/>

          <fieldset>
            <legend>Mode :</legend>

            <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="online-mode"
          id="online-mode"
          checked={formData.mode ==="online-mode"}/>

          <label htmlFor="online-mode">Online Mode</label>

            <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="offline-mode"
          id="offline-mode"
          checked={formData.mode ==="offline-mode"}/>

          <label htmlFor="offline-mode">Offline Mode</label>

          </fieldset>

        <select 
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}>
          
          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Thar">Thar</option>
          <option value="legender">Legender</option>
          <option value="Defener">Defender</option>
        </select>
        <label htmlFor="favCar">Tell me your favourite car ?</label>

        <br/><br/>
      <button type="submit" value="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
