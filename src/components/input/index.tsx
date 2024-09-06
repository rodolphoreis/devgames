"use client";

import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Input() {
  const [input, setInput] = useState("");

  const router = useRouter();
  const notify = () => {
    toast("Wow so easy!", {
      autoClose: 3000,
    });
  };
  const checkGameExists = async (gameName: string): Promise<boolean> => {
    try {
      const response = await fetch(
        "https://sujeitoprogramador.com/next-api/?api=games"
      );
      const games = await response.json();

      const gameFound = games.some(
        (game: { title: string }) =>
          game.title.toLowerCase() === gameName.toLowerCase()
      );

      return gameFound;
    } catch (error) {
      console.error("Erro ao buscar jogos da API", error);
      return false;
    }
  };

  const handleInputChange = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInput("");

    if (input === "") return;
    const gameExists = await checkGameExists(input);

    if (gameExists) {
      router.push(`/game/search/${input}`);
    } else {
      toast.error("Jogo não encontrado. Tente outro jogo.");
      setInput("");
    }
  };

  return (
    <form onSubmit={handleInputChange}>
      <div className="flex items-center bg-zinc-100 px-5 py-2 mt-5 rounded-lg">
        <input
          name="input"
          value={input}
          type="text"
          placeholder="Buscar jogos..."
          className="w-full  bg-zinc-100 placeholder:text-gray-600 outline-none"
          onChange={(event) => setInput(event.target.value)}
        />

        <button type="submit">
          {""}
          <FaSearch size={20} color="orange" />
        </button>
      </div>

      <ToastContainer />
    </form>
  );
}
