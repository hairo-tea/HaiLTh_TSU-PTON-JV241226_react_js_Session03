import React from 'react'
import CardDetail from './CardDetail'
import ShoppingCardInfo from './ShoppingCardInfo'

export default function ShoppingCard() {
    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="row">
                                    {/* pham vi cua shopping card */}
                                    <ShoppingCardInfo />
                                    {/* pham vi cua card details */}
                                    <CardDetail />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

