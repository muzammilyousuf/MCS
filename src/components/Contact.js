import React from 'react'
import locationImage from '../images/location.png'
import callIcon from "../images/phone-call-icon-design-in-blue-circle-png.webp"
import emailIcon from "../images/mail-1454731_640.webp"
import contactImage from '../images/contact.png'
import emailImage from '../images/email.svg.png'
import Card from "../components/Card"
import Button from "./Button"

const Contact = () => {

  return (
    <div id='contact'>
      <div id='sectionCard'>
       
        <div id="banner5">
          <Card text={<><img width={"50%"} src={locationImage} /><h1 style={{ fontSize: 14, textAlign: "center", color: "black" }}>
          Our Location</h1> <p>30N GOULD st STE N,<br /> Sheridan, WY82801</p>
            </>} />
          <Card text={<><img width={"50%"} src={emailImage} /><h1 style={{ fontSize: 14, textAlign: "center", color: "black" }}>
          Our Email Addres</h1>  <p>support@valuedclaim<br/>submission.com</p></>} />
          <Card text={<><img width={"60%"} src={contactImage} /><h1 style={{ fontSize: 14, textAlign: "center", color: "black" }}>
          Our Contact Number</h1> <p>+12605730264</p></>} />
        </div>
      </div>

      <div id="contactSection2">
        <div id="banners-contact-div">
          <div id="banner1-contact-div">
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110263.29414646483!2d66.9012906972656!3d24.859220900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f8b7046983f%3A0xe2272e143bd6bbf6!2sMCS%20BPO%20SOLUTION!5e1!3m2!1sen!2s!4v1725638196677!5m2!1sen!2s" width="100%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          </div>
          <div id="banner2-contact-div">
            <div>
              <form>
                <table id="fields">
                  <tr className='fields'>
                    <input type='text' placeholder='Name'></input>
                    <input type='email' placeholder='Email' ></input>
                  </tr>
                  <br />
                  <tr className='fields'>
                    <input type='number' placeholder='Number'></input>
                    <select type='text' placeholder='Service'>
                      <option>select</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                  </tr>
                  <br />
                  <tr className='fields'>
                    <textarea type='text-aria' placeholder='Message'></textarea>
                  </tr>
                <button className="banner1-btn" type="submit" >Schedule a Meeting</button>
                </table>
              </form>

            </div>
          </div>
        </div>


      </div>


      <div>
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
    </div >
  )
}

export default Contact