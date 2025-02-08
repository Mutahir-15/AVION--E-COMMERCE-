'use client'
import { Product } from "@/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { addToCart } from "@/app/actions/actions";
import { FaSortDown } from "react-icons/fa6";
import Link from "next/link";
import { FAQ } from "./FAQ";
import Swal from "sweetalert2";

const ProductListings = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts: Product[] = await client.fetch(
                    `
                    *[_type == "product"] {
                        _id,
                        name,
                        description,
                        quantity,
                        price,
                        dimensions,
                        "image_url": image.asset->url,
                    }
                    `
                );
                setProducts(fetchedProducts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="text-center p-2 lg:p-7">Loading...</div>;
    }

    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault();

        Swal.fire({
          position: "center",
          icon: "success",
          title: `${product.name} added to cart!`,
          showConfirmButton: false,
          timer: 1000
        })
        addToCart(product);
    };

    return (
       <section className="max-w-[1440px] mx-auto mb-10 px-4 sm:px-6 lg:px-8">
      {/* Header Image */}
      <div>
        <Image
          src="/images/PLS1.png"
          alt="BG Image"
          width={1440}
          height={209}
          className="w-full"
        />
      </div>

      {/* Filters Section */}
      <div className="flex flex-wrap justify-between items-center gap-6 p-4 bg-gray-50 shadow-md rounded-lg">
        {/* Left Filters */}
        <div className="flex flex-wrap gap-4">
          {["Category", "Sort by", "Price"].map(
            (filter, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white py-2 px-3 rounded-md shadow-sm cursor-pointer hover:bg-gray-100 transition-all"
              >
                <p className="text-gray-700 font-medium">{filter}</p>
                <FaSortDown className="text-gray-500" />
              </div>
            )
          )}
        </div>

        {/* Right Sorting */}
        <div className="flex justify-center items-center gap-3">
          <p className="text-gray-700 font-medium">Sorting by:</p>
          <div className="flex items-center gap-2 bg-white py-2 px-3 rounded-md shadow-sm cursor-pointer hover:bg-gray-100 transition-all">
            <p className="text-gray-700 font-medium">Date added</p>
            <FaSortDown className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {products.map((product) => (
          <Link href={`/product-listings/${product._id}`} key={product._id}>
            <div className="flex flex-col items-start p-4 bg-white shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300 rounded-md">
              <div className="relative w-full h-64">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-800 text-xl mb-2">${product.price}</p>
              <p className="text-sm text-gray-500">
                Quantity: {product.quantity || "N/A"}
              </p>
              <button className="w-full mt-6 sm:mt-8 px-4 py-3 sm:px-10 sm:py-3 bg-customColors-dark-primary text-white font-bold hover:bg-customColors-border-dark hover:text-black transition-colors duration-300 rounded"
              onClick={(e) => handleAddToCart(e, product)}>
            Add to Cart
          </button>
            </div>
          </Link>
        ))}
      </div>
      <FAQ />
    </section>
    );
};

export default ProductListings;