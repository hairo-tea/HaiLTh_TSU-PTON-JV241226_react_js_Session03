import React from 'react'
import ShoppingCardHeader from './ShoppingCardHeader'
import ShoppingCardFunction from './ShoppingCardFunction'
import ListProduct from './ListProduct'

export default function ShoppingCardInfo() {
    return (
        <div className="col-lg-7">
            <ShoppingCardHeader />
            <hr />
            <ShoppingCardFunction />
            <ListProduct />
        </div>
    )
}
