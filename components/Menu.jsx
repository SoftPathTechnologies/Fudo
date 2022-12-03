import Image from 'next/image';
import { urlFor } from '../lib/client';
import css from '../styles/Menu.module.css';
import Link from "next/link";

export default function Menu({pizzas}) {
    return (
      <div id="menu" className={css.container}>
        <div className={css.heading}>
          <span>our menu</span>
          <span>Menu that always </span>
          <span>Make you fall in love</span>
        </div>

        {/* Pizza List  */}
        <div className={css.menu}>
          {pizzas.map((pizza, id) => {
            const src = urlFor(pizza.image).url();
            return (
              <div className={css.pizza} key={id}>
                <Link href={`./pizza/${pizza.slug.current}`}>
                  <div className={css.imageWrapper}>
                    <Image
                      loader={() => src}
                      src={src}
                      alt=""
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </Link>
                <Link href={`./pizza/${pizza.slug.current}`}>
                  <span>{pizza.name}</span>
                </Link>
                <span>
                  <span style={{ color: "var(--themeRed)" }}>₦ </span>
                  {pizza.price[1].toLocaleString("en-US")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
};
