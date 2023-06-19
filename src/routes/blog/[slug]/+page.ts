import { error } from "@sveltejs/kit";
import type { IBlog } from "../../../lib/blog.interface"

/** @type {import('./$types').PageLoad} */
export function load({ params }: any): IBlog {
    if (params.slug === "golang-clean-arch") {
        return {
            title: "How to build an Clean Architecture in Golang",
            content: "Hello, Gophers Dev. I just want to show you how to...",
        };
    }

    throw error(404, "Not found");
}
