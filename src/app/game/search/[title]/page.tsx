import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GameProps } from "@/utils/types/games";

import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";

export async function GetGames(title: string) {
  try {
    const encodedTitle = encodeURIComponent(title.trim());
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=games&title=${encodedTitle}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const games = await res.json();
    console.log("Resposta da API:", games);

    const normalizedTitle = title.trim().toLowerCase().replace(/\s+/g, "");

    console.log("Título normalizado da busca:", normalizedTitle);

    const filteredGames = games.filter((game: GameProps) => {
      const normalizedGameTitle = game.title.toLowerCase().replace(/\s+/g, "");

      console.log(
        `Título do jogo: ${game.title}, Normalizado: ${normalizedGameTitle}`
      );
      return normalizedGameTitle.includes(normalizedTitle);
    });

    console.log("Jogos filtrados:", filteredGames);
    return filteredGames;
  } catch (error) {
    console.error("Failed to fetch data", error);
    return null;
  }
}

export default async function Search({
  params: { title },
}: {
  params: { title: string };
}) {
  const games: GameProps[] = await GetGames(title);
  console.log("Jogos encontrados:", games);
  console.log(
    `URL chamada: ${process.env.NEXT_API_URL}/next-api/?api=games&title=${title}`
  );

  return (
    <main className="w-full">
      <Container>
        <Input />
        <h1 className="my-8 text-xl font-bold">
          Veja o que encontramos na nossa base:
        </h1>
        {!games && <p>Nenhum jogo foi encontrado para "{title}".</p>}

        <section className="w-full gap-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {games &&
            games.map((game) => (
              <Link
                href={`/game/${game.id}`}
                key={game.id}
                className="bg-zinc-100 flex flex-col px-2 py-2 rounded-lg justify-center text-center transition-transform transform hover:scale-105 duration-300"
              >
                <img
                  src={game.image_url}
                  alt={game.title}
                  className="rounded-lg hover:opacity-40 mb-2 items-center"
                />
                <div className="flex justify-between px-2">
                  <h3 className="text-slate-600 truncate w-full">
                    {game.title}
                  </h3>
                  <BiRightArrowCircle size={20} className="mt-1" />
                </div>

                <BorderBeam size={50} duration={10} delay={13} />
              </Link>
            ))}
        </section>
      </Container>
    </main>
  );
}
