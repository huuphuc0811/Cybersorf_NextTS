import { fetchProductById } from '@/server/actions/productAPI';
import Image from 'next/image';
import React from 'react'

export async function generateMetadata({ params }: any) {
    const prodDetail = await fetchProductById(params.id);

    return {
        title: `${prodDetail.name} - Product Detail`,
        description: prodDetail.description,
        openGraph: {
            title: prodDetail.name,
            description: prodDetail.description,
            url: `https://yourwebsite.com/products/${params.id}`,
            images: [
                {
                    url: prodDetail.image,
                    width: 500,
                    height: 500,
                    alt: prodDetail.alias,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: prodDetail.name,
            description: prodDetail.description,
            images: [prodDetail.image],
        },
    };
}


export default async function Detail({ params }: any) {

    const { id } = params;
    console.log(id);

    const data = await fetchProductById(id);
    console.log(data);

    return (
        <div>
            <h1>Detail</h1>
            <h2>{data.name}</h2>
            <Image src={data.image} alt={data.name} width={500} height={500} />
        </div>
    )
}
