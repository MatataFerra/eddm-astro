<script lang="ts">
  import NeoButton from '@/components/share/svelte/NeoButton.svelte';
  import { allArticles, selectedMonth } from '@/lib/store/travel';
  import { cn } from '@/lib/utils';

  interface Props {
    class?: string;
  }

  let { class: className = '' } = $props();
  let scrollContainer: HTMLDivElement;

  const MONTHS_ORDERED = [
    'context',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
    'enero',
    'febrero-25',
  ];

  const mesesConData = $derived([
    ...new Set($allArticles.map((a) => a.category?.name.toLowerCase())),
  ]);
  const mesesAMostrar = $derived(
    MONTHS_ORDERED.filter((m) => mesesConData.includes(m.toLowerCase()))
  );

  // Función para scrollear manualmente con los botones
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainer) return;
    const scrollAmount = 200;
    scrollContainer.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };
</script>

<div class={cn('group relative z-10 mb-10', className)}>
  <button
    onclick={() => scroll('left')}
    class="border-main-dark absolute top-1/2 -left-4 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border-2 bg-white opacity-0 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all group-hover:opacity-100 active:translate-x-px active:translate-y-px active:shadow-none"
  >
    ←
  </button>

  <div
    bind:this={scrollContainer}
    class="no-scrollbar flex gap-3 scroll-smooth pb-4"
    data-slot="travel-selector-scroll"
  >
    {#each mesesAMostrar as mes}
      <div class="min-w-fit">
        <NeoButton
          onclick={() => selectedMonth.set(mes)}
          active={$selectedMonth === mes}
          type="button"
          size="lg"
        >
          {mes === 'context' ? 'Prólogo' : mes}
        </NeoButton>
      </div>
    {/each}
  </div>

  <button
    onclick={() => scroll('right')}
    class="border-main-dark absolute top-1/2 -right-4 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border-2 bg-white opacity-0 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all group-hover:opacity-100 active:translate-x-px active:translate-y-px active:shadow-none"
  >
    →
  </button>
</div>

<style>
  /* Escondemos la scrollbar pero mantenemos la funcionalidad */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
