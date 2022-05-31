import React from 'react';
import logo from './logo.svg';
import './App.css';

let student: string = '5';
let age: number = 69;
let isStudent: boolean = true;

let students: string[] = ['joe', 'biden', 'harris'];
let fees: number[] = [12, 23, 122, 25, 2];


//declare a object type
interface Person {
  name: string,
  job?: string, //optional
  employed: string | boolean,
  age: number,
  location?: string | number // | orSign  //any for any type
}

const person: Person = {
  name: 'Bill Clinton',
  employed: true,
  age: 85,
  location: 55
}


const handleAddUser = (firstName: string, age: number, address: string): number => {
  const total: number = 50;
  console.log(firstName, age, address);
  return age;
}


function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
