import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/games";
import Image from "next/image";
import Link from "next/link";

import { BsArrowRightSquare } from "react-icons/bs";

export async function GetDalygame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 120 } }
    );

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const dalyGame: GameProps = await GetDalygame();
  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center my-4 font-bold md:text-xl md:my-10">
          Separamos um jogo exclusivo para você
        </h1>
        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
                <p className="font-bold text-xl text-white">{dalyGame.title}</p>
                <BsArrowRightSquare size={24} color="#FFF" />
              </div>
              <Image
                src={dalyGame.image_url}
                alt={dalyGame.title}
                priority
                quality={100}
                fill={true}
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
                sizes="(max-width:768px) 100vw, (max-height:1200px) 33vw"
              />
            </div>
          </section>
        </Link>
        <Input />
      </Container>
    </main>
  );
}
