<script lang="ts">
  import { APP_ROUTER } from '@/lib/constants';
  import type { ContentNavigate } from '@/lib/interfaces/share';

  interface Props {
    tale: ContentNavigate;
  }

  let { tale }: Props = $props();
</script>

<a
  href={APP_ROUTER.TALE(tale.slug)}
  class="group flex flex-col gap-1 py-4 transition-all hover:pl-2"
>
  <div class="flex items-center justify-between">
    <span class="text-brand-green font-mono text-[9px] font-black tracking-widest uppercase">
      {new Date(tale.createdAt ?? '').toLocaleDateString('es-AR', {
        month: 'short',
        day: '2-digit',
      })}
    </span>
    <span class="font-mono text-[10px] text-gray-300">#{tale.id}</span>
  </div>
  <h3
    class="font-display group-hover:text-main-dark text-lg leading-none font-black uppercase transition-colors"
  >
    {tale.title}
  </h3>
</a>
