import React from 'react'
import locationImage from '../images/location.png'
import callIcon from "../images/phone-call-icon-design-in-blue-circle-png.webp"
import emailIcon from "../images/mail-1454731_640.webp"
import contactImage from '../images/contact.png'
import emailImage from '../images/email.svg.png'
import Card from "../components/Card"
import Button from "./Button"

const Contact = () => {
  let imageStyle = {
    backgroundImage:
      "url(https://www.google.com/maps/@24.9218614,67.1298671,3700m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D)",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div id='contact'>
      <div id='sectionCard'>
       
        <div id="banner5">
          <Card text={<><img width={"100%"} src={locationImage} /><h1 style={{ fontSize: 14, textAlign: "center", color: "black" }}>
          Our Location</h1> <p>30N GOULD st STE N, Sheridan, WY82801</p>
            </>} />
          <Card text={<><img width={"100%"} src={emailImage} /><h1 style={{ fontSize: 14, textAlign: "center", color: "black" }}>
          Our Email Addres</h1>  <p>support@valuedclaimsubmission.com</p></>} />
          <Card text={<><img width={"100%"} src={contactImage} /><h1 style={{ fontSize: 14, textAlign: "center", color: "black" }}>
          Our Contact Number</h1> <p>+12605730264</p></>} />
        </div>
      </div>

      <div id="contactSection2">
        <div style={imageStyle} id="banners-contact-div">
          <div id="banner1-contact-div">
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.6626748054014!2d67.07685357505788!3d24.89742474377803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ed9837a7f37%3A0x575b359136d55189!2sStadium%20Rd%2C%20National%20Stadium%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2s!4v1725606108563!5m2!1sen!2s" width="500" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
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