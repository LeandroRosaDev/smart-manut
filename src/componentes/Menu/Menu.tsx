// components/Menu/Menu.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

import logout from "@/actions/login/logout-action";
import { useUser } from "@/context/context";

export default function Menu() {
  const { isAuthenticated } = useUser();

  const handleLogout = async (event: React.FormEvent) => {
    event.preventDefault();
    await logout();
    window.location.reload();
  };

  return (
    <section className="fixed bottom-0 left-0 right-0 bg-white border-t rounded-t-3xl shadow-lg">
      {isAuthenticated && (
        <nav className="flex justify-around p-4">
          <ul className="flex justify-between gap-4 w-full max-w-md mx-auto">
            <li className="flex flex-col items-center">
              <Image
                src="/assets/icones/painel.svg"
                width={30}
                height={30}
                alt="Icone"
              />
              <Link href="/" className="text-sm">
                Painel
              </Link>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="/assets/icones/servicos.svg"
                width={30}
                height={30}
                alt="Icone"
              />
              <Link href="/servicos" className="text-sm">
                Serviços
              </Link>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="/assets/icones/duvidas.svg"
                width={30}
                height={30}
                alt="Icone"
              />
              <Link href="/duvidas" className="text-sm">
                Dúvidas
              </Link>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="/assets/icones/conta.svg"
                width={30}
                height={30}
                alt="Icone"
              />
              <Link href="/conta" className="text-sm">
                Conta
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
}
