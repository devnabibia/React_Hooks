
import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Hello() {

    const [username, setUsername] = useState (" ")
    
    useEffect(() => {
        Axios.get('/my-api/user/username')
        .then(response => {
            setUsername(response.data.username)
        })
    }, [])
    return (
        <p>
            Username is {username}
        </p>
    )
}
