import React from 'react'

class Size extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
    render() {
      console.log("yy",this.props.organised)
      
  if (this.props.organised.length>0){
    
        return (

         
          <div className=" col-md-8">
            <select className="select-size" onChange={(e)=>this.props.selectedSize(e.target.value)}  style={{width:'150px',height:'45px'}}>
 {this.props.organised[this.props.selectedIndex].sizexquantity.map((element,i)=>
   <option value={i}  key={i}>{element.size}</option>
 )}
  </select>

     
          </div>
        )
    }else{
      return <div></div>
    }}
}

export default Size ;