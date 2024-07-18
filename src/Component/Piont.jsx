import React from 'react'
 
import img from './assets/yy.png'
import img1 from './assets/rr.png'
export default function Piont({x}) {
    
  return (
    <div>
      <div style={{background:"#585d70",width:"630px",paddingTop:"180px",

     marginLeft:"80px" , }}>
        <h2 style={{textAlign:"center",fontSize:"3.75rem",color:"#fff",

       position:"relative", bottom:"30px"}}>{x}</h2>
    <img src={img} style={{width:"247PX",height:"247px",borderRadius:"50%",

   position:"relative",left:"30px",top:"-20px",objectFit:"cover" }}/>
   
  </div>
    <div style={{background:"#f2f2f2",width:"300px",position:"relative",left:"730px",

   bottom:"670PX", minHeight:"400px"}}>
        <h6 style={{textTransform:"uppercase",

       letterSpacing:"2PX",fontSize:"30PX",position:"relative",top:
       "130px",marginLeft:"25px" }}>ABOUT US</h6>
        <h2 style={{fontSize:"2.25rem",fontWeight:"700" ,marginLeft:"25px",

        marginTop:"140px"}}>Architects'
            <br/> studios</h2>
             
      </div>
       <div>
        <img src={img1} style={{width:"300px",marginLeft:"1050px",position:"relative",

       bottom:"1070px", height:"400px"}}/>
       </div>
 
</div>
    
    
  )
}

