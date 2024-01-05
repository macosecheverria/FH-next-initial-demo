import { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  text: string;
};

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

const ActiveLink: FC<Props> = ({ href, text }) => {
    const {asPath} = useRouter();

  return (
    <>
      <Link href={href} style={asPath === href ? style : {}}>
        {text}
      </Link>
    </>
  );
};

export default ActiveLink;
