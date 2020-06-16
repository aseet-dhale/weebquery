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
    }
}));

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
    // const fadeIN = useSpring({ opacity: 1, from: { opacity: 0 } });
    /*
        Trying card opening
    */
    // const [open, set] = useState(false)
    // const springRef = useRef()
    // const { size, opacity, ...rest } = useSpring({
    //     ref: springRef,
    //     config: config.stiff,
    //     from: { size: '20% !important', background: 'hotpink !important' },
    //     to: { size: open ? '100% !important' : '20% !important', background: open ? 'white !important' : 'hotpink !important' }
    // })
    // const transRef = useRef()
    // const transitions = useTransition(open ? data : data, {
    //     ref: transRef,
    //     unique: true,
    //     trail: 400,
    //     from: { opacity: 0, transform: 'scale(0)' },
    //     enter: { opacity: 1, transform: 'scale(1)' },
    //     leave: { opacity: 0, transform: 'scale(0)' }
    // })
    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    // useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

    /*
    Ends Here
    */


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
        </div>) : (<CardDetail data={data} toggle={toggle} />)
    )
}
