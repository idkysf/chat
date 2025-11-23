import type { PageLoad } from "./$types";
import axios from "axios";

export const load: PageLoad = async () => {
  const res = await axios.get("https://spy.aeroium.cloud/api/messages");
  if (res.status !== 200) return { messages: [] };

  const messages = res.data;

  return { messages };
};
