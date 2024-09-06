import { CardGamesProps } from "@/utils/types/games";
import Link from "next/link";

import { BorderBeam } from "@/components/magicui/border-beam";

export interface CardGamesInterface {
  data: {
    cardGames: CardGamesProps[];
  };
}

export async function CardGames({ data }: CardGamesInterface) {
  if (!data.cardGames || data.cardGames.length === 0) {
    return <p>Nenhum jogo encontrado.</p>;
  }

  return (
    <section className="w-full gap-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {data.cardGames.map((game) => (
        <Link
          href={`/`}
          key={game.id}
          className="bg-zinc-100 flex flex-col px-2 py-2 rounded-lg justify-center text-center transition-transform transform hover:scale-105 duration-300"
        >
          <h3 className="mb-2 text-slate-600">{game.title}</h3>

          <img
            src={game.image_url}
            alt={game.title}
            className="rounded-lg hover:opacity-40"
          />
          <BorderBeam size={50} duration={10} delay={13} />
        </Link>
      ))}
    </section>
  );
}
