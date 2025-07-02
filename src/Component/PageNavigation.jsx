import React from 'react'
import { Box, IconButton } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
                        <IconButton onClick={()=>{props.previousPage()}} size="large">
                            <ArrowBackIcon fontSize="large" color="secondary" />
                        </IconButton>
                        <strong>{Math.floor(props.currentPage/20) + 1}</strong>
                        <IconButton onClick={()=>{props.nextPage()}} size="large">
                            <ArrowForwardIcon fontSize="large" color="secondary" />
                        </IconButton>
                    </div>
                </Box>
            </div>
            <div className={styles.constSpace} />
        </div>
    );
}
