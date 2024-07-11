// pages/duvidas.tsx

import { Data } from "@/componentes/Helpers/Data";
import Link from "next/link";
import Image from "next/image";

export default function duvidasPage() {
  return (
    <section className="bg-slate-100 rounded-2xl p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-start mb-2">Dúvidas</h1>
      <Data />
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Posso te ajudar? 🤔</h1>
        <p className="text-gray-700">
          Nossa página de dúvidas frequentes foi criada para fornecer respostas
          claras e concisas às perguntas mais comuns, garantindo que você tenha
          as informações de que precisa ao seu alcance.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/perguntas">
          <div className="flex items-center p-4 bg-[#FFE7EE] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-black">
            <Image
              src="/assets/img/duvidas/msg.svg"
              alt="icon pergunta"
              width={20}
              height={20}
              className="mr-4"
            />
            <span className="text-lg font-medium">Perguntas</span>
          </div>
        </Link>
        <Link href="/contato">
          <div className="flex items-center p-4 bg-[#F4F1FF] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-black">
            <Image
              src="/assets/img/duvidas/mobile.svg"
              alt="icon contato"
              width={20}
              height={20}
              className="mr-4"
            />
            <span className="text-lg font-medium">Contato</span>
          </div>
        </Link>
        <Link href="/consultores">
          <div className="flex items-center p-4 bg-[#FFF1E4] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-black">
            <Image
              src="/assets/img/duvidas/monitor.svg"
              alt="icon consultores"
              width={20}
              height={20}
              className="mr-4"
            />
            <span className="text-lg font-medium">Consultores</span>
          </div>
        </Link>
        <Link href="/minhas-duvidas">
          <div className="flex items-center p-4 bg-[#DEDEDE] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-black">
            <Image
              src="/assets/img/duvidas/user.svg"
              alt="icon minhas duvidas"
              width={20}
              height={20}
              className="mr-4"
            />
            <span className="text-lg font-medium">Minhas Dúvidas</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
