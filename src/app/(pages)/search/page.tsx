import { fetchProductByKeyword } from '@/server/actions/productAPI';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

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

export default async function Search({ searchParams }: any) {
    const { keyword } = searchParams;

    const product = await fetchProductByKeyword(keyword);

    const renderShoe = () => {
        return product.map((shoe: Shoes) => {
            return <ShoesComponent key={shoe.id} shoes={shoe} />
        })
    }

    return (
        <div className="container mx-auto grid grid-cols-3">
            {renderShoe()}
        </div>
    );
}
