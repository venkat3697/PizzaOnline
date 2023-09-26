import React from 'react'
import { useLocation } from 'react-router-dom'


const Checkout = (props) => {
    const location = useLocation()
    const data = location.state

    return (
        <ul>
            {
                data.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>

    )
}

export default Checkout