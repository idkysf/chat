import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  // if (event.url.pathname.startsWith("/app") && !event.locals.user) {
  //   throw redirect(303, "/login");
  // }

  // if (event.url.pathname.startsWith("/login") && event.locals.user) {
  //   throw redirect(303, "/app");
  // }

  return await resolve(event);
};
