import { redirect, type Handle } from "@sveltejs/kit";
import axios from "axios";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.user = {};

  const session = event.cookies.get("wom_token");

  if (session) {
    try {
      const res = await axios.get("https://api.wasteof.money/session", {
        headers: {
          Authorization: session,
        },
      });

      event.locals.user.name = res.data.user.name;
    } catch (error) {
      console.error("ERR", error);
      event.locals.user = {};
    }
  } else {
    event.locals.user = {};
  }

  console.log(event.locals);

  if (event.url.pathname.startsWith("/app") && !event.locals.user.name) {
    throw redirect(303, "/login");
  }

  if (event.url.pathname.startsWith("/login") && event.locals.user.name) {
    throw redirect(303, "/app");
  }

  return await resolve(event);
};
