import Image from "next/image";
import Link from "next/link";

import { LiaGamepadSolid } from "react-icons/lia";

export function Header() {
  return (
    <header className="w-full h-28  px-10 py-3">
      <div className="max-w-screen-xl  mx-auto flex justify-between items-center">
        <nav className="flex items-center gap-16 text-lg">
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt="Dev Games"
              width={80}
              height={80}
              quality={100}
              priority
            />
          </Link>
          <Link href="/">Games</Link>
          <Link href="/profile">Perfil</Link>
        </nav>
        <div>
          <Link
            href="/login"
            className="flex items-center justify-center w-12 h-12 border-2 border-orange-400 rounded-full hover:border-stone-800 transition-colors duration-300 "
          >
            {" "}
            <FaUser />
          </Link>
        </div>
      </div>
    </header>
  );
}
