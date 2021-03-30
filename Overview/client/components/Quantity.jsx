import React from 'react'

class Quantity extends React.Component {
    constructor(props){
        super(props)
this.state={
    quantities:[]
}
    }
   
    render() {
       
if(this.props.organised.length>0){
    var arr=[]
    var value =this.props.organised[this.props.selectedIndex].sizexquantity[this.props.selectedSize].quantity
    for (var i=0;i<value;i++){
arr.push(i)
    }
    
        return (
            <div className=" col-md-4">
       <select className="select-quantity" style={{width:'60px',height:'45px',marginLeft:'-10px'}}> 
 {arr.map((element,i)=>
 <option value={i+1} key={i}>{element+1}</option>)} 
 </select>

            </div>
        )
    }else{
        return <div></div>
    }}
}


export default Quantity ; 