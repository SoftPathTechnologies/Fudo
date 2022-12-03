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

  useEffect(()=>{
    setOrder(localStorage.getItem("order_id"));
  },[]);

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
        <li><Link href="/#menu">Menu</Link></li>
        <li>Contact</li>
      </div>
      {/* Cart Section  */}
      <div className={css.rightside}>
        <Link href="/cart">
          <div className={css.cart}>
            <UilShoppingBag size={35} color="#2E2E2E" />
            <div className={css.cart_header}>{cartItems}</div>
          </div>
        </Link>
        {order && (
          <Link href={`/order/${order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color="#2E2E2E" />
              <div className={css.cart_header}>1</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
