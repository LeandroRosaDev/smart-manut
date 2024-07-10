// actions/documentos/document-post-action.ts

"use server";
import { cookies } from "next/headers";
import { url } from "@/functions/url";

export async function documentPostAction(
  formData: FormData
): Promise<{ ok: boolean; message: string }> {
  try {
    const token = cookies().get("token")?.value;
    const response = await fetch(url + "/wp-json/api/servico", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to send document");
    }

    return { ok: true, message: "Document sent successfully" };
  } catch (error) {
    console.error("Erro durante o envio:", error);
    throw error;
  }
}
