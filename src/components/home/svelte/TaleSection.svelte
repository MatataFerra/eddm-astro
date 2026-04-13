<script lang="ts">
  import Box from '@/components/share/svelte/Box.svelte';
  import { APP_ROUTER } from '@/lib/constants';
  import type { ContentNavigate } from '@/lib/interfaces/share';
  import TaleCard from '@/components/home/svelte/TaleCard.svelte';

  let { tales } = $props<{ tales: ContentNavigate[] }>();

  const featuredTales = $derived(tales?.slice(0, 4) ?? []);
</script>

<Box class="relative flex h-full flex-col border-2 bg-white p-6 md:p-8">
  <div
    class="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,#000_95%),linear-gradient(0deg,transparent_95%,#000_95%)] bg-[size:20px_20px] opacity-[0.03]"
  ></div>

  <div class="relative z-10 mb-8 flex items-baseline justify-between">
    <h2 class="font-display text-4xl font-black tracking-tighter uppercase italic">
      Relatos <span class="text-brand-green">/</span> Notas
    </h2>
    <div class="bg-main-dark/10 mx-4 h-1 flex-1"></div>
  </div>

  <div class="divide-main-dark/5 z-10 flex flex-col gap-0 divide-y-2">
    {#each featuredTales as tale}
      <TaleCard {tale} />
    {/each}
  </div>

  <a
    href="/relatos"
    class="font-display border-main-dark hover:text-brand-green mt-auto self-end border-b-2 pt-6 text-[10px] font-black uppercase transition-colors"
  >
    Ver Archivo Completo [{tales?.length}]
  </a>
</Box>
