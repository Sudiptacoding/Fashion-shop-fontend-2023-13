import React, { useContext, useEffect, useState } from 'react';
import { UserProvider } from '../context/Usercontext';
import Header from '../components/Header';
import StarRatings from 'react-star-ratings';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

const MyCard = () => {
    const { currentUser } = useContext(UserProvider)
    const [selectCard, setSelectCard] = useState([])

    useEffect(() => {
        fetch(`https://backend-etwzz54rd-sudiptacoding.vercel.app/card/${currentUser?.email}`)
            .then((response) => response.json())
            .then((json) => {
                setSelectCard(json)
            });
    }, [])

    const handelCardDelet = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "To delete this item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://backend-etwzz54rd-sudiptacoding.vercel.app/card/${id}`, {
                    method: 'DELETE',
                })
                    .then((response) => response.json())
                    .then((json) => {
                        if (json.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const deletItem = selectCard.filter(item => item._id !== id)
                            setSelectCard(deletItem)
                        }
                    });
            }
        })
    }

    return (
        <div>
            <div className='bg-black'><Header></Header></div>
            <div className='pt-10'>
                {
                    selectCard.length > 0 ? <div className='grid 2xl:px-32 xl:grid-cols-2 xl:px-5 gap-6  grid-cols-1 px-10'>
                        {
                            selectCard?.map((item) => {
                                return <section class=" antialiased relative">
                                    <article
                                        class=" flex flex-wrap md:flex-nowrap shadow-lg  group  transform duration-500 hover:-translate-y-1">
                                        <img class="w-full max-h-[283px] object-cover md:w-52" src={item?.image} alt="" />
                                        <div class="">
                                            <div class="px-5">
                                                <h1 class="text-2xl font-semibold text-gray-800 mt-4">
                                                    {item?.name}
                                                </h1>
                                                <p class="text-xl text-gray-400 mt-2 leading-relaxed">
                                                    {item?.discription.slice(0, 150)}
                                                </p>
                                            </div>
                                            <div class="bg-blue-50 p-5">
                                                <div class="sm:flex sm:justify-between">
                                                    <div>
                                                        <div class="text-lg text-gray-700">
                                                            <span class="text-gray-900 font-bold">${item?.price} price for a {item?.select} product</span>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <div class="flex">
                                                                <StarRatings
                                                                    rating={parseFloat(item?.rating)}
                                                                    starDimension="15px"
                                                                    starSpacing="1px"
                                                                    starRatedColor="#16A349"
                                                                />
                                                            </div>
                                                            <div class="text-gray-600 ml-2 text-sm md:text-base mt-1">
                                                                {item?.rating} reviews
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button onClick={() => swal("Good job!", "You sucessfully buy this product !", "success")} class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                                                        Buy now
                                                    </button>
                                                </div>
                                                <div class="mt-3 text-gray-600 text-sm md:text-sm">
                                                    {item?.type}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <span onClick={() => handelCardDelet(item._id)} className='absolute top-0 cursor-pointer right-0 text-[17px] font-extrabold text-white bg-black rounded-full px-2 py-[2px]'>X</span>
                                </section>
                            })
                        }
                    </div> : <div className='flex items-center justify-center lg:h-[90vh] h-auto'><p className='text-2xl font-bold text-black'>No Card Add Here</p></div>
                }
            </div>
        </div>
    );
};

export default MyCard;