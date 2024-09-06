import React from 'react'
import callIcon from "../images/phone-call-icon-design-in-blue-circle-png.webp"
import emailIcon from "../images/mail-1454731_640.webp"
import star from "../images/pngtree-shiny-yellow-star-icon-clipart-png-image_9011244.png"
import Card from './Card'

const About = () => {

  return (
    <div id="about" >
      <div id="about-div">
        <div className="banner6">
          <div style={{ width: "100%",height:"100%"}}>
            <h1 style={{ fontSize: 40, textAlign: "center", padding:25 }}><img width={50} src={star} /> Why Choose Us for Your Medical Billing Needs?<img width={50} src={star} />  </h1>
            <p style={{ padding: 25 }}>In the ever-evolving landscape of healthcare, efficient and accurate medical billing is crucial for success. Here’s why partnering with us<br /> can make all the difference for your practice:</p>
          </div>
        </div>

        <div className="banner6">
          <div style={{ width: "100%",height:"100%"}}>
          <h1 style={{ color: "black" }}>Expertise You Can Trust</h1> 
          <p style={{ padding: 25 }}>Our team is comprised of industry veterans who understand the intricacies of medical billing. With<br /> years of experience, we ensure that your billing process is smooth, compliant, and optimized<br /> for maximum reimbursement.</p>
         
           <h1 style={{ color: "black" }}>
            Cutting-Edge Technology:</h1> <p style={{ padding: 25 }}>We understand that every practice is unique. Our tailored approach means we customize our services to fit<br /> your specific needs, ensuring you get the attention and support you deserve..</p>
           <h1 style={{ color: "black" }}>
           Proven Results</h1> <p style={{ padding: 25 }}>Our track record speaks for itself. We’ve helped numerous practices reduce claim denials, improve cash flow, and<br /> achieve financial stability. Let us show you how we can do the same for you..</p>
            </div>
        </div>

        
        <div className="banner6">
        <div style={{ width: "100%",height:"100%"}}>

          <h1 style={{ color: "black" }}>
          Personalized Service</h1> <p style={{ padding: 25}}>We understand that every practice is unique. Our tailored approach means we customize our services to fit your<br /> specific needs, ensuring you get the attention and support you deserve..</p>
          <h1 style={{ color: "black" }}>
          Cost-Effective Solutions:</h1>  <p style={{ padding: 25 }}>Outsourcing your billing to us reduces overhead costs and increases efficiency. Say goodbye to the expenses<br /> of maintaining an in-house team and let us handle the complexities for you.</p>
          <h1 style={{ color: "black" }}>
          Focus on Patient Care</h1>  <p style={{ padding: 25 }}>By trusting us with your billing needs, you can focus more on delivering exceptional patient care. We handle the<br /> administrative burdens so you can do what you do best.</p>
        </div>
        </div>


        <div id='section0'></div>
        </div>




        <div id='footer'>
          <p>Author: Hege Refsnes<br /></p>
          <div id='email'>
            <img width={"3%"} src={emailIcon} />
            <a href="mailto:ally@med-caresolution.com">ally@med-caresolution.com</a></div>
          <div id='call'>
            <img width={"3%"} src={callIcon} />
            <a href='tel:+15182824526'>+15182824526</a></div>
        </div>
    </div>
  )
}

export default About