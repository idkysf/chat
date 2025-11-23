import type { PageServerLoad } from "./$types";
import axios from "axios";

export const load: PageServerLoad = async ({ cookies }) => {
  const res = await axios.get("https://spy.aeroium.cloud/api/messages");
  if (res.status !== 200) return { messages: [] };

  const messages = res.data;
  const token = cookies.get("wom_token") ?? "";

  return { messages, token };
};
