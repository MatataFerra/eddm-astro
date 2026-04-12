<script lang="ts">
  import { cn } from '@/lib/utils';
  import Box from '@/components/share/svelte/Box.svelte';

  interface Props {
    title?: string;
    location?: string;
    date?: string;
    description?: string;
    image?: string;
    class?: string;
  }

  let {
    title = 'MÁS ACÁ EN EL TIEMPO',
    location = 'Sydney, hoy',
    date = '9 ABR',
    description = 'Un respiro verde en la ciudad de cemento.',
    image,
    class: className = '',
  } = $props();
</script>

<Box
  class={cn(
    'bg-brand-cyan group relative flex flex-col gap-4 overflow-hidden border-2 px-2 py-4',
    className
  )}
>
  <h2 class="font-display text-3xl font-black tracking-tighter uppercase italic">
    {title}
  </h2>

  <div class="relative mt-4 mb-6 aspect-square w-full max-w-[320px] self-center">
    <div
      class="border-main-dark absolute inset-0 -translate-x-2 -rotate-3 rounded-sm border-4 bg-white"
    ></div>
    <div
      class="border-main-dark absolute inset-0 translate-x-1 rotate-2 rounded-sm border-4 bg-white"
    ></div>

    <div
      class="border-main-dark absolute inset-0 flex flex-col gap-2 rounded-sm border-4 bg-white p-3 shadow-sm"
    >
      <div class="bg-main-dark border-main-dark relative flex-1 overflow-hidden border-2">
        <img
          src={image}
          alt={description}
          class="h-full w-full object-cover brightness-110 contrast-150 grayscale"
        />
        <div
          class="bg-brand-cyan border-main-dark absolute top-2 right-2 flex h-8 w-8 items-center justify-center border-2"
        >
          <span class="text-[10px] font-black italic">M</span>
        </div>
      </div>

      <div class="flex h-12 items-center justify-center"></div>
    </div>
  </div>

  <div class="relative z-10 -mt-20 ml-4 max-w-[85%] self-start">
    <div
      class="bg-main-dark border-main-dark border-2 p-4 text-white shadow-[4px_4px_0px_rgba(255,255,255,1)]"
    >
      <div class="mb-1 flex items-baseline justify-between gap-4">
        <span class="font-display text-xl font-black tracking-tight uppercase italic">
          {location}:
        </span>
        <span
          class="bg-brand-cyan text-main-dark border-main-dark border px-2 py-0.5 text-xs font-black"
        >
          {date}
        </span>
      </div>
      <p class="font-mono text-sm leading-snug">
        {description}
      </p>
    </div>
  </div>
</Box>
