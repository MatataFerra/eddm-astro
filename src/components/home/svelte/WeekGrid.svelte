<script lang="ts">
  import { filteredArticles } from '@/lib/store/travel';
  import { fade } from 'svelte/transition';
  import WeekCard from '@/components/home/svelte/WeekCard.svelte';
</script>

<div
  data-slot="week-grid-wrapper"
  class="bg-dots relative z-1 grid h-full grid-cols-1 grid-rows-1 p-4 sm:p-6 lg:p-8"
>
  {#key $filteredArticles.map((a) => a.id).join(',')}
    <div
      in:fade={{ duration: 200, delay: 180 }}
      out:fade={{ duration: 150 }}
      class="mt-8 grid h-auto min-h-100 grid-cols-1 gap-10 self-start sm:grid-cols-2 lg:grid-cols-3"
      style="grid-area: 1 / 1;"
    >
      {#each $filteredArticles as article (article.id)}
        <WeekCard {article} />
      {:else}
        <div
          class="col-span-full flex flex-col p-8 items-center justify-center border-2 border-dashed border-main-dark/30 h-64 bg-white/50"
        >
          <p class="font-mono italic text-gray-500">
            No se encontraron notas... refrescá tu navegador
          </p>
        </div>
      {/each}
    </div>
  {/key}
</div>
