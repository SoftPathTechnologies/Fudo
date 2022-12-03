import Image from "next/image";
import css from "../styles/Hero.module.css";
import Cherry from "../assets/Cherry.png";
import Pizza1 from "../assets/p1.jpg";
import HeroImage from "../assets/HeroImage.png";
import {UilPhone} from '@iconscout/react-unicons';

export default function Hero() {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>More than Faster</span>
          <Image src={Cherry} alt="Cherry" width={40} height={25} />
        </div>
        <div className={css.heroText}>
          <span>Be the fastest</span>
          <span>In Delivery</span>
          <span>
            Your <span style={{ color: "var(--themeRed)" }}>Pizza</span>
          </span>
        </div>
        <span className={css.miniText}>
          Our Mission is to filling your tummy with delicious food and with fast
          and free delivery
        </span>
        <button className={`btn ${css.btn}`}>Get Started</button>
      </div>
      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="Hero Image" layout="intrinsic" />
        </div>
        <div className={css.contactUs}>
          <span>Contact Us</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>
        <div className={css.pizza}>
          <div>
            <Image
              src={Pizza1}
              alt="Pizza 1"
              layout="intrinsic"
              objectFit="cover"
            />
          </div>
          <div className={css.details}>
            <span>Italian Pizza</span>
            <span>
              <span style={{ color: "var(--themeRed)" }}>₦</span>9.30
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
