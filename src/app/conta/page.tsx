import { Data } from "@/componentes/Helpers/Data";
import Link from "next/link";
import Image from "next/image";

export default function contaPage() {
  return (
    <section className="bg-slate-100 rounded-2xl p-6 min-h-[1200px]]">
      <h1 className="text-3xl font-bold text-start mb-2">Minha Conta</h1>
      <Data />
      <div className="flex flex-col  min-h-[1000px] mb-10">
        <div className="flex flex-col gap-4">
          <Link
            href="/conta/editar"
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex flex-col items-center">
              <Image
                src="/assets/img/conta/documentos.svg"
                width={80}
                height={80}
                alt="icone"
              />
              <h1 className="text-xl font-semibold mt-4 border-b border-gray-300 pb-1">
                Minhas Informações
              </h1>
              <p className="text-gray-700 text-center mt-2">
                Acesse e gerencie suas informações pessoais e configurações de
                conta. Mantenha seus dados sempre atualizados para garantir um
                atendimento personalizado e eficiente. Visualize e edite as
                informações da sua conta.
              </p>
              <p className="text-black font-bold mt-4">Clique aqui</p>
            </div>
          </Link>
          <Link
            href="/servicos"
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex flex-col items-center">
              <Image
                src="/assets/img/conta/cracha.svg"
                width={80}
                height={80}
                alt="icone"
              />
              <h1 className="text-xl font-semibold mt-4 border-b border-gray-300 pb-1">
                Meus Processos
              </h1>
              <p className="text-gray-700 text-center mt-2">
                Acompanhe de perto o andamento dos seus processos jurídicos.
                Aqui você encontra todas as informações e atualizações sobre
                seus casos, garantindo transparência e facilidade de acesso.
                Visualize seus processos.
              </p>
              <p className="text-black font-bold mt-4">Clique aqui</p>
            </div>
          </Link>
        </div>
        <div className="flex gap-2 mt-4 justify-between">
          <Link
            href="/"
            className="w-[200px] text-center p-4 bg-[#FFE7EE] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-black"
          >
            <p className="text-lg font-medium">Relatar Problema</p>
          </Link>
          <Link
            href="/"
            className="w-[200px] text-center  p-4 bg-[#F4F1FF] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-black "
          >
            <p className="text-lg font-medium text-center">Podemos ajudar?</p>
          </Link>
        </div>
        <div className="flex gap-2 mt-2 justify-between">
          <Link
            href="/"
            className="w-[200px] text-center p-4 bg-[#FFF1E4] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-black"
          >
            <p className="text-lg font-medium">Mudar a senha</p>
          </Link>
          <Link
            href="/"
            className="w-[200px] text-center  p-4 bg-[#DEDEDE] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-black "
          >
            <p className="text-lg font-medium text-center">Política de uso</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
