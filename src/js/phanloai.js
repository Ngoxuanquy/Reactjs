import React from "react";
import { ReactDOM } from "react";
import List from "./db.js";
import Card from "./cart.js";
import '../css/phanloai.css'
import {  Link ,NavLink } from "react-router-dom";
import {useEffect} from 'react'

function Phanloai() {

    
	React.useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		  })
	  });

    window.addEventListener("scroll" , function(){
      var Header = document.querySelector('.menu');
      Header.classList.toggle("quy" , window.scrollY > -1);
    })
    
    // useEffect(() => {
    //   window.addEventListener("scroll" , function(){
    //     if(window.scrollY > 1200 ) {
    //       this.document.getElementById("list_phanloai").style.top ="0";
    //     }
    //     })
    // },[])


        return (
           <div className="form_phanloai">
              
              <div className="list_phanloai" id="list_phanloai" >
                    <li >
                      <div >
                      <NavLink to={`/phanloai`}  activeClassName='active' style={{color: "black"}} >
                        Váy Mùa Hè
                      </NavLink>
                      </div>
                    </li>
                    <li>
                      <div>
                      <NavLink to={`/phanloai`}  activeClassName='active' style={{color: "black"}}>
                        Váy Dự Tiệc
                      </NavLink>
                      </div>
                    </li>
                    <li>
                      <div>
                      <NavLink to={`/phanloai`}  activeClassName='active' style={{color: "black"}}>
                        Chân Váy
                      </NavLink>
                      </div>
                    </li>
                    <li>
                      <div>
                      <NavLink to={`/phanloai`}  activeClassName='active' style={{color: "black"}}>
                        Túi
                      </NavLink>
                      </div>
                    </li>
                    <li>
                      <div>
                      <NavLink to={`/phanloai`}  activeClassName='active' style={{color: "black"}}>
                        Giày - Dép
                      </NavLink>
                      </div>
                    </li>
                    <li>
                      <div>
                      <NavLink to={`/phanloai`}  activeClassName='active' style={{color: "black"}}>
                        Váy Dự Tiệc
                      </NavLink>
                      </div>
                    </li>
                    <li>
                      <div>
                      <NavLink to={`/phanloai`}  activeClassName='active' style={{color: "black"}}>
                        Váy Dự Tiệc
                      </NavLink>
                      </div>
                    </li>

                
                
                  </div>
                <div className='list_img_phanloai'>
            <div className='font_phanloai'>
              {List.map((item) => (
                  <Card item={item}  />
                ))}
            </div>
          </div>
                
            
           </div>
        )
}

export default Phanloai