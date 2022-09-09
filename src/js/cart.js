import React  from "react";
import {  Link ,NavLink } from "react-router-dom";


const Card = ({item ,handleClick}) => {
     const {id , name , img,Gia ,gioithieu} = item;

   

     return (
 
         <div className='form_container'>

             <div></div>
         <div className='container'>
                <div class="column">
                  <div class="post-module">
                    <div class="thumbnail">
                      <div class="date">
                        <div class="day">-17%</div>
                        {/* <div class="month">%</div> */}
                      </div>
                      <NavLink to={`/vays/${item.id}`}  activeClassName='active' >
               
                        <img src={item.img} />
                        </NavLink>
                    </div>
                    <div class="post-content">
                      <div class="category"  >Photos</div>
                      <label class="title">{item.name}</label>
                      <label class="sub_title">{item.Gia}đ</label>
                    
                  
                      <button onClick={() => handleClick(item)} className="addcart" id="addcart">

                        Add to Cart 
                      </button>
                
                      <p class="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                      <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-">o</i>
                          6 mins ago</span><span class="comments"><i class="fa fa-comments"></i><a href="#">39 comments</a></span></div>
                    </div>
                  </div>
                </div>

        </div>
        
        <div></div>
        </div>

     
   
     )
}

export default Card