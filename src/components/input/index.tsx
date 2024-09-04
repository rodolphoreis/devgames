"use client";

import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

export function Input() {
  const [input, setInput] = useState("");

  const handleInputChange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInput("");

    console.log(input);
  };
  return (
    <form onSubmit={handleInputChange}>
      <div className="flex items-center bg-zinc-200 px-5 py-2 mt-5 rounded-xl">
        <input
          name="input"
          value={input}
          type="text"
          placeholder="Buscar jogos..."
          className="w-full  bg-zinc-200 placeholder:text-gray-600 outline-none"
          onChange={(event) => setInput(event.target.value)}
        />

        <button type="submit">
          {""}
          <FaSearch size={20} color="orange" />
        </button>
      </div>
    </form>
  );
}
