import React from 'react'
import Header from '../components/Header'

const View = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col mx-5'>
                <div className='grid grid-cols-2 items-center h-screen'>
                    <img width={'450px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhjlStfInUfiEWgt0JiRp4wrflpTJR2lJ6w&s" alt="" />
                    <div>
                        <h3 className='font-bold'>PID : id</h3>
                        <h1 className='text-5xl font-bold '>Product Name</h1>
                        <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
                        <h4>Brand : brand</h4>
                        <h4>Categoey : category</h4>
                        <p>
                            <span className='font-bold'>Description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt consequuntur ea expedita aliquam. Quos porro odit cum. Quod quibusdam sequi reiciendis qui maxime nihil magni laboriosam, mollitia magnam assumenda.
                        </p>
                        <div className='flex justify-between mt-5'>
                            <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
                            <button className='bg-green-600 text-white p-2'>Add to Cart</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default View