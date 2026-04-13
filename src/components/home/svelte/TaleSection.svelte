<script lang="ts">
  import Box from '@/components/share/svelte/Box.svelte';
  import { APP_ROUTER } from '@/lib/constants';
  import type { ContentNavigate } from '@/lib/interfaces/share';
  import TaleCard from '@/components/home/svelte/TaleCard.svelte';

  let { tales } = $props<{ tales: ContentNavigate[] }>();

  const featuredTales = $derived(tales?.slice(0, 4) ?? []);
</script>

<Box class="flex h-full flex-col border-2 bg-white p-8">
  <div class="mb-8 flex items-end justify-between">
    <h2 class="font-display text-5xl leading-none font-black uppercase italic">Relatos</h2>
  </div>

  <div class="z-10 grid grid-cols-2 gap-8 bg-white">
    {#each featuredTales as tale}
      <TaleCard {tale} />
    {/each}
  </div>
  <a href={APP_ROUTER.TALES} class="my-auto self-end font-mono font-bold">
    VER ARCHIVO COMPLETO (ALL {tales?.length})
  </a>
</Box>
