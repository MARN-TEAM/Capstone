import React from 'react'


class Infos extends React.Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <div>
                {this.props.data.map((element,i)=>
                    <div key={i}>
                     <h6 className="category-font row infos-position catcat-posi " >{element.category}</h6>
                     <h5  className="category-font row infos-position name-font-size catcat-posi " >{element.name}</h5>
                     <h6  className="category-font row infos-position pricoux " >{element.default_price}$</h6>
                     </div> 
                 )}
             
            </div>
        )
    }
}
export default Infos ;