import React from 'react'
import App from '../App';
import Header from "./Header"
import img from "../images/image.jpeg"
import Button from './Button';

const Home = () => {
  var students = ["Ahsan", "Abdullah", "Mahad", "Ali", "Muzammil"];

  return (
    <div>
      <h1>Home</h1>
      <div>
        <Header />
        <h2>ABOUT US</h2>
      </div>
      <p> Desk Skill Worldwide is committed to delivering high-quality computer education that meets international standards. Offering software education courses to students and working professionals across over 40 countries (online Classes), we prioritize global competence and skill development. </p>
      <img src={img} alt="Error" />
      <p>
        Our students are:
      </p>
      <ol>
        {/* {students}
      <br/> */}
        {students.map((stdName, index) => <li key={index}>{stdName}</li>)}
      </ol>
      <Button text="Sign In" />
      <Button text="Sign Up" />



    </div>
  )
}

export default Home