import React from 'react'
import {
    BrowserRouter,
    Link
} from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <div class="overlay"></div>
            <div class="container">
                <div class="row mb-5">
                    <div class="col-lg-3 col-md-6 mb-5 mb-md-5">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">About Us</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li class="ftco-animate"><Link href="#"><span class="icon-twitter"></span></Link></li>
                                <li class="ftco-animate"><Link href="#"><span class="icon-facebook"></span></Link></li>
                                <li class="ftco-animate"><Link href="#"><span class="icon-instagram"></span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-5 mb-md-5">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Recent Blog</h2>
                            <div class="block-21 mb-4 d-flex">
                                <Link class="blog-img mr-4" style="background-image: url(images/image_1.jpg);"></Link>
                                <div class="text">
                                    <h3 class="heading"><Link href="#">Even the all-powerful Pointing has no control about</Link></h3>
                                    <div class="meta">
                                        <div><Link href="#"><span class="icon-calendar"></span> Sept 15, 2018</Link></div>
                                        <div><Link href="#"><span class="icon-person"></span> Admin</Link></div>
                                        <div><Link href="#"><span class="icon-chat"></span> 19</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div class="block-21 mb-4 d-flex">
                                <Link class="blog-img mr-4" style="background-image: url(images/image_2.jpg);"></Link>
                                <div class="text">
                                    <h3 class="heading"><Link href="#">Even the all-powerful Pointing has no control about</Link></h3>
                                    <div class="meta">
                                        <div><Link href="#"><span class="icon-calendar"></span> Sept 15, 2018</Link></div>
                                        <div><Link href="#"><span class="icon-person"></span> Admin</Link></div>
                                        <div><Link href="#"><span class="icon-chat"></span> 19</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div class="block-21 mb-4 d-flex">
                                <Link class="blog-img mr-4" style="background-image: url(images/image_2.jpg);"></Link>
                                <div class="text">
                                    <h3 class="heading"><Link href="#">Even the all-powerful Pointing has no control about</Link></h3>
                                    <div class="meta">
                                        <div><Link href="#"><span class="icon-calendar"></span> Sept 15, 2018</Link></div>
                                        <div><Link href="#"><span class="icon-person"></span> Admin</Link></div>
                                        <div><Link href="#"><span class="icon-chat"></span> 19</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="block-21 mb-4 d-flex">
                                <Link class="blog-img mr-4" style="background-image: url(images/image_2.jpg);"></Link>
                                <div class="text">
                                    <h3 class="heading"><Link href="#">Even the all-powerful Pointing has no control about</Link></h3>
                                    <div class="meta">
                                        <div><Link href="#"><span class="icon-calendar"></span> Sept 15, 2018</Link></div>
                                        <div><Link href="#"><span class="icon-person"></span> Admin</Link></div>
                                        <div><Link href="#"><span class="icon-chat"></span> 19</Link></div>
                                    </div>
                                </div>
                                <div class="text">
                                    <h3 class="heading"><Link href="#">Even the all-powerful Pointing has no control about</Link></h3>
                                    <div class="meta">
                                        <div><Link href="#"><span class="icon-calendar"></span> Sept 15, 2018</Link></div>
                                        <div><Link href="#"><span class="icon-person"></span> Admin</Link></div>
                                        <div><Link href="#"><span class="icon-chat"></span> 19</Link></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-5 mb-md-5">
                        <div class="ftco-footer-widget mb-4 ml-md-4">
                            <h2 class="ftco-heading-2">Services</h2>
                            <ul class="list-unstyled">
                                <li><Link href="#" class="py-2 d-block">Cooked</Link></li>
                                <li><Link href="#" class="py-2 d-block">Deliver</Link></li>
                                <li><Link href="#" class="py-2 d-block">Quality Foods</Link></li>
                                <li><Link href="#" class="py-2 d-block">Mixed</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-md-5">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Have Link Questions?</h2>
                            <div class="block-23 mb-3">
                                <ul>
                                    <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                    <li><Link href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></Link></li>
                                    <li><Link href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

