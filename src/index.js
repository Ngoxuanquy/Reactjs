import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import {browserHistory} from 'react-router'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { BrowserRouter ,Switch, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { CartProvider } from 'react'
import Header  from './js/Header'
import Footer from './js/Footer'
import Home from './js/home'
import Chitiet from './js/chitiet.js' 
import AddCart from './js/AddCart.js'
import Timkiem from './js/TimKiem.js';
import Phanloai from './js/phanloai.js';
import ScrollIntoView from './js/giohang.js'
import Dangky from './js/dangky.js';



// Tạo component App
function App() {
    
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const mang =[];

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) {
    //   document.querySelector(".addthatbai").style.display ="block";
    //   setTimeout(function(){
    //   document.querySelector(".addthatbai").style.display ="none";
    // }, 2000);
  
    showErrorToast();
    return;
  }
    document.querySelector("#aninaren").style.display ="block";
    setTimeout(function(){
           document.querySelector("#aninaren").style.display ="none";
   }, 1000);
  const addcart = document.getElementById('addcart');
  console.log(addcart.offsetTop  )
  console.log(window.scrollY )
  console.log([addcart])

  showSuccessToast();
   setCart([...cart, item]);    
   localStorage.setItem("vay" , JSON.stringify(cart.concat(item)))
  //  localStorage.setItem("vay1" , JSON.stringify(item))


  };


  
  function showSuccessToast() {
    toast({
      title: "Thành công!",
      message: "Thêm Vào Giỏ Hàng Thành Công!!!.",
      type: "success",
      duration: 2000
    });

  }

  function showErrorToast() {
    toast({
      title: "Thất bại!",
      message: "Sản Phẩm Đã Có.",
      type: "error",
      duration: 2000
    });
  }

  function toast({ title = "", message = "", type = "info", duration = 2000 }) {
    const main = document.getElementById("toast");
    if (main) {
      const toast = document.createElement("div");
      // console.log(toast)
      // Auto remove toast
      const autoRemoveId = setTimeout(function () {
        main.removeChild(toast);
      }, duration + 1000);
  
      // Remove toast when clicked
      toast.onclick = function (e) {
        if (e.target.closest(".toast__close")) {
          main.removeChild(toast);
          clearTimeout(autoRemoveId);
        }
      };
  
      const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle"
      };
      const icon = icons[type];
      const delay = (duration / 1000).toFixed(2);
  
      toast.classList.add("toast", `toast--${type}`);
      toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
  
      toast.innerHTML = `
                      <div class="toast__icon">
                          <i class="${icon}"></i>
                      </div>
                      <div class="toast__body">
                          <h3 class="toast__title">${title}</h3>
                          <p class="toast__msg">${message}</p>
                      </div>
                      <div class="toast__close">
                          <i class="fas fa-times"></i>
                      </div>
                  `;
      main.appendChild(toast);
    }
  }

      
  // localStorage.setItem("vay" , JSON.stringify(cart))
  const local = JSON.parse(localStorage.getItem("vay"))

  window.onload = function(){ 
    setCart([...local , cart]); 
   
  }


  cart.map(ca => {
    if(ca.name == undefined){
        cart.pop()
    }
  })

  const handleChange = (item, d) => {

    const ind = local.indexOf(item);
    const arr = local;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  

    return (
        <div>
         
            <BrowserRouter >
        
            <Header length = {cart.length} cart={cart} setCart={setCart}/>
            <Switch>
            {/* <Route path='/giohang/:id' exact>
                <AddCart    />  
            </Route> */}
            
            <Route path='/dangky'  >
                  <Dangky   />
            </Route>
            <Route path='/vays/:id'  >
                  <Chitiet   />
            </Route>
       
            <Route path='/phanloai'  >
                  <Phanloai   />
            </Route>
            <Route path='/Timkiem/:id' >
                  <Timkiem  />
            </Route>
            <Route path='/giohang/:id' >
                <AddCart  cart={cart} setCart={setCart} handleChange={handleChange}/>  
            </Route>
         
            <Route path='/' exact >
                <Home handleClick={handleClick}/>  
            </Route>
            </Switch>
            <Footer />
        
            </BrowserRouter>
          
        </div>
    )
   
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))
export default App

