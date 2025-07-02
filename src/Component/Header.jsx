import React from 'react'
import { Toolbar, AppBar, CssBaseline, Typography, Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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
