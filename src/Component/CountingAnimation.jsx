import React from 'react'
import { useSpring, animated, useTransition, config } from 'react-spring'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    line:{
        height: 5,
        backgroundColor: 'black',
    }
}));

const getPer = (val) => {
    let temp = parseInt(val);
    let x = 0;
    while(temp !== 0){
        temp = parseInt(temp/10);
        x = x+1;
    }
    let pow = parseFloat(Math.pow(10,x));
    return `${((val/pow)*100).toFixed(2)}%`;
}

export default function CountingAnimation(props) {
    const value = props.value;
    const precision = props.precision;
    const style = useStyles();
    const animation = useSpring({
        value: parseFloat(value),
        from: {
            value: 0,
        },
    });
    const lineAnim = useSpring({
        width: getPer(value),
        from:{
            width: '0%',
        },
    });
    return (
        <>
            <animated.div style={animation}>
                {animation.value.interpolate(x => x.toFixed(precision))}
            </animated.div>
            {/* <animated.div style={lineAnim} className={style.line}></animated.div> */}
        </>
    )
}
