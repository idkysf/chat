<script>
  import { goto } from "$app/navigation";
  import { ExternalLink } from "@lucide/svelte";
</script>

<main class="space-y-4">
  <span class="flex items-center">
    <h1 class="text-6xl font-bold">aero</h1>
    <sup class="text-lg">(beta)</sup>
  </span>
  <p>revolutionize your chat experience, with aero.</p>

  <button
    onclick={() => goto("/app")}
    class="w-fit cursor-pointer p-3 bg-zinc-100 text-black font-bold rounded-xl flex items-center gap-2"
  >
    <ExternalLink size={22} />
    Launch
  </button>
</main>
