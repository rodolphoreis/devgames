export async function GetGames(title: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=games&title=${title}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const games = await res.json();

    return games;
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
  const games = await GetGames(title);

  return (
    <div>
      <h2>Search</h2>
    </div>
  );
}
