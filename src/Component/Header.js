import React from 'react'
import { Toolbar, AppBar, makeStyles, CssBaseline, Typography } from '@material-ui/core'
import './Header.css'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
}));

export default function Header() {
    const styles = useStyles();
    return (
        <div>
            <CssBaseline>
                <AppBar position="static" className="appBarCustom">
                    <Toolbar className={styles.toolbar} >
                        <Typography align="center" className="weebquuery-name">
                            <strong>WeebQuery</strong>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </CssBaseline>
        </div>
    )
}
