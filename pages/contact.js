import Image from "next/image";
import Layout from "../components/Layout";
import css from "../styles/Contact.module.css";
import customerCare from "../assets/customer-care.png";
import {useMantineTheme, Input, Textarea } from "@mantine/core";

export default function Contact(params) {
   const theme = useMantineTheme();
  return (
    <Layout>
      <div className={css.container}>
        <div className={css.contactCard}>
          <div className={css.left}>
            <div className={css.imageWrapp}>
              <Image src={customerCare} alt="" />
            </div>
          </div>
          <div className={css.right}>
            <span>Get in Touch</span>
            <span>We are here for you. How can we help?</span>
            <div className={css.contactForm}>
              <Input name="name" placeholder="Enter Fullname" />
              <Input placeholder="Enter Email Address" name="email" />
              <Input placeholder="Enter Phone Number" name="phone" />
              <Textarea placeholder="Your Message goes here..." name="message" />
              <button  className={`btn ${css.btn}`}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
