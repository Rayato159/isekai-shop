import type { ISection } from "../../lib/section.interface"

export function load(): ISection {
    return {
        sections: [
            { slug: "profile", title: "Profile" },
            { slug: "notifications", title: "Notifications" },
        ]
    }
}
