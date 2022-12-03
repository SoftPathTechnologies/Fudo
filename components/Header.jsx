import Image from "next/image";
import css from "../styles/Header.module.css";
import Logo from "../assets/Logo.png";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import { useStore } from "../store/store";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const cartItems = useStore((state) => state.cart.pizzas.length);
  const [order, setOrder] = useState("");

  useEffect(() => {
    setOrder(localStorage.getItem("order_id"));
  }, []);

  return (
    <div className={css.header}>
      {/* Logo Section  */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Fudo</span>
      </div>
      {/* Menu Section  */}
      <div className={css.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#menu">Menu</Link>
        </li>
        <li> <Link href="/contact">Contact</Link></li>
      </div>
      {/* Cart Section  */}
      <div className={css.rightside}>
        <div className={css.cart}>
           <Link href="/cart">
            <UilShoppingBag size={35} color="#2E2E2E" />
         </Link>
          <div className={css.cart_header}>{cartItems}</div>
        </div>

        {order && (
          <div className={css.cart}>
            <Link href={`/order/${order}`}>
              <UilReceipt size={35} color="#2E2E2E" />
            </Link>
            <div className={css.cart_header}>1</div>
          </div>
        )}
      </div>
    </div>
  );
}
