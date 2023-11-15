import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function InternshipCategory({category}) {
  return (
        <div className="flex flex-col  justify-center lg:w-5/5 ">
        <Link
          href={`/kategori/${category.link}`}
          className="w-full lg:w-5/5 aspect-video rounded-sm border border-opacity-40	border-gray-400 overflow-clip select-none"
        >
          <div className="relative w-full h-full">
              <Image
              src={`${category.image}`}
              alt={"ga"}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              />
          </div>
        </Link>
    
        <h1 className="text-2xl font-bold">{category.title}</h1>
        <div className="flex gap-2 w-full justify-between text-sm text-gray-400">
          <h3>kategori</h3>
        </div>
        <p className="py-4">{category.description}</p>
      </div>
  )
}
