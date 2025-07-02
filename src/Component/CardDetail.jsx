import React, { useState } from 'react'
import { makeStyles, Container, } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './AnimeCards.css'
import temp from './back.png'
import * as Vibrant from 'node-vibrant'
import CardRatingDetail from './CardRatingDetail';
import CardContextDetail from './CardContextDetail';

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    images: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: 0,
        height: 400,
    },
    backButtonContainer: {
        position: 'absolute',
        left: 0,
        width: 40,
        height: 40,
        borderRadius: '50%',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'white',
        margin: theme.spacing(1),
    },
    // backButton: {
    //     backgroundColor: 'white',
    // }
    // ,
    cardColor: {
        position: 'absolute',
        left: 0,
        width: '100%',
        minHeight: '100vh',
        zIndex: 1,
        display: 'block',
        paddingBottom: theme.spacing(5),
        backgroundColor: 'white',
    },
    coverImage: {
        position: "absolute",
        width: "100%",
        height: 300,
        objectFit: "cover",
        zIndex: -1,
    },
    posterImage: {
        marginTop: theme.spacing(6),
        position: "absolute",
        display: "block",
        maxHeight: 300,
        borderRadius: '2%',
    }
}));


export default function CardDetail(props) {
    const data = props.data;
    const styles = useStyle();
    const img = data.attributes.posterImage.small;
    Vibrant.from('https://cors-anywhere.herokuapp.com/' + img).getPalette()
        .then((palette) => {
            document.getElementById(`cards_${data.id}`).style.backgroundColor = palette.DarkVibrant.getHex();
            document.getElementById(`cardsTitle_${data.id}`).style.color = palette.LightVibrant.getHex();
            
        })
        .catch(error => console.log(error));
    let cover;
    try {
        cover = data.attributes.coverImage.small;
    } catch (error) {
        cover = temp;
    }
    return (
        <div id={`cards_${data.id}`} className={styles.cardColor}>
            <Container>
                <div className={styles.root} id={`cardsTitle_${data.id}`} >
                    <div className={styles.images}>
                        <button className={styles.backButtonContainer} onClick={() => props.toggle()}>
                            <ArrowBackIosIcon />
                        </button>
                        <img src={cover} alt="" className={styles.coverImage} />
                        <img src={img} alt="" className={styles.posterImage} />
                    </div>
                    <CardRatingDetail data={data} />
                    <CardContextDetail data={data} />
                </div>
            </Container>
        </div>
    )
}
