import React from 'react'
import {
    Card, CardContent, Typography, makeStyles,
    Grid, CardMedia, CardActionArea, Box
} from '@material-ui/core'
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

// const getDomColor = (img) => {
//     const re = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
//     let newImg = re.exec(img)[0];
//     // const colorTheif = new ColorTheif();
//     // const color = colorTheif.getColor(newImg);
//     console.log(newImg);
// }
let color;


function getVibrant(img) {
    Vibrant.from("https://cors-anywhere.herokuapp.com/" + img).getPalette()
        .then((palette) => {
            color = palette.Vibrant.getHex();
            // console.log(color);
        })
        .catch(error => console.log(error));
    // return console.log(vibrantColor);
}

export default function AnimeCards(props) {
    const data = props.data;
    const styles = useStyles();
    const img = data.attributes.posterImage.small;
    return (
        <div className={styles.root}>
            {getVibrant(img)}
            <Box display="flex" justifyContent="center">
                <Grid item xs>
                    <Card className={styles.cardWidth}>
                        <CardActionArea>
                            <div >
                                <CardMedia
                                    className={styles.media}
                                    image={img}
                                    title={data.attributes.canonicalTitle}
                                />
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    {/* <CardContent
                                        className={styles.animeName}
                                        
                                    >
                                        <Typography variant="caption">
                                            <strong>{data.attributes.titles.en_jp}</strong> <br /> ({data.attributes.titles.ja_jp})
                                        </Typography>
                                    </CardContent> */}
                                    <div style={{
                                        backgroundColor: color
                                    }}>
                                    
                                        <h4>
                                            <strong>{data.attributes.titles.en_jp}</strong>
                                            <br /> ({data.attributes.titles.ja_jp})
                                        </h4>
                                    </div>
                                </Box>
                            </div>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Box>

        </div>
    )
}
