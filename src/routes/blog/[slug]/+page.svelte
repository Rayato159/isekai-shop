<script lang="ts">
    import type { IBlog } from '../../../lib/blog.interface';
    export let data: IBlog;
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>