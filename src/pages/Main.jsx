import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Main = () => {
    return (
        <>
            <header>
                <div className="container header-container">
                    <div className="header-left">
                        <h1>O'zingizning martabangizni oshirish uchun o'z mahoratingizni oshiring</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore deleniti nisi hic corporis cumque delectus dignissimos? Obcaecati numquam a aspernatur.</p>
                        <a href="cources.html" className="btn btn-primary">Boshlash</a>
                    </div>
                    <div className="header-right">
                        <div className="hearde-right-img">
                            <img src="/assets/student-img2.png" />
                        </div>
                    </div>
                </div>
            </header>

            <section className="catagories">
                <div className="container catagories-container">
                    <div className="catagories-left">
                        <h1>Kategoriyalar</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, reiciendis, ex consectetur cumque ullam, enim similique deleniti impedit totam pariatur debitis inventore repudiandae praesentium adipisci.</p>
                        <a href="#" className="btn btn-primary">Batafsil</a>
                    </div>

                    <div className="catagories-right">
                        <article className="catagory">
                            <span className="catagory-icon"><i className="fa-solid fa-bitcoin-sign"></i></span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptate.</p>
                        </article>

                        <article className="catagory">
                            <span className="catagory-icon"><i className="fa-sharp fa-solid fa-droplet"></i></span>
                            <h5>Grafik Dizayn</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptate.</p>
                        </article>

                        <article className="catagory">
                            <span className="catagory-icon"><i className="fa-solid fa-money-bill-trend-up"></i></span>
                            <h5>Moliya</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptate.</p>
                        </article>

                        <article className="catagory">
                            <span className="catagory-icon"><i className="fa-solid fa-laptop"></i></span>
                            <h5>Marketing </h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptate.</p>
                        </article>

                        <article className="catagory">
                            <span className="catagory-icon"><i className="fa-solid fa-music"></i></span>
                            <h5>Musiqa</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptate.</p>
                        </article>
                        <article className="catagory">
                            <span className="catagory-icon"><i className="fa-solid fa-business-time"></i></span>
                            <h5> Biznes</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptate.</p>
                        </article>

                    </div>
                </div>
            </section>


            <section className="cources">
                <h2>Bizning Mashhur Kurslarimiz</h2>
                <div className="container cources-container">
                    <article className="cource">
                        <div className="cource-img">
                            <img src="/assets/course-1.webp" />
                        </div>
                        <div className="cource-info">
                            <h4>Responsive ijtimoiy Media veb-sayt UI dizayn</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure nam vero veniam nobis ab nihil!</p>
                            <a href="cources.html" className="btn btn-primary"> Batafsil</a>
                        </div>
                    </article>

                    <article className="cource">
                        <div className="cource-img">
                            <img src="/assets/course-2.webp" />
                        </div>
                        <div className="cource-info">
                            <h4>Responsive Admin Dashboard UI dizayn</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure nam vero veniam nobis ab nihil!</p>
                            <a href="cources.html" className="btn btn-primary"> Batafsil</a>
                        </div>
                    </article>

                    <article className="cource">
                        <div className="cource-img">
                            <img src="/assets/course-1.webp" />
                        </div>
                        <div className="cource-info">
                            <h4>Responsive ijtimoiy Media veb-sayt UI dizayn</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure nam vero veniam nobis ab nihil!</p>
                            <a href="cources.html" className="btn btn-primary">Batafsil</a>
                        </div>
                    </article>
                </div>
            </section>



            <section className="faqs">
                <h2>Tez-Tez Savol Bering</h2>
                <div className="container faqs-container">
                    <article className="faqs-box ">
                        <div className="faqs-icon"><i className="fa-thin fa-plus"></i></div>
                        <div className="faqs-answer-question">
                            <h4>Men uchun to'g'ri kurslarni qanday bilsam bo'ladi? </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta eius magnam voluptas, laudantium vitae, tempora quibusdam aliquid laboriosam, consectetur eligendi enim. Nisi, aut aliquid nulla accusantium expedita nostrum dolor?</p>
                        </div>
                    </article>

                    <article className="faqs-box">
                        <div className="faqs-icon"><i className="fa-thin fa-plus"></i></div>
                        <div className="faqs-answer-question">
                            <h4>Men uchun to'g'ri kurslarni qanday bilsam bo'ladi?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta eius magnam voluptas, laudantium vitae, tempora quibusdam aliquid laboriosam, consectetur eligendi enim. Nisi, aut aliquid nulla accusantium expedita nostrum dolor?</p>
                        </div>
                    </article>

                    <article className="faqs-box">
                        <div className="faqs-icon"><i className="fa-thin fa-plus"></i></div>
                        <div className="faqs-answer-question">
                            <h4>Men uchun to'g'ri kurslarni qanday bilsam bo'ladi? </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta eius magnam voluptas, laudantium vitae, tempora quibusdam aliquid laboriosam, consectetur eligendi enim. Nisi, aut aliquid nulla accusantium expedita nostrum dolor?</p>
                        </div>
                    </article>

                    <article className="faqs-box">
                        <div className="faqs-icon"><i className="fa-thin fa-plus"></i></div>
                        <div className="faqs-answer-question">
                            <h4>Men uchun to'g'ri kurslarni qanday bilsam bo'ladi? </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta eius magnam voluptas, laudantium vitae, tempora quibusdam aliquid laboriosam, consectetur eligendi enim. Nisi, aut aliquid nulla accusantium expedita nostrum dolor?</p>
                        </div>
                    </article>

                    <article className="faqs-box">
                        <div className="faqs-icon"><i className="fa-thin fa-plus"></i></div>
                        <div className="faqs-answer-question">
                            <h4>Men uchun to'g'ri kurslarni qanday bilsam bo'ladi? </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta eius magnam voluptas, laudantium vitae, tempora quibusdam aliquid laboriosam, consectetur eligendi enim. Nisi, aut aliquid nulla accusantium expedita nostrum dolor?</p>
                        </div>
                    </article>

                    <article className="faqs-box">
                        <div className="faqs-icon"><i className="fa-thin fa-plus"></i></div>
                        <div className="faqs-answer-question">
                            <h4>Men uchun to'g'ri kurslarni qanday bilsam bo'ladi? </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta eius magnam voluptas, laudantium vitae, tempora quibusdam aliquid laboriosam, consectetur eligendi enim. Nisi, aut aliquid nulla accusantium expedita nostrum dolor?</p>
                        </div>
                    </article>

                    <article className="faqs-box">
                        <div className="faqs-icon"><i className="fa-thin fa-plus"></i></div>
                        <div className="faqs-answer-question">
                            <h4>Men uchun to'g'ri kurslarni qanday bilsam bo'ladi?</h4>
                            <p>Lorem ipsum dolor sit amet consec  xfcaertc dfdtetur adipisicing elit. Suscipit soluta eius magnam voluptas, laudantium vitae, tempora quibusdam aliquid laboriosam, consectetur eligendi enim. Nisi, aut aliquid nulla accusantium expedita nostrum dolor?</p>
                        </div>
                    </article>

                    <article className="faqs-box">
                        <div className="faqs-icon"><i className="fa-thin fa-plus"></i></div>
                        <div className="faqs-answer-question">
                            <h4>Men uchun to'g'ri kurslarni qanday bilsam bo'ladi? </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta eius magnam voluptas, laudantium vitae, tempora quibusdam aliquid laboriosam, consectetur eligendi enim. Nisi, aut aliquid nulla accusantium expedita nostrum dolor?</p>
                        </div>
                    </article>

                    <article className="faqs-box">
                        <div className="faqs-icon"><i className="fa-thin fa-plus"></i></div>
                        <div className="faqs-answer-question">
                            <h4>Men uchun to'g'ri kurslarni qanday bilsam bo'ladi? </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta eius magnam voluptas, laudantium vitae, tempora quibusdam aliquid laboriosam, consectetur eligendi enim. Nisi, aut aliquid nulla accusantium expedita nostrum dolor?</p>
                        </div>
                    </article>

                    <article className="faqs-box">
                        <div className="faqs-icon"><i className="fa-thin fa-plus"></i></div>
                        <div className="faqs-answer-question">
                            <h4>Men uchun to'g'ri kurslarni qanday bilsam bo'ladi? </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta eius magnam voluptas, laudantium vitae, tempora quibusdam aliquid laboriosam, consectetur eligendi enim. Nisi, aut aliquid nulla accusantium expedita nostrum dolor?</p>
                        </div>
                    </article>
                </div>
            </section>



            <section className="container testimonial-container swiper mySwiper">
                <div className="swiper-wrapper">
                    <article className="textimonial swiper-slide">
                        <div className="avatar-test">
                            <img src="/assets/avatar2.jpg" />
                        </div>
                        <div className="into-test">
                            <h5>Jon</h5>
                            <small>Muhandis</small>
                        </div>
                        <div className="body-test">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti eveniet nihil temporibus asperiores, corrupti facere.</p>
                        </div>
                    </article>

                    <article className="textimonial swiper-slide">
                        <div className="avatar-test">
                            <img src="/assets/avatar3.jpg" />
                        </div>
                        <div className="into-test">
                            <h5>Doniyor</h5>
                            <small>IT</small>
                        </div>
                        <div className="body-test">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti eveniet nihil temporibus asperiores, corrupti facere.</p>
                        </div>
                    </article>

                    <article className="textimonial swiper-slide">
                        <div className="avatar-test">
                            <img src="/assets/avatar1.jpg" />
                        </div>
                        <div className="into-test">
                            <h5>Maykl</h5>
                            <small>Talaba</small>
                        </div>
                        <div className="body-test">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti eveniet nihil temporibus asperiores, corrupti facere.</p>
                        </div>
                    </article>

                    <article className="textimonial swiper-slide">
                        <div className="avatar-test">
                            <img src="/assets/avatar3.jpg" />
                        </div>
                        <div className="into-test">
                            <h5>Maykl</h5>
                            <small>Talaba</small>
                        </div>
                        <div className="body-test">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti eveniet nihil temporibus asperiores, corrupti facere.</p>
                        </div>
                    </article>

                    <article className="textimonial swiper-slide">
                        <div className="avatar-test">
                            <img src="/assets/avatar2.jpg" />
                        </div>
                        <div className="into-test">
                            <h5>Lebeart</h5>
                            <small>Talaba</small>
                        </div>
                        <div className="body-test">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti eveniet nihil temporibus asperiores, corrupti facere.</p>
                        </div>
                    </article>

                    <article className="textimonial swiper-slide">
                        <div className="avatar-test">
                            <img src="/assets/avatar1.jpg" />
                        </div>
                        <div className="into-test">
                            <h5>Maykl</h5>
                            <small>Talaba</small>
                        </div>
                        <div className="body-test">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti eveniet nihil temporibus asperiores, corrupti facere.</p>
                        </div>
                    </article>
                </div>
                <div className="swiper-pagination paginations"></div>
            </section>

           

        </>
    )
}

export default Main
