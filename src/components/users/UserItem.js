import React, { Component } from 'react'

const UserItem = (props) => {
    
        const {login, avatar_url, url} = props.user;
        return (
            <div className='card text-center'>
                <img src= {avatar_url} className = 'round-img' style={{width:'60px'}}/>
                <h2>{login}</h2>
                <div>

                    <a href={url} className="btn btn-dark btn-sm my-1">More</a>
                </div>

                
                
            </div>
        )
    }


export default UserItem
