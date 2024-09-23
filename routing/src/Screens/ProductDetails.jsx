import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Products'

function ProductDetails() {
    let [data, setData] = useState([])

    let params = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`).then(res => res.json()).then(data => setData(data))
    }, [])

    console.log(data);

    return (
        <>
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
              {data &&   <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <div
                            aria-roledescription="carousel"
                            className="relative w-[full]"
                            role="region"
                        >
                            <div
                                aria-roledescription="slide"
                                className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                                role="group"
                            >
                                <img
                                    src={data.image}
                                    width={800}
                                    height={600}
                                    alt="Product Image 1"
                                    className="aspect-[4/3] w-full rounded-lg object-cover"
                                />
                            </div>

                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-1">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold">{data.title}</h1>
                            <p className="text-muted-foreground">
                                {data.description}
                            </p>
                            <div className="space-y-2">
                                <p>{data.category}</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold">Pricing</h2>
                                <p className="text-2xl font-bold">${data.price}</p>
                            </div>
                            <button className="inline-flex bg-orange-700 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange text-orange-foreground hover:bg-orange/90 h-11 rounded-md px-8">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>}

            </div>
        </>

    )
}

export default ProductDetails