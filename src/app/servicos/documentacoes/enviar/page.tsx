// pages/servicos.tsx
import { Data } from "@/componentes/Helpers/Data";
import { Metadata } from "next";
import PostDocuments from "@/componentes/Servicos/Documentacoes/PostDocuments";

export const metadata: Metadata = {
  title: "Portal Altuori | Serviços",
};

export default async function EnviarDocumentacoesPage() {
  return (
    <main className="bg-slate-100 rounded-2xl p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-start mb-2">Serviços</h1>
      <Data />
      <h1 className="text-2xl font-bold mb-2">Documentações</h1>
      <div className="flex flex-col gap-4 mb-10">
        <PostDocuments />
      </div>
    </main>
  );
}
