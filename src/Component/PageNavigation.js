import React from 'react'
import { ButtonGroup, Button, Typography, makeStyles, Box, IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    navWidth: {
        width: 150,
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
    },
    constSpace: {
        margin: theme.spacing(5)
    }
}));

export default function (props) {
    const styles = useStyles();
    return (
        <div>
            <div className={styles.constSpace} />
            <div className={styles.root}>
                <Box display="flex" justifyContent="center">
                    <div className={styles.navWidth}>
                        <IconButton onClick={()=>{props.previousPage()}}>
                            <ArrowBackIcon fontSize="large" color="secondary" />
                        </IconButton>
                        <strong>{Math.floor(props.currentPage/20) + 1}</strong>
                        <IconButton onClick={()=>{props.nextPage()}}>
                            <ArrowForwardIcon fontSize="large" color="secondary" />
                        </IconButton>
                    </div>
                </Box>
            </div>
            <div className={styles.constSpace} />
        </div>

    )
}
