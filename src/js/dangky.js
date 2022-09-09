import React from "react";
import '../css/dangky.css'
import {useState, useEffect} from 'react'
import {  Link ,NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

    

function Dangky() {
    let history = useHistory()
    React.useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		  })
	  });

      window.addEventListener("scroll" , function(){
		var Header = document.querySelector('.menu');
		Header.classList.toggle("quy" , window.scrollY > 0);
	})

    var gmail_dk ="";
    var pass_dk ="";
    var re_pass_dk = "";
    var name = "";

    function handerDangKy() {
         gmail_dk = document.querySelector('input[name="gmail"]').value
         pass_dk  = document.querySelector('input[name="pass"]').value
         re_pass_dk = document.querySelector('input[name="re_pass"]').value
         name = document.querySelector('input[name="name"]').value


        if(pass_dk != re_pass_dk ){
            document.querySelector('.show').style.display = "block"
        }
        else{
            document.querySelector('.show').style.display = "none"

        }
        if(pass_dk.length < 6) {
            document.querySelector('.show6').style.display = "block"

        }
        else{
            document.querySelector('.show6').style.display = "none"
        }
        fetch('http://localhost:3000/login')
        .then(res => res.json())
        .then((login) => {
            login.map(lo => {
                if(lo.gmail == gmail_dk){
                //    alert("Gmail đã đăng ký!!"); 
                }
                
                
            })
        })
        if(pass_dk == re_pass_dk && gmail_dk != '' && pass_dk.length >= 6) {
            document.querySelector('.phu').style.display = "block"
            document.querySelector('.phu_dn').style.display = "none"
            alert('Đăng ký thành công!!');
            var loginApi = "http://localhost:3000/login";

                var formData = {
                    name : name,
                    gmail: gmail_dk,
                    matkhau : pass_dk
                };

            var options = {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(formData)
            };
    
            fetch(loginApi , options)
            .then(function(res) {
                return res.json();
            })
            .then(function(res) {
                // console.log(res)
            })
        
        }
       
      
        }
       
    
  
    function handerDangNhap(){
        var gmail_dn = document.querySelector('input[name="gamil_dn"]').value
        var mk_dn = document.querySelector('input[name="mk_dn"]').value
       
        fetch('http://localhost:3000/login')
        .then(res => res.json())
        .then((login) => {
            login.map(lo => {
                if(lo.gmail == gmail_dn && mk_dn == lo.matkhau){
                history.goBack()
                localStorage.setItem("user" , lo.name )
            }
            else{
                // alert("sai mạt khẩu")
                  document.querySelector('#taikhoan').style.display = "block"
                  document.querySelector('#matkhau').style.display = "block"


            }
            })
        })
    }

   useEffect(() => {
    
   },[])
   

   useEffect(()=>{
   
   },[])

    function quaylai(){
        document.querySelector('.phu').style.display = "none"
            document.querySelector('.phu_dn').style.display = "block"
    }
    window.addEventListener("scroll" , function(){
        var Header = document.querySelector('.menu');
        Header.classList.toggle("quy" , window.scrollY >= 0);
       })
    
       function quaylai_dn(){
        document.querySelector('.phu').style.display = "block"
            document.querySelector('.phu_dn').style.display = "none"
    }


  
    
    return(
        <>
	<div class="wrapper">
    <ul class="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
	</div>

           <div className="card_dk">
           
                <div className="dangky">
            <div className="phu">
            <h2 style={{color: "coral" , marginTop: "30px"}}>Create your account</h2>
            <a href="#" class="btn btn-social btn-facebook"><i class="fa fa-facebook"></i> <label id="fb">Sign in with Facebook</label></a>
            <a href="#" class="btn btn-social btn-twitter"><i class="fa fa-twitter"></i><label id="fb"> Sign in with Twitter </label></a>
            <a href="#" class="btn btn-social btn-google"><i class="fa fa-google"></i><label id="fb">  Sign in with Google </label></a>
            <a href="#" class="btn btn-social btn-linkedin"><i class="fa fa-linkedin"></i> <label id="fb"> Sign in with Linkedin </label></a>
            
            </div>

                    <label>Đăng Ký</label>
                    <div>
                        <input placeholder="Tên Đăng Nhập" name="name"/>
                    </div>
                    <div>
                        <input placeholder="Gmail" type="email" name="gmail"/>
                    </div>
                    <div>
                        <input placeholder="Mật Khẩu" type="password" name="pass"/>
                    </div>
                    <div>
                        <input placeholder="Nhập Lại Mật Khẩu" type="password" name="re_pass"/>
                        <div className="show">Mật khẩu chưa trùng</div>
                        <div className="show6">Mật khẩu ít nhất 6 ký tự</div>

                    </div>
                   
                    <button onClick={handerDangKy} id="dangky"> Đăng Ký </button>
                    <div onClick={quaylai_dn} id="ql_dn"> Bạn đã có tài khoản </div>

                
                </div>
             
                <div className="dangnhap">
            <div className="phu_dn">
            <h2 style={{color: "coral" , marginTop: "30px"}}>Create your account</h2>
            <a href="#" class="btn btn-social btn-facebook"><i class="fa fa-facebook"></i> <label id="fb">Sign in with Facebook</label></a>
            <a href="#" class="btn btn-social btn-twitter"><i class="fa fa-twitter"></i><label id="fb"> Sign in with Twitter </label></a>
            <a href="#" class="btn btn-social btn-google"><i class="fa fa-google"></i><label id="fb">  Sign in with Google </label></a>
            <a href="#" class="btn btn-social btn-linkedin"><i class="fa fa-linkedin"></i> <label id="fb"> Sign in with Linkedin </label></a>
            </div>
                    
                    <label style={{fontSize: "30px"}}> Đăng Nhập</label>
                    <div>
                        <input placeholder="Gmail" type='email' name="gamil_dn"/>
                        <div id="taikhoan">Sai tài khoản</div>
                    </div>
                    <div>
                        <input placeholder="Mật Khẩu" type="password" name="mk_dn"/>
                        <div id="matkhau">Sai Mật Khẩu</div>
                    </div>
                    <button onClick={handerDangNhap} id="dangnhap" > 
                    {/* <a href="/"   > */}
                      Đăng Nhập 
                    {/* </a> */}
                    </button>
                    <div onClick={quaylai} id="ql_dk"> Bạn chưa có tài khoản </div>
                </div>
                </div>
           
        </>
    )
}

export default Dangky