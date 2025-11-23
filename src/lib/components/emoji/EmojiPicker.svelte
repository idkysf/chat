<script lang="ts">
  import Emoji from "./Emoji.svelte";
  import { Plus } from "@lucide/svelte";

  let { emojis = $bindable(), draftedMessage = $bindable() } = $props();
</script>

<div class="space-y-2">
  <p class="text-lg font-semibold">Emojis</p>

  <div class="grid grid-cols-7 gap-2">
    {#each emojis as emoji}
      <Emoji {emoji} bind:ref={draftedMessage} />
    {/each}

    <button
      onclick={() => {
        const emoji = window.prompt("Enter emoji to add:");
        if (!emoji || emoji.length === 0) return alert("Invalid emoji");
        emojis = [...emojis, emoji];
      }}
      class="bg-zinc-800 select-none hover:scale-115 cursor-pointer duration-200 rounded-lg p-2"
    >
      <Plus />
    </button>
  </div>
</div>
