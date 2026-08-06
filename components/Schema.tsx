export default function Schema() {
    const schema = {
        "@context": "https://schema.org",

        "@type": "SoftwareApplication",

        name: "Pangat POS",

        applicationCategory: "BusinessApplication",

        operatingSystem: "Web",

        url: "https://pangat-main.vercel.app",

        description:
            "Restaurant POS Software with QR Ordering, Billing, Kitchen Display and Inventory.",

        offers: {
            "@type": "Offer",

            price: "0",

            priceCurrency: "INR",
        },

        publisher: {
            "@type": "Organization",

            name: "Pangat POS",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}