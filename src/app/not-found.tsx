"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-slate-100 rounded-2xl p-6 h-[1000px] flex flex-col justify-between">
      <h1 className="text-3xl mb-12">
        Ops... O conteúdo que você buscava não está mais disponível
      </h1>
      <Link href={"/"} className="text-4xl font-bold  mb-48">
        Voltar
      </Link>
    </section>
  );
}
