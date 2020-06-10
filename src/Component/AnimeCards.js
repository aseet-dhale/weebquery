import React from 'react'
import {
    Card, CardContent, Typography, makeStyles,
    Grid, CardMedia, CardActionArea, Box
} from '@material-ui/core'
// import LazyLoad from 'react-lazy-load'
import './AnimeCards.css'
import * as Vibrant from 'node-vibrant'


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

function getVibrant(img, data) {
    Vibrant.from("https://cors-anywhere.herokuapp.com/" + img).getPalette()
        .then((palette) => {
            // document.getElementById('card_'+data.id).style.background = 'linear-gradient('+ palette.Vibrant.getHex()+ ',' + palette.LightVibrant.getHex() + ' 0.5%)'; 
            document.getElementById('card_'+data.id).style.backgroundColor = palette.Vibrant.getHex(); 
            document.getElementById('animeName'+data.id).style.color = palette.Vibrant.getBodyTextColor(); 
        })
        .catch(error => console.log(error));
}

function setColor(data) {
    // document.getElementById('card_' + data.id).style.backgroundColor = color;
    console.log(document.getElementById('card_' + data.id))
}

export default function AnimeCards(props) {
    const data = props.data;
    const styles = useStyles();
    const img = data.attributes.posterImage.small;

    return (
        <div className={styles.root}>
            <Box display="flex" justifyContent="center">
                <Grid item xs>
                    <Card className={styles.cardWidth} id={'card_' + data.id}>
                        <CardActionArea>
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
                                        <Typography variant="caption" className='animeName' id={'animeName'+data.id} color="inherit">
                                            <strong>{data.attributes.titles.en_jp}</strong> <br /> ({data.attributes.titles.ja_jp})
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </div>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Box>
            {getVibrant(img, data)}
        </div>
    )
}
