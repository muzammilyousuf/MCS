import React from 'react';
import Button from './Button';
import "../App.css";
import larki from "../images/larki.png";
import doctor from "../images/doctor.png";
import Card from "../components/Card";
import img1 from "../images/15959.webp";
import img2 from "../images/5548129.png";
import img3 from "../images/7373278.png";
import img4 from "../images/Gemini_Generated_Image_egzimjegzimjegzi.jpeg";
import img5 from "../images/Gemini_Generated_Image_v0l3kev0l3kev0l3.jpeg";
import img6 from "../images/New-Project-1.jpg";
import img7 from "../images/user-06.jpg";
import img8 from "../images/images (1).png";
import img9 from "../images/365318947.jpg";
import img10 from "../images/istockphoto-1256489977-170x170.jpg";
import img11 from "../images/HIPPA-Compliance.png-1024x585.webp";
import img12 from "../images/CMRS_Study_Guide-2.jpg";
import img13 from "../images/images-1.jpeg";
import callIcon from "../images/phone-call-icon-design-in-blue-circle-png.webp";
import emailIcon from "../images/mail-1454731_640.webp";


const Home = () => {
   
  return (
    <div id="home-div">
      <div  id="banners-div">
        <div id="banner1-div">
          <h2>Here we are</h2>
          <br />
          <h1 style={{ fontSize: 30 }}>Your Claims, Our <br />Commitment</h1>
          <p>Medical Care submission at your service.</p>
          <button className="banner1-btn" onClick={()=>window.location.href="/contact"}>Appointment</button>
        </div>
        <div id="banner2-div">
          <img width={"40%"} style={{ marginLeft: "-17%" }} src={larki}></img>
          <div className="description">
            <p>"Top-notch service! Medical Care<br /> Submission delivers impeccable <br />results. Their expertise and <br />efficiency have transformed our<br /> billing process, boosting revenue<br /> and minimizing errors. Highly<br /> recommended!"
            </p>
            <p style={{ color: "blue", fontWeight: "bold" }}>
              Dr.Alice
            </p>
          </div>
        </div>
      </div>

      <div id='section'>
        <div id="banner5">
          <Card text={<><img width={"50%"} src={img1} /><h1 style={{ fontSize: 14, textAlign: "center", color: "black" }}>
          More experience</h1><p>We have 3+ Years of experience in the medical billing field.</p> <br /></>} />
          <Card text={<><img width={"50%"} src={img2} /><h1 style={{ fontSize: 14, textAlign: "center", color: "black" }}>
          Daily innovation</h1><p>We are a diverse company that provides Medical Services and IT solutions aswell..</p> <br /></>} />
          <Card text={<><img width={"50%"} src={img3} /><h1 style={{ fontSize: 14, textAlign: "center", color: "black" }}>
          You come first</h1><p>Medical Care Submission treats its customers equally and professionally..</p> <br /></>} />
        </div>
      </div>

      <div id="sections-div">
        <div id="banner3-div">
          <img width={"100%"} src={doctor}></img>
        </div>
        <div id="banner4-div">
        <div className="description">
          <h1 style={{ fontSize: 30 }}>Best Healthcare</h1>
          <br/>
          <p>Welcome to Medical Care Submission, where excellence meets<br /> efficiency in healthcare revenue management. With a<br /> dedicated team of seasoned professionals, we specialize in<br /> streamlining medical billing processes to optimize<br /> reimbursements for our clients. Leveraging cutting-edge <br />technology and industry insights, we ensure seamless revenue<br /> cycle management, allowing healthcare providers to focus on<br /> patient care with confidence..</p>
          <br />
          <h1 style={{ fontSize: 30 }}>Accurate</h1>
          <p>Our commitment to accuracy, compliance, and client  <br /> satisfaction sets us apart..</p>
          <br />
          <h1 style={{ fontSize: 30 }}>Trustworthy</h1>
          <p>Trust Mdeical Care Submission for unparalleled expertise <br />and results-driven solutions..</p>
        </div>
        </div>
      </div>

      <div id='section2'>
        <div id="heading"><h1>Best Medical Services</h1></div>
        <div id="banner5">
          <Card text={<><img width={"100%"} src={img4} /><h1 style={{ fontSize: 14, textAlign: "center", color: "black" }}>
            Bank Statement Reconciliation</h1> <br /></>} />
          <Card text={<><img width={"100%"} src={img5} /><h1 style={{ fontSize: 14, textAlign: "center", color: "black" }}>
            Practice Analysis (Free Of Cost)</h1> <br /></>} />
          <Card text={<><img width={"100%"} src={img6} /><h1 style={{ fontSize: 14, textAlign: "center", color: "black" }}>
            Virtual Assistance</h1> <br /></>} />
        </div>
      </div>

      <div id='section3'>
        <div id="section3-part1">
          <div id="heading"><h1 style={{ textAlign: 'left', fontSize: 50 }}>Why Choose MCS?</h1></div>
          <p>We assure you that we can boost your revenue cycle in a spectacular way.</p>
          <button className="banner1-btn cursor-hand" onClick={()=>window.location.href='tel:+15182824526'}>Call Us </button>
        </div>
        <div className="banner6">
          <img width={50} src={img7} /><h1 style={{ color: "black" }}>
            Expertise and Experience:</h1> <p>Benefit from our extensive experience in the medical billing industry.</p> 
           
          <img width={50} src={img9} /><h1 style={{ color: "black" }}>
            Tailored Solutions:</h1>  <p>We understand that every healthcare practice is unique.</p> 
           
        </div>
        
      </div>

      <div id='section2'>
        <div id="banner5">
         <Card text={<img width={"100%"} src={img11} />}/>
         <Card text={<img width={"100%"} src={img12} />}/>
         <Card text={<img width={"100%"} src={img13} />}/> </div>
      </div>


    <div id='footer'>
      <p>Author: Hege Refsnes<br/></p>
      <div id='email'>
      <img width={"3%"} src={emailIcon}/>
      <a href="mailto:ally@med-caresolution.com">ally@med-caresolution.com</a></div>
      <div id='call'>
        <img width={"3%"} src={callIcon}/>
      <a href='tel:+15182824526'>+15182824526</a></div>
      </div>

    </div>
  )
}

export default Home