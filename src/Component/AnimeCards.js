import React from 'react'
import {
    Card, CardContent, Typography, makeStyles,
    Grid, CardMedia, CardActionArea, Box
} from '@material-ui/core'
import ColorTheif from 'colorthief'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
    },
    cardWidth: {
        minWidth: 150,
        maxWidth: 400,
        // height: theme.spacing(20),
        margin: theme.spacing(2),
    },
    media: {
        height: 250,
    },
    animeName: {
        maxWidth: 400,
    }
}));

// const getDomColor = (img) => {
//     const re = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
//     let newImg = re.exec(img)[0];
//     // const colorTheif = new ColorTheif();
//     // const color = colorTheif.getColor(newImg);
//     console.log(newImg);
// }

export default function AnimeCards(props) {
    const data = props.data;
    const styles = useStyles();
    const img = data.attributes.posterImage.small;

    return (
        <div className={styles.root}>
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
                                <Box display="flex" justifyContent="center">
                                    <CardContent className={styles.animeName}>
                                        <Typography
                                            variant="caption"
                                        >
                                            <strong>{data.attributes.titles.en_jp}</strong> <br /> ({data.attributes.titles.ja_jp})
                                        </Typography>
                                        {/* {getDomColor(img)} */}
                                    </CardContent>
                                </Box>
                            </div>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Box>

        </div>
    )
}
