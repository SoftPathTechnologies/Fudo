import Image from "next/image";
import css from "../styles/Services.module.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
export default function Services(params) {
    return (
      <>
        <div className={css.header}>
          <span>What We Serve</span>
          <span>Your favourite food</span>
          <span>Delivery Partner</span>
        </div>
        <div className={css.services}>
          <div className={css.feature}>
            <div className={css.imageWrapper}>
              <Image src={s1} alt="" />
            </div>
            <div className={css.details}>
              <span>Easy to Order</span>
              <span>You only need a few steps in food ordering</span>
            </div>
          </div>
          <div className={css.feature}>
            <div className={css.imageWrapper}>
              <Image src={s2} alt="" />
            </div>
            <div className={css.details}>
              <span>Quick Delivery</span>
              <span>Delivery that is always on time even faster</span>
            </div>
          </div>
          <div className={css.feature}>
            <div className={css.imageWrapper}>
              <Image src={s3} alt="" />
            </div>
            <div className={css.details}>
              <span>Best Customer Service</span>
              <span>Not only fast for us, qulity is also number one</span>
            </div>
          </div>
        </div>
      </>
    );
};
