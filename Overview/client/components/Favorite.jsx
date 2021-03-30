import React from 'react'

class Favorite extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            heart : false
        }
    }

    render() {
        return (
            <div className="">
               {(this.state.heart) ? <i class="fas fa-heart" style={{fontSize:'16px', marginTop:'0px',color:'black' , padding:'15px',border:'1px solid Black',paddingBottom:'15px',paddingTop:'15px',cursor:'pointer'}} onClick={()=>this.setState({heart:!this.state.heart})}></i> : <i onClick={()=>this.setState({heart:!this.state.heart})} class="fas fa-star" style={{fontSize:'16px', marginTop:'0px',color:'black' , padding:'15px',border:'1px solid Black',paddingBottom:'15px',paddingTop:'15px',cursor:'pointer'}}></i>}     
            </div>
        )
    }
}


export default Favorite ; 