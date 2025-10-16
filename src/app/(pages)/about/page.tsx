import React from 'react'
import Image from "next/image";
import { fetchProducts } from '@/server/actions/productAPI';
import Link from 'next/link';



export const metadata = {
    title: "Shoes App - About",
    description:
        "Explore our wide range of shoes with the best prices and quality.",
    openGraph: {
        title: "Shoes App - About",
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
        title: "Shoes App - Home",
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

type Shoes = {
    id: string,
    name: string,
    sizes: number[],
    alias: string,
    price: number,
    description: string,
    size: string,
    shortDescription: string,
    quantity: number,
    deleted: boolean,
    categories: string,
    relatedProducts: string,
    feature: string,
    image: string,
    imgLink: string,
};
type Props = {
    shoes: Shoes,
}
const ShoesComponent = ({ shoes }: Props) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image
                    className="rounded-t-lg"
                    src={shoes.image}
                    alt={shoes.name}
                    width={500}
                    height={300}
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {shoes.name}
                    </h5>
                </a>
                <Link
                    className='text-blue-700 p-2 rounded bg-red-400 hover:underline'
                    href={`/detail/${shoes.id}`}>
                    Detail
                </Link>
            </div>
        </div>
    )
}


export default async function About() {

    const data = await fetchProducts();
    const renderShoe = () => {
        return data.map((shoe: Shoes) => {
            return <ShoesComponent key={shoe.id} shoes={shoe} />
        })
    }

    return (
        <div className="container mx-auto grid grid-cols-3">
            {renderShoe()}
            {/* <h1> Hello </h1>
      <Image src="https://play-lh.googleusercontent.com/XEReFv_aetLFZq2VCYEUF6cMeHLwJ3eM_WMcjucGKwdKPm8ob1_ghAdltlMwnHMEsQk"
        alt="image name"
        width={500}
        height={300}
      />
      <Image src="/img/image_1.png" alt="" width={500} height={300} /> */}
        </div>
    )
}
