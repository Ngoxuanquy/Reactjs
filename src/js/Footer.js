import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' 
import '../css/Footer.css'

function Footer() {
    return (
        <div>
        <footer data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
     <div class="container">
         <div class="noi-dung about">
             <h2>Về Chúng Tôi</h2>
             <p>Lorem ipsumdolor sit...</p>
             <ul class="social-icon">
                 <li><a href=""><i class="fa fa-facebook"></i></a></li>
                 <li><a href=""><i class="fa fa-twitter"></i></a></li>
                 <li><a href=""><i class="fa fa-instagram"></i></a></li>
                 <li><a href=""><i class="fa fa-youtube"></i></a></li>
             </ul>
         </div>
      
         <div class="noi-dung links">
             <h2>Đường Dẫn</h2>
             <ul>
                 <li><a href="#">Trang Chủ</a></li>
                 <li><a href="#">Về Chúng Tôi</a></li>
                 <li><a href="#">Thông Tin Liên Lạc</a></li>
                 <li><a href="#">Dịch Vụ</a></li>
                 <li><a href="#">Điều Kiện Chính Sách</a></li>
             </ul>
         </div>
     
         <div class="noi-dung contact">
             <h2>Thông Tin Liên Hệ</h2>
             <ul class="info">
                 <li>
                     <span><i class="fa fa-map-marker"></i></span>
                     <span>Đường Số 1<br />
                         Hoàng Mai - Hà Nội<br />
                         Việt Nam</span>
                 </li>
                 <li>
                     <span><i class="fa fa-phone"></i></span>
                     <p><a href="#">0589 401 978</a>
                         <br />
                         <a href="#">0925 964 759</a></p>
                 </li>
                 <li>
                     <span><i class="fa fa-envelope"></i></span>
                     <p><a href="#">ngoxuanquy1812@gmail.com</a></p>
                </li>
                 <li>
                     <form class="form">
                         <input type="email" class="form__field" placeholder="Đăng Ký Subscribe Email" />
                         <button type="button" class="btn btn--primary  uppercase">Gửi</button>
                     </form>
                 </li>
             </ul>
         </div>
     </div>
 </footer>
 </div>
    )
}

export default Footer