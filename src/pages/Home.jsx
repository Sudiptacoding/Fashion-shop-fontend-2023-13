import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import BrandLogoSlide from '../components/BrandLogoSlide';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
    const [card, setCard] = useState([])


    useEffect(() => {
        // fetch('https://backend-etwzz54rd-sudiptacoding.vercel.app/item')
        //     .then((response) => response.json())
        //     .then((json) => {
        //         const brand = json.map(item => item.select)
        //         const uniqueValues = [...new Set(brand)];
        //         const newArr = []
        //         for (const item of uniqueValues) {
        //             const matchdata = json.find(i => i.select === item)
        //             newArr.push(matchdata)
        //         }
        //         setCard(newArr)
        //     });

        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setCard(data))


    }, [])

    const toggleThem = () => {
        document.documentElement.classList.toggle('dark')
    }

    return (
        <div id='top' className='Lato dark:bg-[#0b1f2bd1] dark:text-white'>
            <div className='banner-bg '>
                <Header></Header>
                <div className='flex items-center justify-center h-[70vh]'>
                    <div className='text-right'>
                        <h1 className='text-5xl Rancho'> Raining Offers For <br /> Hot Summer !</h1>
                        <p className='py-3 text-xl Lato'>25% Off On All Products</p>
                        <button className='px-4 py-2 mr-3 text-sm font-bold text-black duration-150 bg-white border hover:bg-black hover:text-white hover:border-black ' >SHOP NOW</button>
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
                    card?.map((item, i) => {
                        return <Link key={i} to={`/brandmoredata/${item?.name}`} className="relative overflow-hidden">
                            <div className="relative group">
                                <img src={item?.logo} alt="Image" className="w-full h-[250px] transform transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute inset-0 flex items-end justify-start transition-opacity duration-300 bg-opacity-50 opacity-0 card-bg group-hover:opacity-100">
                                    <div className='pb-6 pl-4'>
                                        <h1 className='pb-3 text-4xl font-bold text-white'>{item?.name}</h1>
                                        <button className='px-4 py-2 mr-3 text-sm font-bold text-black duration-150 bg-white border hover:bg-black hover:text-white hover:border-black ' >SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    })
                }
            </div>

            <div className='section-bg'>
                <div className='p-8 lg:p-32'>
                    <h4 className='text-xl font-bold text-white'>Limited Time Offer</h4>
                    <h1 className='text-[42px] font-extrabold text-white'>Special Edition</h1>
                    <p className='py-3 text-sm text-white '>Enjoy exclusive savings with our limited-time offer! Get a <br /> generous 25% discount on all our products</p>
                    <h4 className='pb-2 text-xl font-bold text-white'>Buy This Product At 20% Discount, Use Code OFF20</h4>
                    <button className='px-4 py-2 mr-3 text-sm font-bold text-black duration-150 bg-white border hover:bg-black hover:text-white hover:border-black ' >SHOP NOW</button>
                </div>
            </div>

            <div className='w-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58884.19889386835!2d89.07047659999999!3d22.71848520000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1698218244684!5m2!1sen!2sbd" width='100%' height="450"></iframe>
            </div>


            <div><Footer></Footer></div>
            <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a beer" onClick={() => (document.getElementById('top').scrollIntoView({ behavior: "smooth" }))} target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img class="object-cover object-center w-full h-full rounded-full" src="https://ps.w.org/scrollup-master/assets/icon-128x128.png?rev=1058878" />
                    </a>
                </div>
            </div>

            <div class="flex items-end justify-end fixed top-1/4 right-0 mb-4 mr-4 z-10">
                <div>
                    <input onClick={toggleThem} data-hs-theme-switch class="relative w-[3.25rem] h-7 bg-black checked:bg-none checked:bg-blue-600  rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-slate-700 focus:ring-slate-700 focus:outline-none appearance-none
before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200
after:absolute after:right-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:bg-[url('../svg/illustration/moon-stars.svg')] checked:after:bg-[url('../svg/illustration/brightness-high.svg')] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:left-1.5 checked:after:right-auto" type="checkbox" id="darkSwitch"></input>
                </div>
            </div>
        </div>
    );
};

export default Home;