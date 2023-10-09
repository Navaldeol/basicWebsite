import React, { useState, useEffect } from 'react';
function App() {
  let obj1 = {"34370 Eucalyptus Ter Fremont, CA 94555": "https://mediarem.metrolist.net/metrolist/listingpics/bigphoto/2023/08/17/3bd88966-0ab7-4e44-9bd4-6da0bbf5c1fe.jpg", "934 Mettler Rd Lodi, CA 95242" : "https://mediarem.metrolist.net/metrolist/listingpics/bigphoto/2023/10/06/4f271700-86a9-4d72-9798-569c14c8dfa9.jpg"}
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
    
     useEffect(()=>{
      let domParser = new DOMParser();
       async function futch(){
        await fetch("https://www.metrolist.com/Real-Estate-Agent/89193/SukhDeol", {
            credentials: "same-origin",
            
        }).then((response) => response.text())
        .then((text)=>{
            
            let htmlDoc = domParser.parseFromString(text,"text/html");
            
           // console.log(allText);
            let f = htmlDoc.getElementsByClassName('row active-sold-listing-item');
            let tempObj ={}
            
            
            for (let i=0;i<f.length;i++){
                let address = f[i].getElementsByTagName("p")[0].outerText
                let URL = f[i].getElementsByTagName("img")[0].getAttribute("src")
                tempObj[address] = URL
            }
            console.log(tempObj)
            setObj(tempObj);
        })
        .catch((err)=>{
            console.log(err);
        })
      }
      futch()
    }, [])
      
    return( 
      <div className="slideshow-container">
        <div style={{ maxWidth: "1000px",position: "relative",margin: "auto"}}>
        <img src={obj[Object.keys(obj)[count]]}/> 
        <div className="text"> {Object.keys(obj)[count]}</div>
        <a style={{cursor: "pointer", position: "absolute",top: "50%",width: "auto",marginTop: "-22px", padding: "16px",color: "white",fontWeight: "bold",fontSize: "18px",transition: "0.6s ease",borderRadius:"0 3px 3px 0",userSelect: "none"}} onClick={()=>{handleIncriment(-1)}}></a>
        <a style={{cursor: "pointer", position: "absolute",top: "50%",width: "auto",marginTop: "-22px", padding: "16px",color: "white",fontWeight: "bold",fontSize: "18px",transition: "0.6s ease",borderRadius:"0 3px 3px 0",userSelect: "none",right: "0",borderRadius: "3px 0 0 3px"}} onClick={()=>{handleIncriment(1)}}></a>
        </div>
      </div>
    )
}

export default App;
