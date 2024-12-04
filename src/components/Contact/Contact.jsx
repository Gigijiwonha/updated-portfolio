import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.style.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const message = formData.get("message");

    if (!userName || !userEmail || !message) {
      let emptyFields = [];
      if (!userName) emptyFields.push("Your Name");
      if (!userEmail) emptyFields.push("Your Email");
      if (!message) emptyFields.push("Message");

      alert(`Please fill in the following fields: ${emptyFields.join(", ")}`);
      return;
    }

    emailjs
      .sendForm("service_qz87hs8", "template_f5bnget", form.current, {
        publicKey: "sdmphMVbnr9Hy5o5b",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className='contactSection'>
      <h2 className='contactMe__title sectionTitle'>Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='contactMe__form'
      >
        <label className='contactMe__label'>Your Name</label>
        <input
          type='text'
          name='user_name'
          className='contactMe__input contactMe__input--name'
        />
        <label className='contactMe__label'>Your Email</label>
        <input
          type='email'
          name='user_email'
          className='contactMe__input contactMe__input--email'
        />
        <label className='contactMe__label'>Message</label>
        <textarea name='message' className='contactMe__textarea'/>
        <input
          type='submit'
          value='Send'
          className='contactMe__input contactMe__input--submit'
        />
      </form>
    </div>
  );
};

export default Contact;
