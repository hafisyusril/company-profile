import ProductsMenuContent from '@/components/ProductsMenuContent'
import React from 'react'

const Products = () => {
  return (
    <div className='container mx-auto px-4'>
        <div>
            <h1 className='text-8xl font-bold text-[#035f41] text-center'>Our Menu</h1>
        </div>
      <ProductsMenuContent />
    </div>
  )
}

export default Products
