"use client";
import React from "react";
import { ProductsData, ProductCategory } from "./ProductsData";
import Image from "next/image";

const ProductsMenuContent = () => {
  const categories = Object.keys(ProductsData) as ProductCategory[];

  return (
    <section className="w-full bg-[#f4f2ee] text-[#0F172A] px-4 md:px-16 py-24 scroll-smooth">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar kategori */}
        <aside className="w-full md:w-1/5 md:sticky md:top-24 z-10 bg-[#f4f2ee]">
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category}>
                <a
                  href={`#${category.replace(/\s+/g, "-")}`}
                  className="cursor-pointer font-semibold block hover:text-green-600 transition-colors"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Konten produk */}
        <div className="w-full md:w-4/5 space-y-16">
          {categories.map((category) => (
            <div key={category} id={category.replace(/\s+/g, "-")}>
              <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
                {category}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {ProductsData[category].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex bg-white rounded-lg shadow hover:scale-[1.02] transition-transform duration-200 overflow-hidden"
                  >
                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <h3 className="text-lg font-semibold text-[#3D2B1F]">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#4B3A2F]">{item.desc}</p>
                      <p className="text-green-600 font-semibold text-sm">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsMenuContent;
