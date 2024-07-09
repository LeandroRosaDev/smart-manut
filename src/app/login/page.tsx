// pages/login.tsx
import Login from "@/componentes/Login/Login";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Login</h1>
      <Login />
      <div className="mt-4 space-y-2">
        <Link href="/login/recuperar" className="text-blue-500 hover:underline">
          Esqueceu a senha?
        </Link>
        <Link href="/login/cadastrar" className="text-blue-500 hover:underline">
          Cadastre-se
        </Link>
      </div>
    </section>
  );
}
