// pages/servicos.tsx
import { Data } from "@/componentes/Helpers/Data";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GetDocumentos from "@/componentes/Servicos/Documentacoes/GetDocumentos";

export const metadata: Metadata = {
  title: "Portal Altuori | Serviços",
};

export default async function PesquisarDocumentacoesPage() {
  return (
    <main className="bg-slate-100 rounded-2xl p-6 ">
      <h1 className="text-3xl font-bold text-start mb-2 ">Serviços</h1>
      <Data />
      <h1 className="text-2xl font-bold mb-2">Pesquisar Documentações</h1>
      <GetDocumentos />
    </main>
  );
}
