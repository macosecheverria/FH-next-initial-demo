import styles from "./Navbar.module.css";
import ActiveLink from "./ActiveLink";
import { FC } from "react";

interface Menu {
  text: string;
  href: string;
}

const menuItems: Menu[] = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Pricing", href: "/pricing" },
];

const Navbar: FC = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} href={href} text={text} />
      ))}

      {/* <ActiveLink text="Home" href="/" />
           <ActiveLink text="About" href="/about" />
           <ActiveLink text="Contact" href="/contact" /> */}
    </nav>
  );
};

export default Navbar;
