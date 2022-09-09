import React   from 'react'
import Slider from "react-slick"
 // nạp thư viện react
import ReactDOM from 'react-dom' 
// import {Routes, Route , Link} from 'react-router-dom'
import {useState} from 'react'
import {useEffect , Component} from 'react'
import '../css/Home.css'
import Chitiet from './chitiet.js' 
import {  Link ,NavLink } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import List from './db.js'
import Card  from './cart.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, 
  FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky,
   StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
// import ScrollToTop from './giohang.js'
import AOS from "aos";
import "aos/dist/aos.css";
// import Img from './a0.jpg'




function Home({handleClick}) {

  AOS.init();
    const [titles , setTitle] = useState([]);
    const [title , setTitl] = useState('');

    function animateNumber(finalNumber, delay, startNumber = 0, callback) {
      let currentNumber = startNumber
      const interval = window.setInterval(updateNumber, delay)
      function updateNumber() {
        if (currentNumber >= finalNumber) {
          clearInterval(interval)
        } else {
          currentNumber++
          callback(currentNumber)
        }
      }
    }


    
    // document.addEventListener('DOMContentLoaded', function () {
    //   animateNumber(18, 10, 0, function (number) {
    //     const formattedNumber = number.toLocaleString()
    //     document.getElementById('transaction-count').innerHTML = formattedNumber
    //   })
      
    //   animateNumber(12, 50, 0, function (number) {
    //     const formattedNumber = number.toLocaleString()
    //     document.getElementById('city-count').innerHTML = formattedNumber
    //   })
      
    //   animateNumber(2002, 10, 0, function (number) {
    //     const formattedNumber = number.toLocaleString()
    //     document.getElementById('customer-count').innerHTML = formattedNumber
    //   })
    // })
    
  
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
       autoplay: true,
      autoplaySpeed: 1000,
      
    };
   
  
    // var index = 1;
    // const  handerClick = function() {
    //       var imgs = ["https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/300427577_161467586469546_8920409063008720417_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WuAkQB5GbMYAX9_RWPa&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-xigLYvahFtFaOYbOajAUHw3gc9Ibz_12QyzWmA6Jo9Q&oe=6309CAA4",
    //       "https://cf.shopee.vn/file/a6f62461dc0b43406905475ea26abfed",
    //       "http://dathangquangchau.com/wp-content/uploads/2017/01/chan-vay-ren-10.jpg"]

    //       document.getElementById('img_banchay').src = imgs[index];
    //       index++;
    //       if(index == 3) {
    //         index=0;
    //       }
    // }
    // setInterval(handerClick, 3000);
 
    function scrollToTop(){
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
    }

    
  
    // React.useEffect(() => {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //     })
    //   });
  
    
  
    
    return (       
      <>
             <ScrollContainer >
              <ScrollPage page={0}>
              <Animator >

              <div class="panel">
      
              <img className='img_chinh' src="https://1.bp.blogspot.com/-NGfw-7PTOJg/XqPM2Jsf6LI/AAAAAAAAip8/kZElxP2v0u01zQEp9zrHN_ZQIQydoV2fwCLcBGAsYHQ/s1600/Hinh-anh-dep-nhat-the-gioi%2B%25282%2529.jpg" />
                <h1 class="jj">
                    <span>StanTio</span> 
                    <span>-Shop-</span>
                </h1>
                <h1 class="jj">
                    <span>StanTio</span> 
                    <span>-Shop-</span>
                  
                </h1>
            </div>
             

                  </Animator>
              </ScrollPage>
   
              <div className='addthanhcong' >
                  <div>Thêm Thành Công</div>
                  <div className='span'></div>
              </div>
          
              <div className='addthatbai'>
                  <div>Sản Phẩm Đã Có</div>
                  <div className='span1'></div>
              </div>
              <div id="toast"></div>

              <div id='aninaren'></div>

              {/* <div onClick={showSuccessToast} class="btn btn--success">Show success toast</div>
              <div onClick={showErrorToast} class="btn btn--danger">Show error toast</div> */}

              <div> </div>

              <i class="fa-brands fa-facebook-messenger" id="messanger" ></i>
              <div id="phone">
                <div id="sdt"><a>0580401978 </a></div>
              <i class="fa-solid fa-phone-flip" id="phone"> </i>
              </div>
              <button id='top' onClick={scrollToTop}><i class="fa-solid fa-jet-fighter-up"></i></button>

              <div className='form_gird'>
             
                <div></div>
                <div>
                <div class="" id="js" >
          

                      <div class="giaodich" data-aos="fade-right"  >
                       
                        <div id="transaction-count" class="giaodich_so"  >
                          1,000
                        </div>
                        <div class="text-xl text-blue-200">lượt giao dịch</div>
                      </div>
                  <div class="danhgia" data-aos="fade-up">
                    <div id="city-count" class="danhgia_so">
                      98
                    </div>
                    <div class="">Lượt Đánh Giá</div>
                  </div>
               
             
                  <div class="khachhang"  data-aos="fade-left">
                    <div id="customer-count" class="khachhang_so">
                      1,500
                    </div>
                    <div class="">khách hàng</div>
                  </div>
               
              </div>

             
              <div className='list_img' >
                  <div className='font' data-aos="fade-up"
                   data-aos-duration="3000">
                    {List.map((item) => (
                        <Card item={item} handleClick={handleClick} />
                      ))}
                  </div>
                </div>

      {/* Thêm Giỏ Hàng */}

     
   
        <div class="night">
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                  <div class="shooting_star"></div>
                      <div class="text_banchay" data-aos="fade-right">
                          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />

                          <div class="content">
                            <div class="content__container">
                              <p class="content__container__text">
                                Sản Phẩm
                              </p>
                              <ul class="content__container__list">
                                <li class="content__container__list__item">Bán Chạy !</li>
                                <li class="content__container__list__item">Săn Lùng !</li>
                                <li class="content__container__list__item">Ưa Chuộng !</li>
                                <li class="content__container__list__item">everybody !</li>
                              </ul>
                            </div>
                          </div>
                      </div>
                      <div>
                          <img id="img_banchay"   src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/300427577_161467586469546_8920409063008720417_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WuAkQB5GbMYAX9_RWPa&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-xigLYvahFtFaOYbOajAUHw3gc9Ibz_12QyzWmA6Jo9Q&oe=6309CAA4" />

                      </div>
                      </div>
            <div className='list_img1'>
                      <h1>Váy Được Bán Chạy</h1>
                <div className='font1'>
                  <Slider {...settings}>
                  {List.map((item) => (
                    <div className='chia_gird'>
                      <Card item={item} handleClick={handleClick} />
                    </div>
                    ))}
                </Slider>
                </div>
                </div>

                  {/* Váy Giảm Giá */}
              
                  <div class="text_giamgia" data-aos="fade-up"> 
                        
                          <div className='giamgia'>Những Váy Được Giảm Giá</div>
                  <div class="box_giamgia" >
                        <div class="giamgia"  >
                            <img data-aos="fade-up"
                           data-aos-duration="3000" src="https://afamilycdn.com/150157425591193600/2021/4/11/1692500054901263023564334687201552819797495n-16181354543232045300527.jpg" />
                        </div>
                         <div class="giamgia" >
                            <img data-aos="fade-up"
                           data-aos-duration="3000" src="https://cf.shopee.vn/file/d8a65a2185df0dc76538e2550d088fbd" />
                        </div>
                         <div class="giamgia" >
                            <img data-aos="fade-up"
                           data-aos-duration="3000" src="https://cf.shopee.vn/file/27df2aea44467ddb4a6180f7eb5e92ea" />
                        </div>
                         <div class="giamgia" >
                            <img data-aos="fade-up"
                           data-aos-duration="3000" src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/298757564_160657809883857_4536489783332584925_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MKPO51XXaYwAX-6azI5&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-ZpU-xnF25BEBI-d-IVExVnNyxleTKHIRltnCOdk7j3w&oe=630C31FA" />
                        </div>
                  </div>
                  </div>
                  </div>

                    
                    <div id='stars'></div>
                      <div id='stars2'></div>
                      <div id='stars3'></div>
                     
                  <div></div>
                  </div>
                
                </ScrollContainer>
        </>
    

    )
}

export default Home