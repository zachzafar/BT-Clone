import React, {useState} from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {useForm} from "react-hook-form"
import {Link} from "react-router-dom"


function Menu({Menu}) {
    const [searchItem, setSearchItem] = useState()
    const {register, handleSubmit,} = useForm();

    const setItem = (event) => {
        setSearchItem(event.target.value)
    }

    return (
        <div className="Menu" styles={styles.text}>
        <CloseIcon onClick={Menu} stlyes={styles.Xicon} fontSize="large"/>
        <h1>TRAVEL</h1>
        <h1>NEWS</h1>
        <h1>LIFE</h1>
        <h1>SHOPPING</h1>
        <h1>MAGAZINES</h1>
        <h1>SUBSCRIBE</h1>
        <div className="inpputBox">
        <input type="text" value={searchItem} placeholder="Enter search term" onChange={setItem} />
        <Link to={`/search/${searchItem}`}><button type="submit" onClick={Menu}></button></Link>   
        </div>
        </div>
    )
}

const styles = {
    text: {
        fontWeight: 900,
    },
    Xicon: {
        padding: "20px"
    }
}

export default Menu
