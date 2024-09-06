import Image from "next/image";
import Link from "next/link";

import { LiaGamepadSolid } from "react-icons/lia";

export function Header() {
  return (
    <header className="w-full h-20 px-10 py-0 text-black shadow-xl">
      <div className="h-20 max-w-screen-xl  mx-auto flex justify-between items-center">
        <nav className="flex items-center justify-center gap-8 text-lg">
          <Link href="/">
            <Image
              src={"/logomarca.png"}
              alt="Dev Games"
              width={120}
              height={120}
              quality={100}
              priority
            />
          </Link>
          <Link href="/">Games</Link>
          <Link href="/profile">Perfil</Link>
        </nav>
        <div className="hidden sm:flex">
          <Link
            href="/login"
            className="flex items-center justify-center w-12 h-12 border-2 border-orange-400 rounded-full hover:border-stone-800 transition-colors duration-300 "
          >
            {" "}
            <LiaGamepadSolid size={34} />
          </Link>
        </div>
      </div>
    </header>
  );
}
