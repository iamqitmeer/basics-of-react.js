function Cart({ title, description, category, price, image }) {
    return <div className="m-4">
        <div className="w-[400px] rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="h-56 w-full">
                <a href="#">
                    <img
                        className="mx-auto h-full dark:hidden"
                        src={image}
                        alt=""
                    />
                    <img
                        className="mx-auto hidden h-full dark:block"
                        src={image}
                        alt=""
                    />
                </a>
            </div>
            <div className="pt-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {" "}
                        Up to 35% off{" "}
                    </span>
                    <div className="flex items-center justify-end gap-1">
                        <button
                            type="button"
                            data-tooltip-target="tooltip-quick-look"
                            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only"> Quick look </span>
                            <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                />
                                <path
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                        </button>
                        <div
                            id="tooltip-quick-look"
                            role="tooltip"
                            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                            data-popper-placement="top"
                        >
                            Quick look
                            <div className="tooltip-arrow" data-popper-arrow="" />
                        </div>
                        <button
                            type="button"
                            data-tooltip-target="tooltip-add-to-favorites"
                            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only"> Add to Favorites </span>
                            <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                />
                            </svg>
                        </button>
                        <div
                            id="tooltip-add-to-favorites"
                            role="tooltip"
                            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                            data-popper-placement="top"
                        >
                            Add to favorites
                            <div className="tooltip-arrow" data-popper-arrow="" />
                        </div>
                    </div>
                </div>
                    
                <span

                    className="text-lg font-semibold leading-tight text-gray-900"
                >
                    {title}
                </span>


                <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        ${Math.floor(price)}
                    </p>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="-ms-2 me-2 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                            />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>

}

export default Cart