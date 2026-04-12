<script lang="ts">
  import { APP_ROUTER } from '@/lib/constants';
  import type { ContentNavigate } from '@/lib/interfaces/share';

  interface Props {
    tale: ContentNavigate;
  }

  let { tale } = $props();
</script>

<a
  href={`${APP_ROUTER.TALE(tale.slug)}`}
  class="group border-main-dark/10 hover:border-main-dark flex gap-4 border-b-2 pb-4 transition-colors"
>
  <div class="bg-main-dark border-main-dark h-20 w-20 shrink-0 overflow-hidden border-2">
    <img src={tale.header?.url} class="h-full w-full object-cover contrast-150 grayscale" alt="" />
  </div>
  <div>
    <span class="font-mono text-[10px] text-gray-400 uppercase"
      >{new Date(tale.createdAt ?? '').toLocaleDateString()}</span
    >
    <h3
      class="font-display group-hover:text-brand-green text-lg leading-tight font-black uppercase"
    >
      {tale.title}
    </h3>
  </div>
</a>
