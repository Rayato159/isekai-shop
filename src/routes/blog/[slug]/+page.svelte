<script lang="ts">
    import type { IBlog } from '../../../lib/blog.interface';
    export let data: IBlog;
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>