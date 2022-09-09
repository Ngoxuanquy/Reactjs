import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' 
import '../css/Header.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {  Link ,NavLink } from "react-router-dom";
import {useEffect, useState} from 'react'

function Header({length , cart ,setCart }) {
  const local = JSON.parse(localStorage.getItem("vay"))
  const user = localStorage.getItem("user")
  console.log(user)
  const [price, setPrice] = useState(0);
    
    const [vay , setVay] = useState('')

    window.addEventListener("scroll" , function(){
        var Header = document.querySelector('.menu');
        Header.classList.toggle("quy" , window.scrollY > 500);
        
       })
    
       useEffect(() => {
            var submit = document.getElementById("submit");
            submit.addEventListener("click" , (e) => {
            const tim = document.getElementById("input_tim").value;
            // console.log(tim)
            setVay(tim)
        })
    },[])

    
    // console.log(cart)
    
    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
        localStorage.setItem("vay" , JSON.stringify(arr))
       
        setCart([...local,arr])
    
      };

      const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
      };
    
      useEffect(() => {
        handlePrice();
    });
 
        let Gia1 =  cart.reduce((result , prod) =>{
            prod.Gia= Number(prod.Gia)
          return result + prod.Gia;
        },0)
  
  
    
    return (
        <div>
           <div className='phu_trang' id='phu_trang'>
          
           <i class="fa-solid fa-xmark" id='close' onClick={()=> {
                     document.getElementById("phu_trang").style.display = "none";
                     document.getElementById("phu_den").style.display = "none"
                      }} ></i>
                <ul>
                <li  >
                  <NavLink to={`/`} activeClassName='active' >
                    <div style={{color: "black"}} onClick={()=> {
                     document.getElementById("phu_trang").style.display = "none";
                     document.getElementById("phu_den").style.display = "none"
                      }} > 
                         Trang Chủ
                    </div>
                    </NavLink>
                    </li>
                    <li >
                    <NavLink to={`/phanloai`} activeClassName='active' >
                    <div style={{color: "black"}} onClick={()=> {
                     document.getElementById("phu_trang").style.display = "none";
                     document.getElementById("phu_den").style.display = "none"
                        }}> 
                        Phân Loại   <i class="fa fa-angle-down"></i>
                   
                        <ul className='menu_phanloai'>
                            <li>
                                <div >Váy Mùa Hè</div>
                            </li>
                            <li>
                                 <div>Váy Dự Tiệc</div>
                            </li>
                            <li>
                               <div>Chân Váy</div>
                            </li>
                            <li>
                                 <div>Túi</div>
                            </li>  <li>
                                <div>Chân Váy</div>
                            </li>
                        </ul>

                    </div>
                        </NavLink>
                    </li>
                    <li><div >Liên Hệ </div></li>
                    <li><div >Về Chúng Tôi</div></li>
                    <li >
                    <NavLink to={`/giohang/:id`} activeClassName='active' >
                         <i class="fa-solid fa-cart-arrow-down" id='cart' onClick={()=> {
                     document.getElementById("phu_trang").style.display = "none";
                     document.getElementById("phu_den").style.display = "none"
                       }}></i>
                    </NavLink>
                         <label className='length'>{length}</label>

                     
                   </li>
                   <li><div >
                   <NavLink to={`/dangky`}  >
                    {user}
                    </NavLink>

                    </div></li>

                </ul>
           </div>
           <div className='phu_den' id='phu_den' onClick={()=> {
                     document.getElementById("phu_trang").style.display = "none";
                     document.getElementById("phu_den").style.display = "none"
           }}></div>

        <div className='header'>
            
            <ul className='menu' >
                <li>
                  <NavLink to={`/`} activeClassName='active' >
                    <img id="img_bia" src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/275549265_119316327349050_7133039339301134607_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QIoY2IVqOigAX-Siryl&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8wGjGipQRX4Ye5FMJKypmmdxOkw3XtGmuIebcb7csUjA&oe=6309CA94" />
                    </NavLink>
                </li>
         
                <li className='li_trangchi' >
                  <NavLink to={`/`} activeClassName='active' >
                    <div className='trangchu'> 
                         Trang Chủ
                    </div>
                    </NavLink>
                    </li>
                    <li className='li_phanloai'>
                    <NavLink to={`/phanloai`} activeClassName='active' >
                    <div className='phanloai'> 
                        Phân Loại   <i class="fa fa-angle-down"></i>
            
                        <ul className='menu_phanloai'>
                            <li>
                                <div >Váy Mùa Hè</div>
                            </li>
                            <li>
                                 <div>Váy Dự Tiệc</div>
                            </li>
                            <li>
                               <div>Chân Váy</div>
                            </li>
                            <li>
                                 <div>Túi</div>
                            </li>  <li>
                                <div>Chân Váy</div>
                            </li>
                        </ul>
                    </div>
                        </NavLink>
                    </li>
                    <li><div className='lienhe'>Liên Hệ </div></li>
                    <li><div className='vevhungtoi'>Về Chúng Tôi</div></li>
             
                    <li>
                    <NavLink to={`/Timkiem/${vay}`} activeClassName='active' >
                    <input type="submit" value="Tìm" id='submit'></input>
                    </NavLink>
                    <input id="input_tim" placeholder='Ví dụ: Váy 1'></input>
                    <i class="fa-solid fa-magnifying-glass " id='search'></i>

                    <div className='box_search'> 
                        <ul id='ul_search' >
                    <div id='div_search' >
                            <li id='li_search'>quyquy</li>
                            <li id='li_search'>quyquy2</li>

                    </div>
                        </ul>
                    </div>
                    </li>
                    <li id='cart'>
                       <NavLink to={`/giohang/:id`} activeClassName='active' >
                         <i class="fa-solid fa-cart-arrow-down" id='cart' >
                         </i>
                        </NavLink>
                         <label className='length'>{length}</label>
                        <div className='fake_cart'>
                            
                            <div className='test'>
                            <ul>
                                {cart.map(ca => (
                                    <li key={ca.id}>
                                    <div className='card'>
                                      
                                     <div className='name_cart' >{ca.name}</div>   
                                   <div><img id='img_cart' src={ca.img} /> </div>
                                   <div className='Gia_cart'>{ca.Gia} </div>
                                 
                                   <i class="fa-regular fa-circle-xmark" id='xoa' onClick={() => handleRemove(ca.id)}></i>
                                   <div></div>
                                   </div>
                                    </li>
                                    ))}
                                    <li>Tổng Tiền:  {Gia1}</li>
                                    <NavLink to={`/giohang/:id`} activeClassName='active'  >
                                    <li style={{color: "black" , backgroundColor: "coral", fontSize: "20px"}}>Đi Đến Giỏ Hàng </li>
                                    </NavLink>
                               </ul>
                            </div>
                        </div>
                     

                   </li>
                   <li ><div className='dangky' > 
                    <NavLink to={`/dangky`}  >
                    <div style={{color: "WHITE"}}>
                    {user == '' ? user : "Đăng Ký" }
                    


                    </div>
                    </NavLink></div></li>
                    <li> <i class="fa-solid fa-bars" id='menu_fake' onClick={() => {
                        document.getElementById("phu_trang").style.display = "block";
                        document.getElementById("phu_den").style.display = "block"
                    }}></i></li>
            </ul>
        </div>
        </div>
    )
}

export default Header