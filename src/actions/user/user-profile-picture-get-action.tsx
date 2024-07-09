"use server";

import { cookies } from "next/headers";
import { url } from "@/functions/url";

export async function profilePictureGetAction() {
  const token = cookies().get("token")?.value;
  const response = await fetch(url + "/wp-json/api/foto", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const foto = await response.json();
  // console.log(foto);

  return { foto };
}
