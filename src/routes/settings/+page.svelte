<script lang="ts">
    import type { ISection } from "../../lib/section.interface";
    export let data: ISection;
</script>

<h1 style="background-color: aquamarine; padding: 8px 8px 8px 8px;">Settings</h1>

<div class="submenu">
    {#each data.sections as section}
        <a style="padding: 6px 6px 6px 6px;" href="/settings/{section.slug}">{section.title}</a>
    {/each}
</div>

<slot />
