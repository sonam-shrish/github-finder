import React, {useState}from 'react'


const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
    const [text, setText] = useState('');
    
    const onChange = e =>
        setText(e.target.value)
    const onSubmit = (e) => {
        e.preventDefault();
        if(text===''){
            setAlert('Please enter Something', 'light')
        } else {
            searchUsers(text)

        }
    }

        return (
            <div className='form' onSubmit={onSubmit}>
                <form>
                    <input type='text' name='Search' placeholder='Search Users...' value={text} onChange={onChange}></input>
                    <input value='Search' type='submit'   className='btn btn-dark btn-block' ></input>
                    
                </form>
                {showClear && (<button onClick={clearUsers} className='btn btn-light btn-block'>Clear</button>)}
                
            </div>
        )
}

export default Search
