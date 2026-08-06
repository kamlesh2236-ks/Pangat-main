import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Pangat POS",
        short_name: "Pangat POS",

        description:
            "Restaurant POS Software with QR Ordering, Billing and Inventory Management.",

        start_url: "/",

        display: "standalone",

        background_color: "#ffffff",

        theme_color: "#ea580c",

        icons: [
            {
                src: "/favicon.svg",
                sizes: "192x192",
                type: "image/svg",
            },

            {
                src: "/favicon.svg",
                sizes: "512x512",
                type: "image/svg",
            },
        ],
    };
}