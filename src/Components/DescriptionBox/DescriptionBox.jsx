import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Welcome to SHOP ME, your ultimate online shopping destination. We are a comprehensive e-commerce platform designed to offer a seamless, secure, and enjoyable shopping experience from the comfort of your home. Whether you're looking for the latest fashion, electronics, home essentials, beauty products, or more, our platform connects you with top-quality products from trusted brands and sellers around the world. Our user-friendly interface, smart search filters, and secure payment gateways make it easy to browse, compare, and purchase items with confidence. We also offer fast shipping, reliable customer service, and easy returns to ensure complete satisfaction.</p>
            <p>
                An e-commerce platform displays product images, names, descriptions, prices, stock status, discounts, customer reviews, and purchase options like "Add to Cart." It also shows filters, search tools, and related product suggestions to help users shop easily and efficiently.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox