import type { ISectionDatum } from "../../../lib/section.interface"
import { load as layoutLoad } from "../+layout"

import { error } from "@sveltejs/kit";

export function load({ params }: { params: {slug: string} }): ISectionDatum {
    const sections = layoutLoad().sections
    const section: ISectionDatum | undefined = sections.find((section: ISectionDatum) => params.slug === section.slug)
    
    if (!section) {
        throw error(404, "Not found");
    }
    return section
}