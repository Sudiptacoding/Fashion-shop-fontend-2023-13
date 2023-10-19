import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import swal from 'sweetalert';
import { UserProvider } from '../context/Usercontext';

const MoreDetails = () => {
    const { currentUser } = useContext(UserProvider)
    const data = useLoaderData()
    const navigate = useNavigate()
    const handelAddCard = (card) => {
        const data = { name: card.name, email: currentUser.email, discription: card.discription, image: card.image, price: card.price, rating: card.rating, select: card.select, type: card.type }
        fetch('https://backend-etwzz54rd-sudiptacoding.vercel.app/card', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.acknowledged) {
                    swal("Good job!", `${card?.name} sucessfully add your card`, "success");
                    navigate('/')
                }
            });
    }

    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-800">
                <div className="flex items-center justify-center w-full h-auto p-10 mx-auto  2xl:w-3/4 2xl:h-screen">
                    <div className="flex flex-col items-center -mx-4 md:flex-row">
                        <div className="md:flex-1 lg:px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="object-cover w-full h-full" src={data?.image} alt="Product Image" />
                            </div>
                            <div className="flex mb-4 -mx-2">
                                <div className="w-1/2 px-2">
                                    <button onClick={() => handelAddCard(data)} className="w-full px-4 py-2 font-bold text-white bg-gray-900 rounded-full dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <Link to='/'><button className="w-full px-4 py-2 font-bold text-gray-800 bg-gray-400 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">Go to home</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 md:flex-1">
                            <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">Product Name</h2>
                            <p className="mb-4 text-xl text-gray-600 dark:text-gray-300">
                                {data?.name}
                            </p>
                            <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">Brand Name</h2>
                            <p className="mb-4 text-gray-600 dark:text-gray-300 text-md">
                                {data?.select}
                            </p>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="text-xl font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                    <span className="text-gray-600 dark:text-gray-300"> $ {data?.price}</span>
                                </div>
                                <div>
                                    <span className="text-xl font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                    <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                </div>
                            </div>
                            <div className="flex items-center mt-2.5 mb-5">
                                <StarRatings
                                    rating={parseFloat(data?.rating)}
                                    starDimension="20px"
                                    starSpacing="2px"
                                    starRatedColor="#ffa300"
                                />
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{data?.rating}</span>
                            </div>
                            <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">Product type</h2>
                            <p className="mb-4 text-gray-600 dark:text-gray-300 text-md">
                                {data?.type}
                            </p>
                            <div>
                                <span className="text-xl font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
                                    {data?.discription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreDetails;