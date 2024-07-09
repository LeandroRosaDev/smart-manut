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
            <li>
              <Link href="/" className="text-sm flex flex-col items-center">
                <Image
                  src="/assets/icones/painel.svg"
                  width={30}
                  height={30}
                  alt="Icone"
                />
                Painel
              </Link>
            </li>
            <li>
              <Link
                href="/servicos"
                className="text-sm flex flex-col items-center"
              >
                <Image
                  src="/assets/icones/servicos.svg"
                  width={30}
                  height={30}
                  alt="Icone"
                />
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/duvidas"
                className="text-sm flex flex-col items-center"
              >
                <Image
                  src="/assets/icones/duvidas.svg"
                  width={30}
                  height={30}
                  alt="Icone"
                />
                Dúvidas
              </Link>
            </li>
            <li>
              <Link
                href="/conta"
                className="text-sm flex flex-col items-center"
              >
                <Image
                  src="/assets/icones/conta.svg"
                  width={30}
                  height={30}
                  alt="Icone"
                />
                Conta
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
}
