import React from 'react'
import Reviews from './Reviews.jsx';
import $ from 'jquery';
import {token} from '../../config'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    interaction(event){
        $.ajax({
            url:'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/interactions',
            data:JSON.stringify({element : event.target.toString() , widget : 'Reviews',time:new Date(Date.now())}),
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
                <Reviews />
            </div>
        )
    }
}

export default App;