<script lang="ts">
  let { emoji, ref = $bindable() } = $props();
</script>

<button
  onclick={() => {
    ref = `${ref} ${emoji}`;
    document.querySelector<HTMLInputElement>("#messagebox")?.focus();
  }}
  class="bg-zinc-800 select-none hover:scale-115 cursor-pointer duration-200 rounded-lg p-2"
  >{emoji}</button
>
