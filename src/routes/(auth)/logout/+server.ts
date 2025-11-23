import { redirect } from "@sveltejs/kit";

export async function GET({ cookies, locals }) {
  cookies.delete("wom_token", { path: "/" });
  locals.user = {};
  throw redirect(303, "/login");
}
