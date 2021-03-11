import React, {useState}from 'react'
import GithubContext from '../../context/github/githubContext'
import {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'


const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    const [text, setText] = useState('');
    
    const onChange = e =>
        setText(e.target.value)
    const onSubmit = (e) => {
        e.preventDefault();
        if(text===''){
            alertContext.setAlert('Please enter Something', 'light')
        } else {
            githubContext.searchUsers(text)

        }
    }

        return (
            <div className='form' onSubmit={onSubmit}>
                <form>
                    <input type='text' name='Search' placeholder='Search Users...' value={text} onChange={onChange}></input>
                    <input value='Search' type='submit'   className='btn btn-dark btn-block' ></input>
                    
                </form>
                {githubContext.users.length>0 && (
                <button onClick={githubContext.clearUsers} className='btn btn-light btn-block'>
                    Clear
                </button>)}
                
            </div>
        )
}

export default Search
