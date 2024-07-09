"use client";

import { loginAction } from "@/actions/login/login-action";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      await loginAction(formData);
      window.location.reload();
    } catch (error) {
      alert("Falha no login. Por favor, tente novamente.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-sm p-4 bg-white rounded shadow-md"
    >
      <input
        className="p-2 mb-4 border rounded"
        placeholder="Insira seu nome ou e-mail"
        name="username"
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        className="p-2 mb-4 border rounded"
        placeholder="Insira sua senha"
        name="password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
        Entrar
      </button>
    </form>
  );
}
