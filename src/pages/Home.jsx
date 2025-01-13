import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slice/productSlice'
const Home = () => {
    const dispatch = useDispatch()
    const { allProducts, loading, erroeMsg } = useSelector(state => state.productReducer)
    // console.log(allProducts, loading, erroeMsg);
    const [currentPage, seturrentPage] = useState(1)
    const productPerPage = 8
    const totalPage = Math.ceil(allProducts?.length / productPerPage)
    const currentPageProuductLastIndex = currentPage * productPerPage
    const currentPageProuductFirstIndex = currentPageProuductLastIndex - productPerPage
    const visibleAllProducts = allProducts?.slice(currentPageProuductFirstIndex, currentPageProuductLastIndex)


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const navigateToNextPage=()=>{
        if(currentPage!=totalPage){
            seturrentPage(currentPage+1)
        }
    }
    const navigateToPrevPage=()=>{
        if(currentPage!=1){
            seturrentPage(currentPage-1)
        }
    }
    return (

        <>
            <Header insideHome={true} />
            <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
                {
                    loading ?
                        <div className='flex justify-center items-center my-5 text-lg'>
                            <img width={'100px'} height={'100px'} src="https://img.freepik.com/premium-vector/loading-icon-vector-illustration-symbol-design_861234-2757.jpg" alt="" />
                        </div>
                        :
                        <>
                            <div className='grid grid-cols-4 gap-4'>
                                {
                                    allProducts?.length > 0 ?
                                        visibleAllProducts?.map(product => (
                                            <div key={product?.id} className='rounded border p-2 shadow'>
                                                <img width={'100%'} height={'100%'} src={product?.thumbnail} alt="" />
                                                <div className='text-center'>
                                                    <h3 className='text-xl font-bold'>{product?.title}</h3>
                                                    <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
                                                </div>

                                            </div>
                                        ))
                                        :
                                        <div className="flex justify-center items-center font-bold text-red-600 my-5 text-lg">
                                            Product Not Found!!!
                                        </div>
                                }
                            </div>
                            <div className="text-2xl text-center font-bold mt-20">
                                <span onClick={navigateToPrevPage}  className="cursor-pointer"><i className='fa-solid fa-backward me-5'></i></span>
                                <span>{currentPage} of {totalPage}</span>
                                <span onClick={navigateToNextPage} className="cursor-pointer"><i className='fa-solid fa-forward ms-5'></i></span>

                            </div>

                        </>
                }
            </div>

        </>
    )
}

export default Home