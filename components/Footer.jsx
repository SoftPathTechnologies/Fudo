import css from "../styles/Footer.module.css";
import { UilFacebook, UilGithub, UilTwitter  } from '@iconscout/react-unicons'
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";


export default function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVES</span>
      <div className={css.social}>
        <Link href={`https://web.facebook.com/SoftPathTechnologies`} target="_blank">
          <UilFacebook size={45} />
        </Link>
        <Link href={`https://github.com/SoftPathTechnologies`} target="_blank">
          <UilGithub size={45} />
        </Link>
        <Link href={`https://twitter.com/SoftpathT`} target="_blank">
          <UilTwitter size={45} />
        </Link>
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Fudo</span>
      </div>
    </div>
  );
}
