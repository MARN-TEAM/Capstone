import React from 'react';

class Colors extends React.Component {
    constructor(props){
        super(props)
        this.state={
            index:0
        }
    }
  
   handleClick(i,e){
        this.setState({index:i})
this.props.changeSelected(i)
const accordionItems = [...document.getElementsByClassName('accordion-item')]
console.log(accordionItems,"dzdzdz")
accordionItems.forEach(accordionItem => {
  accordionItem.classList.remove('circle-clicked')
})
e.target.classList.add('circle-clicked')
    }


    render() {
 console.log(this.props.organised,"orggg")
        if (this.props.organised.length>0){
            return (

                <div className="styling-pos"> 
         
        
                 <div>Style : {this.props.organised[this.state.index].color}</div>
                
                     <div className="circle-pos-pos">
                     <div className="row">
                     <div className="circle accordion-item" onClick={(e)=>this.handleClick(0,e)}></div>
                     <div className="circle2 accordion-item"onClick={(e)=>this.handleClick(1,e)}></div>
                     <div className="circle3 accordion-item"onClick={(e)=>this.handleClick(2,e)}></div>
                     <div className="circle4 accordion-item"onClick={(e)=>this.handleClick(3,e)} ></div>
                     </div>
                     <div className="row">
                     <div className="circle5 accordion-item"onClick={(e)=>this.handleClick(4,e)} ></div>
                     <div className="circle6 accordion-item"onClick={(e)=>this.handleClick(5,e)} ></div>
                     </div>
                     </div>
         
                    </div>

            )
        }else{
            return <div></div>
        }}
        
        }

export default Colors ;