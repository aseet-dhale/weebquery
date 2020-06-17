import React, { useRef, useState } from 'react'
import {
    Card, CardContent, Typography, makeStyles,
    Grid, CardMedia, CardActionArea, Box
} from '@material-ui/core'
import './AnimeCards.css'
import * as Vibrant from 'node-vibrant'
import { useChain, animated, useSpring, config, useTransition } from 'react-spring'
import CardDetail from './CardDetail'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
    },
    cardWidth: {
        minWidth: 150,
        maxWidth: 400,
        // height: theme.spacing(20),
        // margin: theme.spacing(1),
    },
    media: {
        height: 250,
        maxWidth: 400,
    },
    animeName: {
        maxWidth: 300,//Very important for responsive behaviour
        textAlign: "center",
    },
    contain: {
        display: 'block',
        zIndex: 2,
        top: 0,
        left: 0,
        width: "100%",
        height: '100%',
        position: 'fixed',
        overflowY: 'scroll'
    }
}));
const scrollToCard = (data) => {
    if (document.getElementById(`completeCard_${data.id}`)) {
        document.documentElement.scrollTop = document.getElementById(`completeCard_${data.id}`).offsetTop;
        console.log(document.getElementById(`completeCard_${data.id}`).offsetTop)
    }
    console.log('called')
}
// function getVibrant(img, data) {

// }
export default function AnimeCards(props) {
    const data = props.data;
    const styles = useStyles();
    const img = data.attributes.posterImage.small;
    const [open, set] = useState(false);
    function toggle() {
        set(open => !open);
    }
    return (
        !open ? (<div className={styles.root}>
            <Box display="flex" justifyContent="center" >
                <Grid item xs>
                    <Card className={styles.cardWidth}>
                        <CardActionArea
                            onClick={() => toggle()}
                        >
                            <div>
                                <CardMedia
                                    className={styles.media}
                                    image={img}
                                    title={data.attributes.canonicalTitle}
                                />
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <CardContent
                                        className={styles.animeName}
                                    >
                                        <Typography variant="caption" className='animeName' color="inherit">
                                            <strong>{data.attributes.titles.en_jp}</strong> <br /> ({data.attributes.titles.ja_jp})
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </div>

                        </CardActionArea>
                    </Card>
                </Grid>
            </Box>
        </div>) : (<div className={styles.contain} id={`completeCard_${data.id}`} onLoad={scrollToCard(data)}>
            <CardDetail data={data} toggle={toggle}></CardDetail>
        </div>)
    )
}
