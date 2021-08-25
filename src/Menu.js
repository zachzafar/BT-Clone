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
        <div style={styles.MenuContainer}>
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
        <div style={styles.subContainer} className="topicContainer">
            <div>
            <h2>Cricket</h2>
            <h2>Politics</h2>
            <h2>Economy</h2>
            <h2>Football</h2>
            <h2>Editorial</h2>
            <h2>Court</h2>
            </div>
            <div>
            <h2>Regional</h2>
            <h2>Politics</h2>
            <h2>Tourism</h2>
            <h2>Health</h2>
            <h2>Entrepenureship</h2>
            <h2>World</h2>
            </div>
        </div>
        </div>
    )
}

const styles = {
    text: {
        fontWeight: 900,
        paddingRight: "100px"
    },
    Xicon: {
        padding: "20px"
    },
    MenuContainer: { 
        display: "flex",
        flexDirection: "row"
    },
    subContainer: { 
        display: "flex",
        flexDirection: "row",
        fontWeight: 900,
    },
}

export default Menu
