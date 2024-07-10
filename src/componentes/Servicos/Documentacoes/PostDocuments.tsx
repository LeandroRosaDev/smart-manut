// componentes/Servicos/Documentacoes/PostDocuments.tsx

"use client";

import React, { useState } from "react";
import { Button } from "@/componentes/FormComponentes/Button";
import InputFile from "@/componentes/FormComponentes/InputFile";
import { documentPostAction } from "@/actions/documentos/document-post-action";
import SelectInput from "@/componentes/FormComponentes/SelectInput";
import { useUser } from "@/context/context";

export default function PostDocuments() {
  const { user } = useUser();
  const [serviceType, setServiceType] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setServiceType(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await documentPostAction(formData);

      if (response.ok) {
        setAlertMessage(response.message);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Esconde o alerta após 3 segundos
      }
    } catch (error) {
      setAlertMessage("Erro durante o envio");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Esconde o alerta após 3 segundos
      console.error("Erro durante o envio:", error);
    }
  };

  const documentOptions = [
    { value: "", label: "Documentação a ser enviada" },
    {
      value: `${user?.nome} ${user?.sobrenome} rg`,
      label: "Documento de Identidade (RG)",
    },
    ...(serviceType !== "emprestimo-pessoal"
      ? [
          {
            value: `${user?.nome} ${user?.sobrenome} cnh`,
            label: "Documento de Habilitação (CNH)",
          },
        ]
      : []),
    {
      value: `${user?.nome} ${user?.sobrenome} contracheque`,
      label: "Contra-Cheque Atualizado",
    },
    {
      value: `${user?.nome} ${user?.sobrenome} comprovante-residencia`,
      label: "Comprovante de Residência",
    },
    ...(serviceType === "reducao-desconto-consignado"
      ? [
          {
            value: `${user?.nome} ${user?.sobrenome} procuracao`,
            label: "Procuração Advogado",
          },
        ]
      : []),
  ];

  return (
    <div className="relative">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-7 mt-10 items-stretch w-full max-w-md mx-auto"
      >
        <SelectInput
          name="tipo_documento"
          onChange={handleServiceChange}
          options={[
            { value: "", label: "Selecione o tipo de serviço" },
            { value: "emprestimo-consignado", label: "Empréstimo Consignado" },
            { value: "emprestimo-pessoal", label: "Empréstimo Pessoal" },
            {
              value: "reducao-desconto-consignado",
              label: "Redução de desconto consignado",
            },
            { value: "juros-abusivos", label: "Juros Abusivos" },
            {
              value: "portabilidade-emprestimo",
              label: "Portabilidade de Empréstimo",
            },
          ]}
        />
        <SelectInput name="nome" options={documentOptions} />
        <InputFile type="file" name="foto" className="input-file" />
        <Button className="btn">Enviar</Button>
        {showAlert && (
          <div className=" bg-green-500 text-white text-center p-4 rounded-md">
            {alertMessage}
          </div>
        )}
      </form>
    </div>
  );
}
