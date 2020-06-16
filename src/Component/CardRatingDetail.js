import React from 'react'
import { makeStyles } from '@material-ui/core';
import CountingAnimation from './CountingAnimation.js';
import './AnimeCards.css'

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        marginBottom: theme.spacing(4),
    },
    avgRating: {
        marginRight: theme.spacing(4),
    },
    users: {
        marginRight: theme.spacing(4),
    },
}));

export default function CardRatingDetail(props) {
    const data = props.data;
    const styles = useStyle();
    const averageRating = data.attributes.averageRating;
    const userCount = data.attributes.userCount;
    const favoritesCount = data.attributes.favoritesCount;

    return (
        <div className={`${styles.root} counters`} >
            <div className={styles.avgRating}>
                Average Rating<CountingAnimation value={averageRating} precision={2} />
            </div>
            <div className={styles.users}>
                #Users<CountingAnimation value={userCount} precision={0} />
            </div>
            <div>
                Favourite<CountingAnimation value={favoritesCount} precision={0} />
            </div>
        </div>
    )
}
