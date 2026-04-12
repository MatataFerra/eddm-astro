<script lang="ts">
  import { BOX_BASE_STYLES } from '@/lib/styles';
  import { cn } from '@/lib/utils';
  import type { Snippet } from 'svelte';

  interface Props {
    hasShadow?: boolean;
    class?: string;
    as?: string;
    active?: boolean;
    children?: Snippet;
    [key: string]: any;
  }

  let {
    hasShadow = false,
    class: className = '',
    as: Tag = 'div',
    active = false,
    children,
    ...rest
  } = $props();

  const boxClasses = $derived(
    cn(
      BOX_BASE_STYLES.container,
      hasShadow && BOX_BASE_STYLES.shadow,
      active && BOX_BASE_STYLES.active,
      className
    )
  );
</script>

<svelte:element this={Tag} class={boxClasses} {...rest}>
  {@render children?.()}
</svelte:element>
