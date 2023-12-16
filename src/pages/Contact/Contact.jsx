import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';
import contactbgimage from "../../assets/bg_contact_img.png"

const Contact = () => {

    const [isLabelVisible, setIsLabelVisible] = useState(true);
    const [isEmailLabelVisible, setIsEmailLabelVisible] = useState(true);
    const [isMessageLabelVisible, setIsMessageLabelVisible] = useState(true);

    const handleFocus = () => {
      setIsLabelVisible(false);
    };
  
    const handleBlur = (e) => {
      if (e.target.value === '') {
        setIsLabelVisible(true);
      }
    };  

    const handleEmailFocus = () => {
    setIsEmailLabelVisible(false);
  };

  const handleEmailBlur = (e) => {
    if (e.target.value === '') {
      setIsEmailLabelVisible(true);
        }
  };

  const handleMessageFocus = () => {
    setIsMessageLabelVisible(false)
  }

  const handleMessageBlur = (e) => {
    if (e.target.value === '') {
        setIsMessageLabelVisible(true);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hbn6lwz', 'template_izf02et', form.current, '7rmIXwn0JSBk-u2qy')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  var bgcontactimg = {
    backgroundImage: `url(${contactbgimage})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'right center',
    opacity: 1, 
};

  return (
    <section id='contact-us' className="bg-white-500 text-black sm:h-screen h-auto flex flex-col justify-center mt-10">
        <div className="text-contactus text-center mt-0">
            <h1 className="text-7xl font-medium inline">Contact</h1>&nbsp;&nbsp;&nbsp;&nbsp;
            <h1 className="text-7xl font-semibold inline">Us</h1>
        </div>
        <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-rectangle lg:min-w-[1025px] lg:min-h-[600px] md:min-w-[850px] md:min-h-[500px] sm:min-w-[700px] sm:min-h-[350px] max-w-auto mx-auto bg-white p-6 rounded-3xl shadow-lg mt-20"
        style={{ ...bgcontactimg, borderRadius: '5.5rem', boxShadow: "-5px 5px 20px rgba(255, 105, 180, 0.8), 5px 5px 20px rgba(255, 105, 185, 0.8)" }}
        >
        <div className="input-username-div relative ml-20 mt-16">
        <input
            className="input-username shadow appearance-none border rounded-full w-84 py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{
                boxShadow: "-5px 5px 20px rgba(255, 105, 180, 0.5), 5px 5px 20px rgba(255, 105, 185, 0.5)"
            }}
            type="text"
            name="user_name"
            id="user_name"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          <label
            htmlFor="user_name"
            className={`absolute top-3 left-3 text-xl text-black px-1 ${
              isLabelVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Name
          </label>
        </div>
        <div className="input-useremail-div relative ml-20 mt-8">
          <input
            className="input-useremail shadow appearance-none border rounded-full w-84 py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{
                boxShadow: "-5px 5px 20px rgba(255, 105, 180, 0.5), 5px 5px 20px rgba(255, 105, 185, 0.5)"
            }}
            type="email"
            name="user_email"
            id="user_email"
            required
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
          />
          <label
            htmlFor="user_email"
            className={`absolute top-3 left-3 text-xl text-black px-1 ${
              isEmailLabelVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Email
          </label>
        </div>
        <div className="input-useremail-div mt-8 ml-20 relative">
            <textarea
                className="input-usermsg shadow appearance-none border rounded-3xl w-84 h-40 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                style={{
                    boxShadow: "-5px 5px 20px rgba(255, 105, 180, 0.5), 5px 5px 20px rgba(255, 105, 185, 0.5)"
                }}
                name="message"
                id="message"
                required
                onFocus={handleMessageFocus}
                onBlur={handleMessageBlur}
            />
            <label
                htmlFor="message"
                className={`absolute top-3 left-3 text-xl text-black px-1 ${
                isMessageLabelVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                Message
            </label>
        </div>
        <div className="contactus-submit-button mt-10 ml-40 flex">
          <button
            className="bg-gradient-to-r from-pink-500 to-blue-500 px-16 py-3 rounded-full text-white text-xl"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;