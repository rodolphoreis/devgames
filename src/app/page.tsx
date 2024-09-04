import { Container } from "@/components/container";
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

  const dalyGame: GameProps = await GetDalygame();
  return (
    <>
      <h1>Dev Games</h1>
    </>
  );
}
