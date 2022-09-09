import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import Lists from "./db.js";
import '../css/giohang.css'
import list from "./db.js";

const Cart = ({ cart, setCart, handleChange }) => {

  
  const [price, setPrice] = useState(0);
  const [carts , setCarts] = useState([]);
  const [locals , setLocal] = useState([]);
  const [names , setNames] = useState([]);
  const mang  = [];
  const [so , setSo] = useState(1);
  const size = localStorage.getItem("size")
  const mau = localStorage.getItem("mau")
  const soluong = localStorage.getItem("so")
  const local = JSON.parse(localStorage.getItem("vay"))
  let {id} = useParams();

  // const soluong1 = Number(soluong)
  // useEffect(() => {
  //   // setSo([...so , soluong1])
  // },[])

  // localStorage.removeItem("mau")
  
 

  useEffect(() =>{
		Lists.map(list => {
    
			if(list.id == id.split(",")[0]){
        if (cart.indexOf(list) != -1) {
        //   document.querySelector(".addthatbai").style.display ="block";
        //   setTimeout(function(){
        //   document.querySelector(".addthatbai").style.display ="none";
        // }, 2000);
          showErrorToast();
            return;
        }
        else{
          showSuccessToast();
          // document.querySelector(".addthanhcong").style.display ="block";
          // setTimeout(function(){
          //   document.querySelector(".addthanhcong").style.display ="none";
          // }, 2000);
          list = {...list , mau: id.split(",")[3] , size: id.split(",")[2]}
          setCart([ ...cart ,list])
          localStorage.setItem("vay" , JSON.stringify(local.concat(list)))

          local.map(ca => {
            if(ca.id == id.split(",")[0]){
              let myArrayWithNoDuplicates = local.reduce(function (accumulator, element) {
                if (accumulator.indexOf(element) === -1) {
                  accumulator.push(element)
                }
                return accumulator
              }, [])
              localStorage.setItem("vay" , JSON.stringify(myArrayWithNoDuplicates))

            }
            else{
          // localStorage.setItem("vay" , JSON.stringify(local.concat(list)))
              
            }

          })
        }
        
            
          }
        }
        
        )
      }, []) 
      
      // console.log(local)
      // local = Array.from(new Set(local))
 
     
  
  function showSuccessToast() {
    toast({
      title: "Thành công!",
      message: "Thêm Vào Giỏ Hàng Thành Công!!!",
      type: "success",
      duration: 5000
    });
  }

  function showErrorToast() {
    toast({
      title: "Thất bại!",
      message: "Sản Phẩm Đã Có!!",
      type: "error",
      duration: 5000
    });
  }

  function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
      const toast = document.createElement("div");
      console.log(toast)
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
  

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    localStorage.setItem("vay" , JSON.stringify(arr))
   
    setCart([...local,arr])

  };
  // console.log(cart)

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

	// React.useEffect(() => {
	// 	window.scrollTo(0, 0);
	//   });
  
  window.addEventListener("scroll" , function(){
    var Header = document.querySelector('.menu');
    Header.classList.toggle("quy" , window.scrollY >= 0);
   })

    function handerSoluongcong(){
      setSo(Number(so) + 1);
    }

    function handerSoluongtru(){
        if(so > 1 ){
            setSo(so-1);
        }
        else{
            alert("số lượng phải lớn hơn 1");
        }
    }
    
   
   useEffect(() => {
    const check_all =document.querySelectorAll('#check_all');
    // console.log(check_all);
   
   },[])


  return (
    
       <div>
            <div className='addthanhcong'>
          <div>Thêm Thành Công</div>
          <div className='span'></div>
      </div>
  
      <div className='addthatbai'>
          <div>Sản Phẩm Đã Có</div>
          <div className='span1'></div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="toast"></div>
    
      <div className="div_hanhdong" >
    <label for="check_all">Thao Tác: </label>
    <select class="form-control" id="check_all" name="hanhdong" required>
      <option value="">--Chọn Hành Động--</option>
      <option value="delete">Mua</option>
     
    
    </select>
    <button class="btn btn-primary btn-sm button disabled" >Áp dụng</button>

    </div>

      <div class="form-check" >
    <input class="form-check-input" type="checkbox" value="" id="checkbox_all" />
    <label class="form-check-label" for="checkbox_all">
        Chọn Tất cả
    </label>

     </div>

         <table className="table_giohang" >
    
            <tr className="">
              <td><input type="checkbox" /></td>
                <td>STT</td>
                <td>Ảnh</td>
                <td>Name</td>
                <td>Giá</td>
                <td>Số Lượng</td>
                <td>Thành Tiền</td>
                <td>Xóa</td>
                <td>Mua</td>
            </tr>
      {cart.map((item,index) => (
            <tr>
                 <td><input type="checkbox" name="vaysId[]" value={item.id}/></td>
                <td>{index+1}</td>
                <td>
                <img src={item.img} className="img_giohang" alt="" />
                </td>
                <td>{item.name} <br/>Size: {item.size} <br/>Màu: {item.mau} </td>
                <td>{item.Gia}</td>
                <td>
                    <div className='soluong'>
                    <button id='cong' onClick={handerSoluongcong}>+</button>
                    <input value={id.split(",")[1]} id='so' />
                    <button id='tru' onClick={handerSoluongtru}>-</button>
                    </div>
                </td>
                <td>{so * item.Gia}</td>

                <td>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
                </td>
                <td>
                    Mua
                </td>
            </tr>
           
        ))}
        </table>
        </div>
        


    //     <div className="cart_box" key={item.id}>
    //       <div className="cart_img">
    //         <img src={item.img} alt="" />
    //         <p>{item.title}</p>
    //       </div>
    //       <div>
    //         <button onClick={() => handleChange(item, 1)}>+</button>
    //         <button>{item.amount}</button>
    //         <button onClick={() => handleChange(item, -1)}>-</button>
    //       </div>
    //       <div>
    //         <span>{item.price}</span>
    //         <button onClick={() => handleRemove(item.id)}>Remove</button>
    //       </div>
    //     </div>
    //   <div className="total">
    //     <span>Total Price of your Cart</span>
    //     <span>Rs - {price}</span>
    //   </div>
     
  );
};

export default Cart;
