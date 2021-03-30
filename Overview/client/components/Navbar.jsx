import axios from 'axios'
import React from 'react'
import {token} from '../../config.js'

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            search:[],
            data:[]
        }
this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        if(e.target.value == ''){
            this.setState({search:[]})
            return
        }
        var data=this.state.data
        var storage=[]
      for (var i=0;data.length>i;i++){
          if(data[i].name.toLowerCase().includes(e.target.value.toLowerCase())){
              storage.push(data[i])
          }
      }
      this.setState({search:storage})
    }
    componentDidMount(){
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products',{    
            headers:{
            Authorization: token
        }
    })
    .then((res)=>
    this.setState({data:res.data}))
    }

 
    render() {
        return (
            <div >
                <nav className="navbar navbar-light bg-light justify-content-between " >
                <a className="navbar-brand logo-colorrrr" style={{color:"white"}}>Capstone</a>
                <form className="form-inline">
                   <input onChange={(e)=>this.handleChange(e)} className="input-styling"  ></input>
                   <button className="fa fa-search" style={{backgroundColor:"transparent" , color:"white" , border:"none", padding:"16px 19px"}}></button>


                  
                </form>
                </nav>
                <div className="search-result"> {this.state.search.map((e,i)=> 
<div className="search-element" onClick={()=>this.props.changeId(e.id)} >{e.name}</div>)}
</div>
          </div> 
        )
    }
}

export default  Navbar ;