import React, { Component } from 'react'

class Rating extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  RatingStars(averageRate){
    var storage=[]
    for(var i=0;i<5;i++){
        if(averageRate>1){
            storage.push(1)
        }else if(averageRate>0){
            storage.push(averageRate)
        }else{
            storage.push(0)
        }
        averageRate--
    }
    var Stars=<div>
    {storage.map((e,i)=>{
        if((e==1)){
            return(<i className="fa fa-star" key={i}></i>)
        }else {
            return(
<i className="fa fa-star Colored-Star-rating" key={i}
style={{background: "linear-gradient(90deg,#525252 "+Number(e*100)+"%, white "+Number(e*100)+"%)",
BackgroundClip:"text",
TextFillColor:"transparent",
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
color:"transparent"}}>
</i>)
        }
    } )}
</div>
return Stars
}
    render() {
        return (
            <div className="position-star-rating row">
      
   <div style={{fontSize:"9px"}} >{this.RatingStars(2.5)}</div> 
    <h6 className="rating-sent-pos" >Read all reviews</h6>
            </div>
        )
    }
}

export default Rating ;