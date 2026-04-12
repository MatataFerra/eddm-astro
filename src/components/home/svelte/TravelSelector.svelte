<script lang="ts">
  import NeoButton from '@/components/share/svelte/NeoButton.svelte';
  import { allArticles, selectedMonth } from '@/lib/store/travel';
  import { cn } from '@/lib/utils';

  interface Props {
    class?: string;
  }

  let { class: className = '' } = $props();

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
</script>

<div data-slot="travel-selector" class={cn(`z-2 mb-10 flex flex-wrap gap-3`, className)}>
  {#each mesesAMostrar as mes}
    <NeoButton
      onclick={() => selectedMonth.set(mes)}
      active={$selectedMonth === mes}
      type="button"
      size="lg"
    >
      {mes === 'context' ? 'Prólogo' : mes}
    </NeoButton>
  {/each}
</div>
