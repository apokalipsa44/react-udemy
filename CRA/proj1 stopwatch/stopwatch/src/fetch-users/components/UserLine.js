import React from "react";

const UserLine = props => {

    const usersMap = props.users.map(user => (
        <div key={user.id.value}>

            <img src={user.picture.large} alt={user.name}/>
            {/*<h4>{`${user.name.last} ${user.name.first}`}</h4>*/}
            <h4>{user.name.last} {user.name.first}</h4>
            <p>{user.email}</p>
        </div>
    ))
return(<div>

    {usersMap}
</div>
)
}


export default UserLine