import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner'

const Users = ({users, loading})=> {


        const userStyle = {
            display: "grid",
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '1em'
        }
        if(loading){
            return <Spinner />

        } else {
            return (
                <div style = {userStyle}>
                    {users.map(user => (
                        <UserItem key = {user.id} user={user} />))}
    
                    
                </div>
            )

        }
        
}
    

export default Users

