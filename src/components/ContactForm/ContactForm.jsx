import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import "./ContactForm.component.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import CONIMAGE from "../../../public/images/contact.svg"

const ContactForm = () => {
  return (
    <section className="container">
      <div className="contact-form">
        <div className="top-btn">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        
        <form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          
          <div className="form-control">
            <label htmlFor="name">E-mail</label>
            <input type="email" name="email" />
          </div>
          
          <div className="form-control">
            <label htmlFor="name">Text</label>
            <textarea type="textarea" rows="8" name="Text" />
          </div>
          <div>
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>

      <div className="contact-image">
        <img src={CONIMAGE} alt="contact image" />
      </div>
      
    </section>
  );
};

export default ContactForm;
