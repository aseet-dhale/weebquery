import React, { useState } from 'react'
import { makeStyles, Container, Box, Typography, IconButton } from '@material-ui/core';
import { findAllByPlaceholderText } from '@testing-library/react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './AnimeCards.css'
import temp from './blackCover.jpg'
import * as Vibrant from 'node-vibrant'
import CardRatingDetail from './CardRatingDetail';
import CardContextDetail from './CardContextDetail';

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100vw',
        height: '100vh',
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
        zIndex: -999,
        height: '100%',
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

const setColors = (img,data) => {
    Vibrant.from('https://cors-anywhere.herokuapp.com/' + img).getPalette()
        .then((palette) => {
            document.getElementById(`cards + ${data.id}`).style.backgroundColor = palette.DarkVibrant.getHex();
            document.getElementById(`cardsTitle + ${data.id}`).style.color = palette.LightVibrant.getHex();
            // console.log(palette.Vibrant._rgb)
        })
        .catch(error => console.log(error));
}


export default function CardDetail(props) {
    const data = props.data;
    const styles = useStyle();
    const img = data.attributes.posterImage.original;
    let cover;
    try {
        cover = data.attributes.coverImage.original;
    } catch (error) {
        cover = temp;   
    }
    return (
        <div className={styles.root} id={`cardsTitle + ${data.id}`} onLoad={setColors(img,data)}>
            <div id={`cards + ${data.id}`} className={styles.cardColor}></div>
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
    )
}
