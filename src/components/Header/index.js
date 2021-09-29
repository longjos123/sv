import React from 'react'
import {
    BrowserRouter,
    Link
} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div class="container">
                    <Link class="navbar-brand" href="index.html">Coffee<small>Blend</small></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="oi oi-menu"></span> Menu
	      </button>
                    <div class="collapse navbar-collapse" id="ftco-nav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active"><Link href="index.html" class="nav-link">Trang chủ</Link></li>
                            <li class="nav-item"><Link href="menu.html" class="nav-link">Menu</Link></li>
                            <li class="nav-item"><Link href="about.html" class="nav-link">About</Link></li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="room.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</Link>
                                <div class="dropdown-menu" aria-labelledby="dropdown04">
                                    <Link class="dropdown-item" href="shop.html">Shop</Link>
                                    <Link class="dropdown-item" href="product-single.html">Single Product</Link>
                                </div>
                            </li>
                            <li class="nav-item"><Link href="contact.html" class="nav-link">Contact</Link></li>
                            <li class="nav-item cart"><Link href="cart.html" class="nav-link"><span class="icon icon-shopping_cart"></span><span class="bag d-flex justify-content-center align-items-center"><small>1</small></span></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header