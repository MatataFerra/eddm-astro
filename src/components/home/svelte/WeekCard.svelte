<script lang="ts">
  import Box from '@/components/share/svelte/Box.svelte';
  import { APP_ROUTER } from '@/lib/constants';
  import type { ContentNavigate } from '@/lib/interfaces/share';

  interface Props {
    article: ContentNavigate;
  }

  let { article } = $props();
</script>

<Box class="group/card flex flex-col overflow-hidden bg-white" hasShadow active>
  <div class="border-main-dark relative h-40 overflow-hidden border-b-4 bg-gray-200">
    {#if article.header?.url}
      <img
        src={article.header.url}
        alt={article.title}
        loading="lazy"
        decoding="async"
        class="h-full w-full object-cover contrast-125 grayscale transition-all duration-500 ease-out group-hover/card:scale-105 group-hover/card:grayscale-0"
      />
    {:else}
      <div class="bg-main-dark/10 flex h-full w-full items-center justify-center">
        <span class="text-xs font-black uppercase opacity-20">No Image</span>
      </div>
    {/if}
    <div
      class="bg-brand-cyan border-main-dark absolute top-2 left-2 border-2 px-2 py-0.5 text-[10px] font-black uppercase"
    >
      {article.category?.name}
    </div>
  </div>
  <div class="flex flex-1 flex-col justify-between p-4">
    <h3 class="font-display mb-4 text-5xl leading-none font-black uppercase">
      {article.title}
    </h3>
    <a
      href={APP_ROUTER.ARTICLE(article.slug)}
      class="border-main-dark hover:bg-brand-green block border-2 py-2 text-center text-xs font-black uppercase transition-colors"
    >
      Leer Semana →
    </a>
  </div>
</Box>
