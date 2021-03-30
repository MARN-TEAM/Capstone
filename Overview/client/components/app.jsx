import React from 'react'
import {token} from '../../config.js'
import Structure from './Structure.jsx'
import $ from 'jquery'

class App extends React.Component{
   constructor(props){
       super(props)
       this.state={
       }
   }
 
   interaction(event){
            $.ajax({
                url:'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/interactions',
                data:JSON.stringify({element : event.target.toString() , widget : 'product',time:new Date(Date.now())}),
                type: 'POST',
                contentType:'application/json',
                headers:{"Authorization":token},
                success:(data)=>{
                    console.log(data)
                }
            })
   }

    render(){
        return(
            <div onClick={(e)=>this.interaction(e)}>
           
            <Structure/>
            </div>
        )
    }
}

export default App;