import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//Material para el menu
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//para mis rutas 
import { NavLink } from 'react-router-dom'

//estilos estaticos de material ui
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));




export default function ButtonAppBar() {
    const classes = useStyles();
    //funcion del menu desplegable
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //Codigo en html
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <div>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  >
                            LOGO
                        </IconButton>

                        
                    </div>

                    <Typography variant="h6" className={classes.title}>DuComercio</Typography>
                    <div>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                Categorias
                            </IconButton>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Electrodomesticos</MenuItem>
                            <MenuItem onClick={handleClose}>Muebles</MenuItem>
                            <MenuItem onClick={handleClose}>Juguetes</MenuItem>
                        </Menu>
                    </div>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}