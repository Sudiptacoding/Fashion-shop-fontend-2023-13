import React, { useContext } from 'react';

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import StarRatings from 'react-star-ratings';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { UserProvider } from '../context/Usercontext';

const SameBrandRelatedData = () => {
    const { currentUser } = useContext(UserProvider)
    const productData = useLoaderData()
    const allProductData = productData.slice(1)
    const location = useLocation()

    if (allProductData.length < 1) {
        return <div>
            <div className='bg-black'><Header></Header></div>
            <div className='flex items-center justify-center h-[80vh]'><h1 className='text-xl font-bold text-black'>Products not available </h1></div>
        </div>
    } else {
        return (
            <div>
                <div className='h-auto card-bg-more'>
                    <Header></Header>
                    {
                        currentUser && <div className='flex items-center justify-center py-16 '><h1 className='text-2xl font-bold text-white'>Welcome to sudipta biswas</h1></div>
                    }
                    <Zoom scale={1.4}>
                        {allProductData?.map((item) => {
                            return <div key={item._id} className='flex items-center justify-center flex-col lg:flex-row w-full lg:h-[80vh]'>
                                <div className="flex items-center justify-start w-full p-5 each-slide-effect lg:w-1/2 lg:pl-52">
                                    <div>
                                        <h2 className="text-sm tracking-widest text-white title-font">BRAND NAME</h2>
                                        <h1 className="mb-3 text-3xl font-medium text-white title-font">{item?.select}</h1>
                                        <h2 className="text-sm tracking-widest text-white title-font">CATEGORY NAME</h2>
                                        <h1 className="mb-3 text-2xl font-medium text-white title-font">{item?.name}</h1>
                                        <div className="flex mb-4">
                                            <StarRatings
                                                rating={parseFloat(item?.rating)}
                                                starDimension="25px"
                                                starSpacing="6px"
                                                starRatedColor="#ffa300"
                                            />
                                            <span className="ml-3 text-white">{item?.rating} Reviews</span>
                                        </div>
                                        <p className="leading-relaxed text-white">{item?.discription}</p>
                                        <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-200">
                                            <Link to={`/moredetails/${item._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Details Product
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full lg:w-1/2'>
                                    <div className="each-slide-effect lg:p-32">
                                        <img className='w-full h-[500px] rounded-lg' src={item?.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        })}
                    </Zoom>
                </div>


                <div className='grid grid-cols-1 gap-5 2xl:py-24 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:px-28'>
                    {
                        allProductData?.map((item, i) => {
                            return <Link to={`/moredetails/${item._id}`} key={item._id} className='hover:shadow-xl'>
                                <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className=" w-full h-[330px] rounded-t-lg" src={item?.image} alt="product image" />
                                    </a>
                                    <div className="px-5 pt-3 pb-5">
                                        <a href="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item?.name}</h5>
                                        </a>
                                        <a href="#">
                                            <h5 className="py-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">Brand : {item?.select}</h5>
                                        </a>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <StarRatings
                                                rating={parseFloat(item?.rating)}
                                                starDimension="20px"
                                                starSpacing="2px"
                                                starRatedColor="#ffa300"
                                            />
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{item?.rating}</span>
                                        </div>
                                        <div className='flex items-center gap-10 pb-5'>
                                            <a href="#">
                                                <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">{item?.type}</h5>
                                            </a>
                                            <span className="text-xl font-bold text-gray-900 dark:text-white">${parseFloat(item?.price)}</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-5">
                                            <Link state={location.pathname} to={`/updeditem/${item._id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Update Product</Link>
                                            <Link to={`/moredetails/${item._id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Details Product</Link>
                                        </div>
                                    </div>
                                </div>

                            </Link>
                        })
                    }
                </div>



            </div>


        );
    }


};

export default SameBrandRelatedData;




