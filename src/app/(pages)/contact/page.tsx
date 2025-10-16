import React from 'react'

export const metadata = {
    title: "Shoes App - Contact",
    description:
        "Explore our wide range of shoes with the best prices and quality.",
    openGraph: {
        title: "Shoes App - Contact",
        description:
            "Explore our wide range of shoes with the best prices and quality.",
        url: "https://shoesshopbc70.vercel.app",
        images: [
            {
                url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
                width: 800,
                height: 600,
                alt: "Shoes App",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Shoes App - Contact",
        description:
            "Explore our wide range of shoes with the best prices and quality.",
        images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
    },
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "Store",
        name: "Shoes App",
        url: "https://yourwebsite.com",
        description:
            "Explore our wide range of shoes with the best prices and quality.",
        image: "https://yourwebsite.com/images/og-image.jpg",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://yourwebsite.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    },
};

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}
