import React from 'react'
import img2 from './assets/rr.png'
import img3 from './assets/tt.png'
export default function Hello() {
  return (
    <div>
      <div>
        <img src={img2} style={{width:"300px",position:"relative",bottom:"850px",

        left:"78px "}}></img>
        <div style={{background:"#f2f2f2", width:"315px" ,minHeight:"450px",

        position:"relative",left:"400px",bottom:"1345px",  
        }}>
            <h4 style={{fontSize:"4rem",fontSize:"30px",textAlign:"center",

           position:"relative",top:"120px" }}>Our team creates &
                <br/> builds ergonomic <br/> and attractive <br/> workplaces.</h4>
            <p style={{position:"relative",top:"120px",textAlign:"center",

           fontSize:"20px" }}>Images from <a href='' style={{color:'black'}}>FreePik</a></p>
            <button style={{color:"#fff",background:"#f52453",border:"none",

           letterSpacing:"2px" ,fontSize:"0.875px",textAlign:"center",fontSize:"700",
           padding:"9PX 31PX 10PX 30PX",borderRadius:"10PX",position:'relative',
           left:'60PX',top:"130px" }}>LERARN MORE</button>
        </div>
        <div style={{background:"#f52453",color:"#fff",width:"580px",paddingTop:'130px',

      paddingBottom:"-10PX",  position:"relative", left:"744px",bottom:"2000px",paddingLeft:
      "30px" }}>
            <h3 style={{marginLeft:'300px',fontSize:"2.25rem" ,lineHeight:"1.42857",height:'200px',

            fontWeight:'700',width:"470px",position:"relative",bottom:'70px',
            left:"-210px"}}>We are an international  design practice 
                that believes  in the transformative power of  design.</h3>
<img src={img3} style={{width:'247px',height:"247px",objectFit:"cover",borderRadius:"50%",

position:"relative",left:"300px",bottom:"50px"}}/>
        </div>
      </div>
    </div>
  )
}
