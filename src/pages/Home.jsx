import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import BrandLogoSlide from '../components/BrandLogoSlide';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Footer from '../components/Footer';

const Home = () => {
    const [card, setCard] = useState([])
    const [allItem, setAllItem] = useState([])
    const [seeall, setSeeAll] = useState(true)


    useEffect(() => {
        fetch('https://backend-etwzz54rd-sudiptacoding.vercel.app/item')
            .then((response) => response.json())
            .then((json) => {
                const brand = json.map(item => item.select)
                const uniqueValues = [...new Set(brand)];
                const newArr = []
                for (const item of uniqueValues) {
                    const matchdata = json.find(i => i.select === item)
                    newArr.push(matchdata)
                }
                setCard(newArr)
                const newArray = json.filter(item => !newArr.includes(item))
                setAllItem(newArray)
            });
    }, [])

    return (
        <div id='top' className='Lato'>
            <div className='banner-bg'>
                <Header></Header>
                <div className='flex items-center justify-center h-[70vh]'>
                    <div className='text-right'>
                        <h1 className='text-5xl Rancho'> Raining Offers For <br /> Hot Summer !</h1>
                        <p className='py-3 text-xl Lato'>25% Off On All Products</p>
                        <button onClick={() => (document.getElementById('card').scrollIntoView({ behavior: "smooth" }))} className='px-4 py-2 mr-3 text-sm font-bold text-black duration-150 bg-white border hover:bg-black hover:text-white hover:border-black ' >SHOP NOW</button>
                        <button onClick={() => (document.getElementById('findmore').scrollIntoView({ behavior: "smooth" }))} className='px-4 py-2 text-sm font-bold text-white duration-150 bg-transparent border hover:bg-white hover:text-black hover:border-white'>FIND MORE</button>
                    </div>
                </div>
            </div>

            {/* slider logo */}
            <div className='w-3/4 py-10 mx-auto overflow-hidden'>
                <BrandLogoSlide></BrandLogoSlide>
            </div>

            <div id='findmore' className='grid w-full grid-cols-1 gap-5 px-5 py-20 mx-auto lg:grid-cols-3 md:grid-cols-2 lg:w-3/4'>
                {
                    card?.map((item) => {
                        return <Link key={item._id} to={`/brandmoredata/${item?.select}`} className="relative overflow-hidden">
                            <div className="relative group">
                                <img src={item?.image} alt="Image" className="w-full h-[250px] transform transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute inset-0 flex items-end justify-start transition-opacity duration-300 bg-opacity-50 opacity-0 card-bg group-hover:opacity-100">
                                    <div className='pb-6 pl-4'>
                                        <h1 className='pb-3 text-4xl font-bold text-white'>{item?.select}</h1>
                                        <button className='px-4 py-2 mr-3 text-sm font-bold text-black duration-150 bg-white border hover:bg-black hover:text-white hover:border-black ' >SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    })
                }
            </div>

            <div className='2xl:px-[200px] bg-[#f5f7f9] md:px-20 px-5 lg:pt-10 lg:pb-20'>
                <div className='flex items-center justify-between py-5'><h1 className='text-lg font-bold text-black underline underline-offset-3'>Featured Products</h1><p onClick={() => setSeeAll(!seeall)} className='text-lg font-bold text-black cursor-pointer hover:underline'>{seeall ? 'See all Products' : 'View all Products'}</p></div>
                <div id='card' className='grid grid-cols-1 gap-5 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2'>
                    {
                        allItem?.slice(!seeall ? (0) : (-10)).map((item) => {
                            return <Link to={`/moredetails/${item._id}`} key={item._id} className='p-5 transition duration-300 ease-in-out rounded-md cursor-pointer hover:shadow-lg'>
                                <img className='h-[248px] w-full' src={item?.image} alt="" />
                                <h2 className='pt-5 text-base font-bold text-black'>{item?.name}</h2>
                                <p className='text-sm font-bold text-[#a2a3a5]'>{item?.type}</p>
                                <p className='text-sm  text-[#a2a3a5]'>$ {item?.price}</p>
                                <div className="flex">
                                    <StarRatings
                                        rating={parseFloat(item?.rating)}
                                        starDimension="15px"
                                        starSpacing="1px"
                                        starRatedColor="#ffa300"
                                    />
                                    <span className="ml-3 text-[#a2a3a5]">{item?.rating} Reviews</span>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div>
            <div className='section-bg'>
                <div className='p-8 lg:p-32'>
                    <h4 className='text-xl font-bold text-white'>Limited Time Offer</h4>
                    <h1 className='text-[42px] font-extrabold text-white'>Special Edition</h1>
                    <p className='py-3 text-sm text-white '>Enjoy exclusive savings with our limited-time offer! Get a <br /> generous 25% discount on all our products</p>
                    <h4 className='pb-2 text-xl font-bold text-white'>Buy This Product At 20% Discount, Use Code OFF20</h4>
                    <button onClick={() => (document.getElementById('card').scrollIntoView({ behavior: "smooth" }))} className='px-4 py-2 mr-3 text-sm font-bold text-black duration-150 bg-white border hover:bg-black hover:text-white hover:border-black ' >SHOP NOW</button>
                </div>
            </div>
            <div><Footer></Footer></div>
            <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a beer" onClick={() => (document.getElementById('top').scrollIntoView({ behavior: "smooth" }))} target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img class="object-cover object-center w-full h-full rounded-full" src="https://ps.w.org/scrollup-master/assets/icon-128x128.png?rev=1058878" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;