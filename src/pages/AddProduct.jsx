import React from 'react';
import Header from '../components/Header';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import Footer from '../components/Footer';

const AddProduct = () => {

    const handelSubmit = (e) => {
        e.preventDefault()
        const select = e.target.select.value;
        const rating = e.target.rating.value;
        if (select === 'Select') {
            return toast.error("Please select your brand")
        }
        if (parseInt(rating) > 5) {
            return toast.error("Please add [ <=5 ] rating ")
        }
        const name = e.target.name.value;
        const image = e.target.image.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const discription = e.target.discription.value;

        const data = { name, image, select, type, price, discription, rating }
        fetch('https://fashion-backend-rust.vercel.app/item', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.acknowledged) {
                    swal("Good job!", "Product added sucessfully !", "success");
                    e.target.reset()
                }
            });
    }
    return (
        <div>
            <div className='form-bg'>
                <div><Header></Header></div>
                <div className='lg:px-[150px] px-10 pb-24 pt-28'>
                    <div className='text-center'><h1 className='text-3xl Rancho'>Add Product</h1></div>
                    <form onSubmit={handelSubmit} className='p-10 rounded-md shadow-lg'>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="name" className="peer-focus:font-medium absolute text-xl text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="image" id="image" className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="image" className="peer-focus:font-medium absolute text-xl text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="type" id="type" className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="type" className="peer-focus:font-medium absolute text-xl text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Types of products</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="number" name="price" id="price" className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="price" className="peer-focus:font-medium absolute text-xl text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <select defaultValue={'Select'} id="countries" name='select' className="block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    <option className='text-white bg-slate-600' value="Select" disabled >Brand Name</option>
                                    <option className='text-white bg-slate-600' value="Nike">Nike Brand</option>
                                    <option className='text-white bg-slate-600' value="Adidas">Adidas Brand</option>
                                    <option className='text-white bg-slate-600' value="Gucci">Gucci Brand</option>
                                    <option className='text-white bg-slate-600' value="Zara">Zara Brand</option>
                                    <option className='text-white bg-slate-600' value="H&M">H&M Brand</option>
                                    <option className='text-white bg-slate-600' value="Levi's">Levi's</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="discription" id="discription" className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="discription" className="peer-focus:font-medium absolute text-xl text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Short description</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="rating" id="rating" className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="rating" className="peer-focus:font-medium absolute text-xl text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rating</label>
                            </div>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xl w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add button</button>
                    </form>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;