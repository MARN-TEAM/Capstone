import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

export class Photo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // yes: this.props.data.answers[Object.keys(this.props.data.answers)[0]].photos,
        }
    }
    render() {
        const { data } = this.props
        return (
            <div className='container'>
                <p>Yes, as you can see in these photos.</p>
                {/* {this.props.data.results[Object.keys(data.answers)[0]].photos}
                {data.map(e => <div className='row'>
                    <div className='col-2-md'>
                        <Image src={e.photos} size='small' />
                    </div>
                    <div className='col-2-md'>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                    </div>
                    <div className='col-2-md'>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                    </div>
                </div>)}
                 <div className='col-md' className='one-Question-Helpful'>
                                by User1337 -Seller, May 1,2019  <div className="Vertical-Line"></div>  Helpful?
                                    <button type="button" className="btn btn-link Yes-button-one-Question" onClick={() => {this.setState({yes: this.state.yes+1})}}>
                                    Yes
                                        <p className='Count-Helpful-Yes'>({data.answers[Object.keys(data.answers)[0]].photos , this.state.yes})</p>
                                    </button>
                                    <div className="Vertical-Line">
                                    </div>
                                    <button type="button" className="btn btn-link report-button-one-Question">Report</button>
                        </div> */}
            </div>
        )
    }
}

export default Photo
 