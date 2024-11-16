import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/brew-loyalty-logo.png";

export function Logo(props: { className?: string; link?: string }) {
  return (
    <Link
      href={props.link ?? "/"}
      className={cn("items-center space-x-2", props.className)}
    >
      <Image src={logo} alt="Brew Loyalty Logo" width={50} height={50} />
      <span className="font-bold sm:inline-block">Brew Loyalty</span>
    </Link>
  );
}
