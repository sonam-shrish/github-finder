import React, { Component } from 'react'

class Search extends Component {
    state = {
        text:''
    };
    
    onChange = e =>
        this.setState({text: e.target.value})
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text)
    }
    render() {
        return (
            <div className='form' onSubmit={this.onSubmit}>
                <form>
                    <input type='text' name='Search' placeholder='Search Users...' value={this.state.text} onChange={this.onChange}></input>
                    <input value='Search' type='submit'   className='btn btn-dark btn-block' ></input>
                    
                </form>
                <button onClick={this.props.clearUsers} className='btn btn-light btn-block'>Clear</button>
                
            </div>
        )
    }
}

export default Search
