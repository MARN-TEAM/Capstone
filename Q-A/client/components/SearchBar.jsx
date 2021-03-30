import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="mainstyle" >
            <p>QUESTIONS & ANSWERS</p>
            <div className="search-box">
                    <input className="search-input" type="search" name="searchInput" placeholder="QUESTION LIST QUESTION & ANSWERS HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={(e) => this.props.SearchQa(e.target.value)} />
                    <button className="search-btn" >
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
    }
}
export default SearchBar;