import React from 'react'
import { Toolbar, AppBar, makeStyles, CssBaseline, Typography, Button } from '@material-ui/core'
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
                        <Button onClick ={() => window.location.reload()}>
                            <Typography align="center" className="weebquuery-name" variant="h6">
                                <strong>WeebQuery</strong>
                            </Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </CssBaseline>
        </div>
    )
}
