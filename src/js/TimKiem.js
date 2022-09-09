import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' 
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Lists from './db.js';
import {  Link ,NavLink } from "react-router-dom";
import '../css/timkiem.css'
import list from './db.js';



function Timkiem() {
  const [names , setnames] = useState([]);
  const [ob , setOj] = useState([]);



  React.useEffect(() => {
		window.scrollTo(0, 0);

	  },[]);
	  

    window.addEventListener("scroll" , function(){
        var Header = document.querySelector('.menu');
        Header.classList.toggle("quy" , window.scrollY > -1);
       })
       
       let {id} = useParams();
      
      useEffect(() => {
        Lists.find(list => {
          if(list.name !== id){
            return;
          }
          setnames(pre => [...pre , list]);
         
     
          // document.write(`
               
          //   <div className="container" >
          //          <div className="column1">
          //            <div className="post-module">
          //              <div className="thumbnail">
          //                <div className="date">
          //                  <div className="day">-17%</div>
                        
          //                </div>
          //                <NavLink to={"/vays/${list.id}"} activeClassName='active' >
                  
          //                  <img src="${list.img}" />
          //                  </NavLink>
          //              </div>
          //              <div className="post-content">
          //                <div className="category"  >Photos</div>
          //                <label className="title">${list.name}</label>
          //                <label className="sub_title">${list.Gia}đ</label>
                       
                     
          //                <button  className="addcart">
        
          //                  Add to Cart 
          //                </button>
                   
          //                <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
          //                <div className="post-meta"><span className="timestamp"><i class="fa fa-clock-">o</i>
          //                    6 mins ago</span><span className="comments"><i class="fa fa-comments"></i><a href="#">39 comments</a></span></div>
          //              </div>
          //            </div>
          //          </div>
        
          //  </div>`
          //  )


          }
        )
       },[])
 

    //  useEffect(() => {
    //   Lists.forEach(function(list,index) {
    //     if(list.name === id){
    //       console.log(list)
    //       setnames([ ...names , list ]);

    //     }
    //   })
    //  },[])
        
 
 
 

     
    
              
       


    return (
        <div className='form_container'>
       
        <div></div>

        <div className='html'> </div>
        {names.map(name => 
   
          
    <div className='container'>
           <div class="column1">
             <div class="post-module">
               <div class="thumbnail">
                 <div class="date">
                   <div class="day">-17%</div>
                
                 </div>
                 <NavLink to={`/vays/${name.id}`} activeClassName='active' >
          
                   <img src={name.img} />
                   </NavLink>
               </div>
               <div class="post-content">
                 <div class="category"  >Photos</div>
                 <label class="title">{name.name}</label>
                 <label class="sub_title">{name.Gia}đ</label>
               
             
                 <button  className="addcart">

                   Add to Cart 
                 </button>
           
                 <p class="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                 <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-">o</i>
                     6 mins ago</span><span class="comments"><i class="fa fa-comments"></i><a href="#">39 comments</a></span></div>
               </div>
             </div>
           </div>

   </div>
   
        )}
   <div></div>
   </div>

    )
}

export default Timkiem