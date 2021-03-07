import React from 'react'
import UserItem from './UserItem'

const Users = (props)=> {


        const userStyle = {
            display: "grid",
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '1em'
        }
        
        return (
            <div style = {userStyle}>
                {props.users.map(user => (
                    <UserItem key = {user.id} user={user} />))}

                
            </div>
        )
}
    

export default Users

