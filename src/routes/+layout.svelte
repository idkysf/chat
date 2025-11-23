<script lang="ts">
  import "../app.css";
  import type { LayoutProps } from "./$types";

  let { children, data }: LayoutProps = $props();

  const user = data?.user;
</script>

<div class="text-gray-200 bg-zinc-950 h-screen">
  <nav class="bg-zinc-900 px-8 py-4">
    <a href="/" class="text-3xl font-bold">Aero</a>
    <p>{user?.name}</p>
  </nav>

  <div class="p-10">
    {@render children()}
  </div>
</div>
