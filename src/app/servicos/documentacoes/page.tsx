// pages/servicos.tsx
import { Data } from "@/componentes/Helpers/Data";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portal Altuori | Serviços",
};

export default async function DocumentacoesPage() {
  return (
    <main className="bg-slate-100 rounded-2xl p-6 ">
      <h1 className="text-3xl font-bold text-start mb-2 ">Serviços</h1>
      <Data />
      <h1 className="text-2xl font-bold mb-2">Documentações</h1>
      <div className="flex flex-col gap-4 min-h-screen mb-10">
        <Link
          href="/servicos/documentacoes/enviar"
          className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex flex-col items-center">
            <Image
              src="/assets/img/servicos/servico-3.png"
              width={80}
              height={80}
              alt="icone"
            />

            <p className="text-gray-700 text-center mt-2">
              Envie seus documentos de forma simples e segura através da nossa
              plataforma.
            </p>
            <p className="text-black font-bold mt-4 text-2xl">Enviar</p>
          </div>
        </Link>
        <Link
          href="/servicos/documentacoes/pesquisar"
          className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex flex-col items-center">
            <Image
              src="/assets/img/servicos/servico-5.png"
              width={80}
              height={80}
              alt="icone"
            />

            <p className="text-gray-700 text-center mt-2">
              Encontre rapidamente os documentos relacionados ao seu caso
              utilizando nossa ferramenta de pesquisa.
            </p>
            <p className="text-black font-bold mt-4 text-2xl">Pesquisar</p>
          </div>
        </Link>
        <Link
          href="/servicos/solicitacoes"
          className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex flex-col items-center">
            <Image
              src="/assets/img/servicos/servico-4.png"
              width={80}
              height={80}
              alt="icone"
            />

            <p className="text-gray-700 text-center mt-2">
              Faça ajustes e correções nos seus documentos diretamente na nossa
              plataforma.
            </p>
            <p className="text-black font-bold mt-4 text-2xl">Editar</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
