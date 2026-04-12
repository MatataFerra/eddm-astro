<script lang="ts">
  import type { ContentNavigate } from '@/lib/interfaces/share';
  import { allArticles } from '@/lib/store/travel';
  import { onMount } from 'svelte';

  export let articles: ContentNavigate[];

  onMount(() => {
    allArticles.set(articles);
  });
</script>
