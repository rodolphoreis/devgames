import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col w-full justify-center items-center  gap-4"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <h2 className="text-slate-700 font-bold text-xl">
        Opsss..Página não encontrada =/
      </h2>

      <Link
        href="/"
        className="rounded-lg bg-gray-400 px-8 py-2 text-white hover:bg-gray-900"
      >
        Retornar a Home
      </Link>
    </div>
  );
}
