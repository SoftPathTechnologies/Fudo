import Image from "next/image";
import css from "../styles/Header.module.css";
import Logo from "../assets/Logo.png";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { useStore } from "../store/store";
import Link from "next/link";

export default function Header() {
  const cartItems = useStore((state) => state.cart.pizzas.length);
  return (
    <div className={css.header}>
      {/* Logo Section  */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Fudo</span>
      </div>
      {/* Menu Section  */}
      <div className={css.menu}>
        <li><Link href="/">Home</Link></li>
        <li>Menu</li>
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
      </div>
    </div>
  );
}
