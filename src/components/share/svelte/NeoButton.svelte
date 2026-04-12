<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '@/lib/utils';
  import type { Snippet } from 'svelte';

  // Definimos los tipos de tamaños disponibles
  type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

  interface Props {
    active?: boolean;
    href?: string;
    class?: string;
    size?: ButtonSize;
    type?: HTMLButtonAttributes['type'];
    children?: Snippet;
    [key: string]: any;
  }

  let {
    active = false,
    href = undefined,
    class: className = '',
    size = 'md',
    type,
    children,
    ...rest
  } = $props();

  const sizeClasses = {
    sm: 'px-3 py-1 text-[10px] border-2 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]',
    md: 'px-5 py-2 text-xs border-4 shadow-[5px_5px_0px_0px_rgba(26,26,26,1)]',
    lg: 'px-8 py-3 text-sm border-4 shadow-[7px_7px_0px_0px_rgba(26,26,26,1)]',
    xl: 'px-10 py-4 text-lg border-[6px] shadow-[10px_10px_0px_0px_rgba(26,26,26,1)]',
  };

  const baseClasses = $derived(
    cn(
      'font-display border-main-dark transition-all inline-block text-center cursor-pointer font-black tracking-tight uppercase',
      sizeClasses[size as ButtonSize],
      active
        ? 'bg-main-dark text-white translate-x-0.75 translate-y-0.75 shadow-none'
        : 'text-main-dark bg-white hover:-translate-y-1 active:translate-y-0 active:translate-x-0 active:shadow-none',
      className
    )
  );
</script>

{#if href}
  <a {href} class={baseClasses} {...rest}>
    {@render children?.()}
  </a>
{:else}
  <button type={type ?? 'button'} class={baseClasses} {...rest}>
    {@render children?.()}
  </button>
{/if}
