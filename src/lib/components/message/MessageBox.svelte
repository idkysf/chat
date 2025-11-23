<script>
  import { Plus, Send } from "@lucide/svelte";
  let { value = $bindable(), send } = $props();

  let attachmentsPanelShown = $state(true);
  let panelClasslist = $state("");

  $effect(() => {
    panelClasslist = `
        w-48 absolute -translate-y-52 p-3 rounded-xl duration-200
        bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 h-48
        ${attachmentsPanelShown ? "opacity-100" : "invisible opacity-0"}
      `;
  });
</script>

<form
  onsubmit={(e) => {
    e.preventDefault();
    send();
    value = "";
  }}
  class="flex gap-2 items-center"
>
  <div
    class="focus-within:ring-2 duration-200 ring-zinc-100 bg-zinc-900 w-full flex items-center rounded-xl"
  >
    <button
      onclick={() => (attachmentsPanelShown = !attachmentsPanelShown)}
      class="m-2 p-1 hover:bg-zinc-800 duration-200 rounded-lg"
    >
      <Plus size={26} class="hover:rotate-180 duration-300" />
    </button>

    <input
      bind:value
      id="messagebox"
      autocomplete="off"
      type="text"
      placeholder="Type your message here..."
      class="w-full p-2 pl-0 outline-none"
    />
  </div>

  <button
    class="cursor-pointer p-3.5 bg-zinc-100 text-black font-bold rounded-xl flex items-center gap-2"
  >
    <Send size={19} />
  </button>
</form>

<!-- TODO: Add later... AND make it better lol -->
<!-- <div class={panelClasslist}>
  <p class="text-xl font-bold">Upload</p>

  <button
    class="w-full h-fit duration-200 hover:bg-zinc-700/50 p-1 rounded-lg flex items-center gap-2"
  >
    <Image size={20} />
    Image
  </button>
</div> -->
