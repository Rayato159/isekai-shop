<script lang="ts">
    import type { ISection } from "../../lib/section.interface";
    export let data: ISection;
</script>

<h1>Settings</h1>

<div class="submenu">
    {#each data.sections as section}
        <a style="padding: 0px 6px 0px 0px;" href="/settings/{section.slug}">{section.title}</a>
    {/each}
</div>

<slot />
