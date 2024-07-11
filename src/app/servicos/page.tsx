// pages/servicos.tsx
import { Data } from "@/componentes/Helpers/Data";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portal Altuori | Serviços",
};

export default async function ServicosPage() {
  return (
    <main className="bg-slate-100 rounded-2xl p-6 ">
      <h1 className="text-3xl font-bold text-start mb-2 ">Serviços</h1>
      <Data />
      <div className="flex flex-col gap-4 min-h-screen mb-10">
        <Link
          href="/servicos/solicitacoes"
          className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex flex-col items-center">
            <Image
              src="/assets/img/servicos/servico-1.png"
              width={80}
              height={80}
              alt="icone"
            />
            <h1 className="text-xl font-semibold mt-4 border-b border-gray-300 pb-1">
              Acompanhe suas Solicitações
            </h1>
            <p className="text-gray-700 text-center mt-2">
              Acompanhe em tempo real suas solicitações e seus serviços
              contratados ou veja o andamento dos seus processos jurídicos.
            </p>
            <p className="text-black font-bold mt-4">
              Clique aqui para começar.
            </p>
          </div>
        </Link>
        <Link
          href="/servicos/documentacoes"
          className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex flex-col items-center">
            <Image
              src="/assets/img/servicos/servico-2.png"
              width={80}
              height={80}
              alt="icone"
            />
            <h1 className="text-xl font-semibold mt-4 border-b border-gray-300 pb-1">
              Verifique suas Documentações
            </h1>
            <p className="text-gray-700 text-center mt-2">
              Envie, edite e acompanhe toda a documentação necessário para os
              seus processos e serviços do portal altuori.
            </p>
            <p className="text-black font-bold mt-4">
              Clique aqui para começar.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
