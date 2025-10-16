"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

      </div>
    </div>
  )
}

export default function Home() {
  const [data, setData] = useState<Shoes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://apistore.cybersoft.edu.vn/api/Product");
        const result = await response.json();
        setData(result.content);

      } catch (error) {
        console.error("Error data:", error);
      }
    };
    fetchData();
  }, [])
  const renderShoe = () => {
    return data?.map((item) => {
      return <ShoesComponent key={item.id} shoes={item} />
    })
  };
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
  );
}
