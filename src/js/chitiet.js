import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' 
import {useState} from 'react'
import {useEffect } from 'react'
import Slider from "react-slick"
import '../css/Chitiet.css'
import { NavLink, useParams } from 'react-router-dom';
import App from '.././index.js'
import Lists from './db.js'
import AOS from "aos";
import "aos/dist/aos.css";
import List from './db.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card  from './cart.js'


function ChiTiet(props) {

	AOS.init();

	React.useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		  })
	  });

	  const settings = {
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 3,
		 autoplay: true,
		autoplaySpeed: 1000,
		
	  };
	 

    let {id} = useParams();
    const [so , setSo] = useState(1);
    const [name , setName] = useState('');
    const [names , setNames] = useState([]);
	const [sizes , setSizes ] = useState('');
	const [maus , setMaus ] = useState('');
 	const test_mang = [];
	const [Danhgia , setDanhgia] = useState([]);

	

	useEffect(() =>{
		Lists.map(list => {
			if(list.id == id){
				setNames([...names, list])
			}
		})
	}, []) 



    function handerSoluongcong(){
        setSo(so+1);
    }

    function handerSoluongtru(){
        if(so > 1 ){
            setSo(so-1);
        }
        else{
            alert("số lượng phải lớn hơn 1");
        }
    }

	window.addEventListener("scroll" , function(){
		var Header = document.querySelector('.menu');
		Header.classList.toggle("quy" , window.scrollY > -1);
	})

	
	var size ="";

	function handerChaneSize(size) {
		size = document.getElementById('size').value
		setSizes( size)
		// localStorage.setItem("size" , size)
	}
	console.log(sizes)
	

	function handerChaneMau() {
		var mau = document.getElementById('mau').value
		localStorage.setItem("mau" , mau)
		setMaus(mau)
	}
	
	localStorage.setItem("so" , so)
	

	// function changeImage(id) {
	// 		let Img = document.getElementById(id).getAttribute('src');
	// 		document.getElementById(id).style.border = "3px solid coral";
	// 		document.getElementById("img_chinh").setAttribute('src', Img);
	// }


	
		var danhgiaApi = "http://localhost:3000/danhgia";


	function start() {
		getApi(function(danhgia){
			readerDanggia(danhgia);
		});

		handerCreate();
		

	}
	start();

	function getApi(callback){
		fetch(danhgiaApi)
		.then(function(res) {
			return res.json()
		})
		.then(callback);
	}
	

	function readerDanggia(danhgia) {
		var ul_danhgia = document.querySelector('#ul_danhgia')
		var curDate = new Date();
		var html = danhgia.map(function(danh) {
			
			return `
				<li class="li_dangia"> 
					<p class="name">${danh.title}   </p>
					<lable id="like">
					Thích
					Trả lời 
					<lable id="giay"> ${(curDate.getSeconds() - danh.curDate) }-Giây </lable>
					</lable>
					<i class="fa-solid fa-ellipsis" id="bacham">
					<div id="delete"> 
					<div onClick={update(${danh.id})} id="update"> Sửa </div>
						<div  onclick=handerDelete(${danh.id}) > Xóa </div>
					</div>
					</i>
				</li>
			`
		 })

		 ul_danhgia.innerHTML = html.join('');

		}

	

		
			// function handerDelete(id) {
			// 	console.log("aa")
			// 	// var danhgiaApi = "http://localhost:3000/danhgia";
			// 	var options = {
			// 	  method: 'DELETE', 
			// 	  headers: {
			// 		'Content-Type': 'application/json'
			// 		}
			// 	};
			
			// 	fetch(danhgiaApi + '/' +id , options)
			// 	.then(function(res) {
			// 	  return res.json();
			// 	})
			// 	.then(function(){
			// 	  getApi(function(danhgia){
			// 		readerDanggia(danhgia);
			// 	  });
			// 	})
			//   }
		

	function createDG(data , callback){
		var options = {
			method: 'POST', 
			headers: {
				'Content-Type': 'application/json'
			  },
			body: JSON.stringify(data)
		};

		fetch(danhgiaApi , options)
		.then(function(res) {
			return res.json();
		})
		.then(callback)
	
	
	}


	function handerCreate(){
		var createBtn = document.querySelector("#create");
		window.onload = function(){
			createBtn.onclick=function(){
				var name = document.querySelector('input[name="input"]').value
				var curDate = new Date();
				if(name != "" ){
					var formData = {
						title: name,
						curDate: curDate.getSeconds()
					};
					
					createDG(formData , function() {
						getApi(function(danhgia){
							readerDanggia(danhgia);
						});
					})
				}
				
				document.querySelector('input[name="input"]').value ="";
			}
		}
	}
	
     return(
        <div className='box'>
			    <div className='addthanhcong'>
          <div>Thêm Thành Công</div>
          <div className='span'></div>
    	</div>
  
		<div className='addthatbai'>
			<div>Sản Phẩm Đã Có</div>
			<div className='span1'></div>
		</div>
			{names.map(name => (	
           <section class="product">
		<div class="product__photo">
			<div class="photo-container">
				<div class="photo-main">
					
					<img src={name.img}  id='img_chinh'/>
				</div>
				<div class="photo-album">
					<ul>
						<li><img src={name.img} id="thu1"  onMouseMove={() => {
								let Img = document.getElementById('thu1').getAttribute('src');
								document.getElementById("thu1").style.border = "3px solid coral";
								document.getElementById("img_chinh").setAttribute('src', Img);
							
						}}   /></li>
						<li><img src={name.img_phu1}  id="thu2" onMouseMove={() => {
								let Img = document.getElementById('thu2').getAttribute('src');
								document.getElementById("thu2").style.border = "3px solid coral";
								document.getElementById("img_chinh").setAttribute('src', Img);
							
						}}  /></li>
						<li><img src={name.img_phu2}  id="thu3"  onMouseMove={() => {
								let Img = document.getElementById('thu3').getAttribute('src');
								document.getElementById("thu3").style.border = "3px solid coral";
								document.getElementById("img_chinh").setAttribute('src', Img);
							
						}}  /></li>
						<li><img src={name.img_phu3}  id="thu4"  onMouseMove={() => {
								let Img = document.getElementById('thu4').getAttribute('src');
								document.getElementById("thu4").style.border = "3px solid coral";
								document.getElementById("img_chinh").setAttribute('src', Img);
								
						}}  /></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="product__info">
			<div class="title">
				<h1>Delicious Apples</h1>
				<span>COD: 45999</span>
			</div>
			<div class="price">
				đ <span>{name.Gia}</span>
		</div>
			<div class="variant">
		<h3>SELECT A COLOR</h3>
			
				<ul>
						Size: 
					<select name="size" id='size' className='size' onChange={handerChaneSize} data-aos="fade-right">
						<option>S</option>
						<option>M</option>
						<option>L</option>
						<option>XL</option>
						<option>XXL</option>
						<option>XXXL</option>
					</select>
				
					Màu:
					<select name="mau" id='mau' onChange={handerChaneMau} data-aos="fade-left">
						<option>Đen</option>
						<option>Hồng</option>
						<option>Xanh</option>
						<option>Trắng</option>
						<option>Tím</option>
						<option>Vàng</option>
					</select>
			
					</ul>
				
	
		</div>
        <div className='soluong'>
            <button id='cong' onClick={handerSoluongcong}>+</button>
            <input value={so} id='so' />
            <button id='tru' onClick={handerSoluongtru}>-</button>
        </div>
		<div class="description">
			<h3>BENEFITS</h3>
			<ul>
				<li>Apples are nutricious</li>
				<li>Apples may be good for weight loss</li>
				<li>Apples may be good for bone health</li>
				<li>They're linked to a lowest risk of diabetes</li>
			</ul>
		</div>
        <NavLink to={`/giohang/${id},${so},${sizes},${maus}`}  >
		<button class="buy--btn" data-aos="fade-up" >ADD TO CART</button>
        </NavLink>
	</div>
</section>

))}
	<div className='card_dahgia'>
			<h3>Đánh Giá Sản Phẩm</h3>
			<input placeholder='Sản Phẩm tốt quá!!' name='input' />
			<button id='create'>Gửi </button>
			<button id='update'>Sửa </button>

			<div id='ul_danhgia'> 
				
			</div>
	</div>
	
		 <div className='list_img1'>
                      <h4>Sản Phẩm Tương Tự</h4>
                <div className='font1'>
                  <Slider {...settings}>
                  {List.map((item) => (
                    <div className='chia_gird'>
                      <Card item={item}  />
                    </div>
                    ))}
                </Slider>
                </div>
                </div>
				
			</div>
			

     )
}


export default ChiTiet 