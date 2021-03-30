import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, TextArea } from 'semantic-ui-react';
import { token } from '../../config.js'

import QAPart from './QAPart.jsx'
import Photo from './Photo.jsx';

export class QuA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantityQa: 2,
            body: '',
            name: "",
            email: "",
            data: this.props.data
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions', {
            body: this.state.body,
            name: this.state.name,
            email: this.state.email,
            product_id: 11501
        }, {
            headers: {
                Authorization: token
            }
        })
            .then(() => {
                console.log("posted successfully");
            })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        console.log("props", this.props.data.results);
        return (
            <div className='container'>
                {this.props.data.results && this.props.data.results.map((element, index) => {
                    return (
                        ((index < this.state.quantityQa) ? <QAPart key={index} data={element} /> : '')
                        )
                    }
                    )}
                    
         {/* ((element.answers[Object.keys(element.answers)[0]].photos.length > 0) ? <Photo data={element.answers[Object.keys(element.answers)[0]].photos} /> : '') */}
                    {/* <Photo /> */}
                <div>
                    {(this.props.data.results && this.state.quantityQa >= this.props.data.results.length ? '' : <div><h5 style={{ marginTop: "25px" }}>LOAD MORE ANSWERS</h5> <button type="button-add" className="MoreAnswerdQuestions" onClick={() => this.setState({ quantityQa: this.state.quantityQa + 2 })}>MORE ANSWERED QUESTIONS</button>  </div>)}

                    <div className="container">
                        <div className="btn-add">
                            <button className="AddQuestions" data-toggle="modal" data-target="#myModalquestion">ADD A QUESTION<i id="adding" className="plus icon"></i></button>
                            <div className="modal fade" id="myModalquestion" role="dialog">
                                <div className="modal-dialog ">
                                    <div className="modal-content modals-qua">
                                        <div className="Question">
                                            <Form>
                                                <label forhtml="Questio">Ask your question</label>
                                                <br />
                                                <TextArea type="text" name="body" rows={2} onChange={this.handleChange} />
                                                <br />
                                                <label forhtml="Questio">For privacy reasons, do not use your full name or email address:</label>
                                                <br />
                                                <input type="text" name="name" placeholder="Example: jackson11!" onChange={this.handleChange}></input>
                                                <br />
                                                <label forhtml="Questio">For authentication reasons, you will not be emailed:</label>
                                                <br />
                                                <input type="email" name="email" placeholder="Why did you like the product or not?" onChange={this.handleChange}></input>
                                                <br />
                                                <label forhtml="Questio">You must enter the following:</label>
                                                <br />
                                                <Button onClick={() => { this.handleSubmit() }}>Submit question</Button>
                                            </Form>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuA;
