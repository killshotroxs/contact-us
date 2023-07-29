import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import "./ContactForm.component.scss";
import { FaPhoneAlt } from "react-icons/fa";

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
      </div>
    </section>
  );
};

export default ContactForm;
