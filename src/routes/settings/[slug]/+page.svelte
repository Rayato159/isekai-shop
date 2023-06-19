<script lang="ts">
    import type { ISectionDatum } from "../../../lib/section.interface"
    export let data: ISectionDatum;
</script>

<h1>{data.title}</h1>
<p>{data.slug}</p>