import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const friendsName = ['Azizul Islam Milton','Morsadur Zaman Firoj','Khan Abirul Islam','Saykat Hossain'];
  const friendsDetails =[
    {name:"Azizul Islam Milton",gf:"Khadiza Tumpa",age:"25",district:"Khulna"},
    {name:"Morsadur Zaman Firoj",gf:"Bonna Khatun",age:"23",district:"Rangpur"},
    {name:"Khan Abirul Islam",gf:"Shima Khatun",age:"24",district:"Khulna"},
    {name:"Saykat Hossain",gf:"Shoma Khan",age:"25",district:"Rajshahi"},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        {
          friendsDetails.map(friend=><FriendsDetails friend={friend}></FriendsDetails>)
        }
        
        {
          friendsName.map(friend=><Friends friendDetail={friend} job="Web Developer"></Friends>)
        }
      </header>
    </div>
  );
}

function Friends(props){
  var friendsStyle ={
    width:'700px',
    backgroundColor:'gray',
    border:'5px solid red',
    borderRadius:'15px',
    margin:'15px',
    padding:'20px',
    boxShadow:'5px 5px 10px gray',
  }
  
  return(
  <div style={friendsStyle}>
    <h1>Name: {props.name}</h1>
  <h2>Profession: {props.job}</h2>
  </div>)
}


function FriendsDetails(props){
  var friendsStyle ={
    width:'700px',
    backgroundColor:'gray',
    border:'5px solid red',
    borderRadius:'15px',
    margin:'15px',
    padding:'20px',
    boxShadow:'5px 5px 10px gray',
  }
  console.log()
  return(
    <div style={friendsStyle}>
      <h2>Name: {props.friend.name}</h2>
      <h2>Age: {props.friend.age}</h2>
      <h2>Girlfriend: {props.friend.gf}</h2>
      <h2>District: {props.friend.district}</h2>
    </div>
  )
}


function Counter(){
  const [count,setCount] = useState(0);
  
  return(
    <div>
      <h2>Number of Movies: {count}</h2>
      <button onClick={()=>setCount(count + 1)}>Add Movie</button>
      <button onClick={()=>setCount(count - 1)}>Remove Movie</button>
      <DisplayMovie count={count}></DisplayMovie>
      <DisplayMovie count={count+10}></DisplayMovie>
      <DisplayMovie count={count+5}></DisplayMovie>
      <DisplayMovie count={count*3}></DisplayMovie>
    </div>
  )
}

function DisplayMovie(props){
  return(
    <div>
      <h1>Total Movies: {props.count}</h1>
    </div>
  )
}
export default App;
