<script lang="ts">
  import { cn } from '@/lib/utils';
  import Box from '@/components/share/svelte/Box.svelte';

  interface Props {
    title?: string;
    location?: string;
    date?: Date;
    description?: string;
    image?: string;
    class?: string;
  }

  let {
    title = 'MÁS ACÁ EN EL TIEMPO',
    location = 'Sydney, hoy',
    date = new Date(Date.now()),
    description = 'Un respiro verde en la ciudad de cemento.',
    image,
    class: className = '',
  }: Props = $props();
</script>

<Box
  class={cn(
    'bg-brand-cyan group relative flex h-full flex-col overflow-hidden border-2 p-0!',
    className
  )}
>
  <div class="border-main-dark border-b-4 bg-white/30 p-4">
    <h2 class="font-display text-2xl leading-none font-black tracking-tighter uppercase italic">
      {title}
    </h2>
  </div>

  <div class="bg-main-dark group relative flex-1 overflow-hidden">
    <img
      src={image}
      alt={description}
      class="h-full w-full object-cover opacity-80 brightness-125 contrast-200 grayscale transition-transform duration-700 group-hover:scale-105"
    />

    <div
      class="bg-main-dark border-brand-cyan absolute right-4 bottom-4 left-4 border-2 p-3 shadow-[4px_4px_0px_#000]"
    >
      <p class="font-mono text-sm leading-tight text-white italic">"{description}"</p>
      <div class="text-brand-cyan mb-1 flex items-center justify-end font-mono text-xs">
        {new Date(date ?? '').toLocaleDateString('es-AR', {
          month: 'short',
          day: '2-digit',
        })}
      </div>
    </div>
  </div>
</Box>
