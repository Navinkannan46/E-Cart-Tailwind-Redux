import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slice/wishlistSlice'
const Wishlist = () => {
    const userWishlist = useSelector(state => state.wishlishReducer)

    const dispatch = useDispatch()
    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px' }} className='px-5'></div>
            {
                userWishlist?.length > 0 ?
                    <>
                        <h1 className='text-4xl font-bold text-red-600 '>My Whishlist</h1>
                        <div className='grid grid-cols-4 gap-4'>
                            {
                                userWishlist?.map(product => (
                                    <div key={product?.id} className='rounded border p-2 shadow'>
                                        <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                                        <div className='text-center'>
                                            <h3 className='text-xl font-bold'>{product?.title} </h3>
                                            <div className='flex justify-evenly mt-3'>
                                                <button onClick={() => dispatch(removeItem(product?.id))} className='text-xl '><i className='fa-solid fa-heart-circle-xmark text-red-600'></i>
                                                </button>
                                                <button className='text-xl'><i className='fa-solid fa-cart-plus  text-green-700'></i></button>
                                            </div>
                                        </div>

                                    </div>

                                ))
                            }
                        </div>

                    </>
                    :
                    <div className='flex justify-center items-center h-screen'>
                        <img src="https://th.bing.com/th/id/OIP.E4PNem0DZwztQdBhLF4N5QHaHa?rs=1&pid=ImgDetMain" alt="" />
                        <h1 className='text-3xl text-red-600'>Your wishlist is empty!!!</h1>
                    </div>

            }
        </>
    )
}

export default Wishlist