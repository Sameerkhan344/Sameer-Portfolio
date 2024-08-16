import React, { useRef, useState } from "react";
import GithubIcon from "../../public/images/projects/github-icon.svg";
import LinkedinIcon from "../../public/images/projects/linkedin-icon.svg";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lbgam6p", "template_tg8r1jw", form.current, {
        publicKey: "P6F0RAYJdEOAj8_Fd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
    setEmailSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-0 px-4"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <p className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ">
          Let&apos;s Connect
        </p>
        {/* <h5 className="text-xl font-bold text-white my-2"></h5> */}
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/Sameerkhan344">
            <img src={GithubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/sameer-khan-335097115/">
            <img src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                name="user_name"
                type="name"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your good name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
