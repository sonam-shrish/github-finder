import React, { Component } from 'react'

class Search extends Component {
    state = {
        text:''
    };
    onChange = (e) => {
        this.setState({text: e.target.value})

    }
    render() {
        return (
            <div className='form'>
                <form>
                    <input type='text' name='Search' placeholder='Search Users...' value={this.state.text} onChange={this.onChange}></input>
                    <input value='Search' type='submit' className='btn btn-dark btn-block' ></input>

                </form>
                
            </div>
        )
    }
}

export default Search
