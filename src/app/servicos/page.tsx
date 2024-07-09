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
              Na [Nome do Escritório], oferecemos soluções jurídicas
              personalizadas para atender às suas necessidades. Nossa equipe de
              advogados especializados está pronta para ajudar em diversas áreas
              do direito, garantindo uma representação eficiente e ética.
              Conheça nossos principais serviços.
            </p>
            <p className="text-black font-bold mt-4">
              Clique aqui para começar.
            </p>
          </div>
        </Link>
        <Link
          href="/servicos/documentacao"
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
              Facilite o andamento do seu caso enviando seus documentos de forma
              segura e prática. Utilize nossa plataforma para enviar e acessar
              todos os documentos necessários, garantindo que sua representação
              legal seja ágil e eficiente.
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
