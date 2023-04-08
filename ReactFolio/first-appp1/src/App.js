import logo from './logo.svg';
import './App.css'; 
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {
   const response=[
    {
      itemName:"sunflower",
      itemDate:"22",
      itemMonth:"January"
    },
    {
      itemName:"rose",
      itemDate:"12",
      itemMonth:"Febrauary"
    },
    {
      itemName:"marigold",
      itemDate:"02",
      itemMonth:"April"
    },
   
   ];

   const itemTwo ="SurfExcel"

  return (
    <Card>
          <div>
        <Item name="Nirma">This is my first component</Item>
        <ItemDate  day="30" month="June"></ItemDate>

        <Item name={itemTwo}></Item>
        <ItemDate day="20" month="July"></ItemDate>

        <Item name="Arial"></Item>
        <ItemDate day="10" month="August"></ItemDate>

        <Item name={response[0].itemName}></Item>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth}></ItemDate>

       <div className="App">
          Hello Jayshree
       </div>
    </div>


    </Card>
     
    
  );
}

export default App;
