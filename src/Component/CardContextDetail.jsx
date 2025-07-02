import React from 'react'
import { Typography } from "@mui/material";
export default function CardContextDetail(props) {
    const data = props.data;
    const title_en_jp = data.attributes.titles.en_jp;
    const title_ja_jp = data.attributes.titles.ja_jp;
    const synopsis = data.attributes.synopsis;
    const startDate = data.attributes.startDate;
    const endDate = data.attributes.endDate;
    return (
        <div>
            <Typography variant='h4' className='animeName'>{title_en_jp}({title_ja_jp})</Typography>
            <Typography variant='body1' >
                {synopsis}
            </Typography>
        </div>
    )
}
