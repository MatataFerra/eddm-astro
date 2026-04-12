<script lang="ts">
  import Box from '@/components/share/svelte/Box.svelte';
  import { APP_ROUTER } from '@/lib/constants';
  import type { ContentNavigate } from '@/lib/interfaces/share';
  import TaleCard from '@/components/home/svelte/TaleCard.svelte';

  let { tales } = $props<{ tales: ContentNavigate[] }>();

  const featuredTales = $derived(tales?.slice(0, 2) ?? []);
</script>

<Box class="grid h-full grid-rows-[auto_1fr_auto] border-2 bg-white p-8">
  <div class="mb-8 flex items-end justify-between">
    <h2 class="font-display text-5xl leading-none font-black uppercase italic">Relatos</h2>
  </div>

  <div class="flex flex-col gap-8">
    {#each featuredTales as tale}
      <TaleCard {tale} />
    {/each}
  </div>
  <a
    href={APP_ROUTER.TALES}
    class="decoration-brand-cyan font-mono text-xs font-bold underline decoration-4"
  >
    VER ARCHIVO COMPLETO (ALL {tales?.length})
  </a>
</Box>
