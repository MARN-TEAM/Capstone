import React from 'react'

class AddToBag extends React.Component {
    constructor(props){
        super(props)
        this.state={
outfit:[]
        }

    }
    render() {
        return (
            <div class="">
            <button type="button"  style={{padding : '14px',paddingRight : '50px',paddingLeft : '50px' , border : '0.5px solid black',backgroundColor : 'white' , color : 'Black',fontSize :'13px',fontWeight:'600'}}>Add to bag</button>
           
        </div>
        )
    }
}


export default AddToBag ; 