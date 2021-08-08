import React from 'react'
import "./Menu.css"
import CloseIcon from '@material-ui/icons/Close';


function Menu({Menu}) {
    return (
        <div className="Menu">
        <CloseIcon onClick={Menu} fontSize="large"/>
        <h1>Sports</h1>
        <h1>Buisness</h1>
        <h1>Politics</h1>
        <h1>Regional</h1>
        <h1>World</h1>
        <h1>Subscribe</h1>
        </div>
    )
}

export default Menu
