import React, { useState, useEffect } from 'react';
function App() {
  let obj1 = {"3136 Sylvan Ave Modesto, CA 95355": ["https://mediarem.metrolist.net/metrolist/listingpics/bigphoto/2024/06/17/3e173bff-7e73-4cfd-a0f6-3b92a6820a97.jpg","https://www.zillow.com/homedetails/3136-Sylvan-Ave-Modesto-CA-95355/16064807_zpid"], "4013 Dale Rd #D Modesto, CA 95356": ["https://mediarem.metrolist.net/metrolist/listingpics/bigphoto/2024/06/07/85a1a044-47c1-4d88-bc55-899f6328e912.jpg","https://www.zillow.com/homedetails/4013-Dale-Rd-APT-D-Modesto-CA-95356/351819929_zpid"], "3002 Andre Ln Turlock, CA 95382": ["https://mediarem.metrolist.net/metrolist/listingpics/bigphoto/2024/06/07/d78422c7-a7a7-4d51-ab0c-dd90a91d449d.jpg","https://www.zillow.com/homedetails/3002-Andre-Ln-Turlock-CA-95382/16046753_zpid"], "2270 Bentley Ln Tracy, CA 95376": ["https://mediarem.metrolist.net/metrolist/listingpics/bigphoto/2024/05/17/b5ecac11-0c7f-478f-a5be-c94ff8207e94.jpg","https://www.zillow.com/homedetails/2270-Bentley-Ln-Tracy-CA-95376/15377751_zpid/"], "34370 Eucalyptus Ter Fremont, CA 94555": ["https://mediarem.metrolist.net/metrolist/listingpics/bigphoto/2023/08/17/3bd88966-0ab7-4e44-9bd4-6da0bbf5c1fe.jpg","https://www.zillow.com/homedetails/34370-Eucalyptus-Ter-Fremont-CA-94555/25059402_zpid/"], "934 Mettler Rd Lodi, CA 95242" : ["https://mediarem.metrolist.net/metrolist/listingpics/bigphoto/2023/10/06/4f271700-86a9-4d72-9798-569c14c8dfa9.jpg","https://www.zillow.com/homedetails/934-Mettler-Rd-Lodi-CA-95242/2095300613_zpid/"]}
    const [count,setCount] = useState(0);
    const [obj,setObj] = useState(obj1)
    function handleIncriment(val){
    if(count + val <0){
      setCount(Object.keys(obj1).length -1);
      return
    }
    if (count + val > Object.keys(obj1).length -1){
      setCount(0)
      return
    }
    setCount(count + val)
  }
    
 //    useEffect(()=>{
 //     let domParser = new DOMParser();
  //     async function futch(){
  //      await fetch("https://www.metrolist.com/Real-Estate-Agent/71349/EmadBasma", {
  //          credentials: "same-origin",
  //          Cookie: "AnonKey=e2348729-ce59-4de6-8aba-421217f90cc9; userInfo=Referer=direct",
  //         
            
 //       }).then((response) => response.text())
  //      .then((text)=>{
            
  //          let htmlDoc = domParser.parseFromString(text,"text/html");
            
           // console.log(allText);
  //          let f = htmlDoc.getElementsByClassName('row active-sold-listing-item');
   //         let tempObj ={}
            
            
    //        for (let i=0;i<f.length;i++){
    //            let address = f[i].getElementsByTagName("p")[0].outerText
    //            let URL = f[i].getElementsByTagName("img")[0].getAttribute("src")
    //            tempObj[address] = URL
    //        }
    //        console.log(tempObj)
    //        setObj(tempObj);
    //    })
    //    .catch((err)=>{
     ///       console.log(err);
    //    })
    //  }
    //  futch()
    //}, [])
      
    return( 
      <div className="slideshow-container">
       
        
        <div style={{}}>
        <a style={{zIndex: "auto", cursor: "pointer", position: "absolute",top: "50%",width: "auto",marginTop: "-22px", padding: "16px",color: "black",fontWeight: "bold",fontSize: "18px",transition: "0.6s ease",borderRadius:"0 3px 3px 0",userSelect: "none"}} onClick={()=>{handleIncriment(-1)}}> Previous</a>
        <img style={{width: "100%", height: "auto"}}src={obj[Object.keys(obj)[count]][0]}/> 
        <a style={{zIndex: "auto", cursor: "pointer", position: "absolute",top: "50%",width: "auto",marginTop: "-22px", padding: "16px",color: "black",fontWeight: "bold",fontSize: "18px",transition: "0.6s ease",borderRadius:"0 3px 3px 0",userSelect: "none",right: "0",borderRadius: "3px 0 0 3px"}} onClick={()=>{handleIncriment(1)}}> Next</a>
        
        </div>
        <div class="re-text-title" style={{fontSize: "2vw"}}>{Object.keys(obj)[count]}</div>
        <div class="re-link">
        <a href={obj[Object.keys(obj)[count]][1]} target="_blank" title="Visit Zillow" rel="noopener">Visit Zillow</a>
        </div>
      </div>
    )
}

export default App;
