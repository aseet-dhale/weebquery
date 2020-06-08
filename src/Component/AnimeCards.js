import React from 'react'
import {
    Card, CardContent, Typography, makeStyles,
    Grid, CardMedia, CardActionArea, Box
} from '@material-ui/core'

const minH = 300;
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 0.5,
    },
    cardWidth: {
        minWidth: 150,
        // height: theme.spacing(20),
        margin: theme.spacing(1),
    },
    media: {
        height: 250,
    },
    animeName: {
        maxWidth: 200,
    }
}));

export default function AnimeCards(props) {
    const data = props.data;
    const styles = useStyles();


    return (
        <div className={styles.root}>
            <Grid item xs>
                <Card>
                    <CardActionArea className={styles.cardWidth}>
                        <CardMedia
                            className={styles.media}
                            image={data.attributes.posterImage.original}
                            title={data.attributes.canonicalTitle}
                        />

                        <CardContent className={styles.animeName}>
                            <Typography variant="caption" ><strong>{data.attributes.titles.en_jp}</strong> <br /> ({data.attributes.titles.ja_jp})</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

        </div>
    )
}
