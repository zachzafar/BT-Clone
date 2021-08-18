import React, {useState} from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {Link, useHistory} from "react-router-dom"
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from "@material-ui/icons/Search";

function Menu({Menu}) {
    const [searchItem, setSearchItem] = useState("")
    const history = useHistory();

    const setItem = (event) => {
        setSearchItem(event.target.value)
    }

    const handleSubmit = () => {
        history.push(`/search/${searchItem}`)
        Menu()
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
        <form className="inpputBox" onSubmit={handleSubmit}>
        <input type="text" value={searchItem} placeholder="Enter search term" onChange={setItem} />
        <IconButton type="submit" color="primary"><SearchIcon/></IconButton>   
        </form>
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
