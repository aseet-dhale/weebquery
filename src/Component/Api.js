import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Box } from '@material-ui/core'
import AnimeCards from './AnimeCards'



class Api extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
        }
    }
    pageOffset = 1000
    url = `https://kitsu.io/api/edge/anime/?page[limit]=20&page[offset]=${this.pageOffset}`
    componentDidMount() {
        axios.get(this.url)
            .then(
                resp => {
                    this.setState({
                        data: resp.data.data,
                    })
                    // console.log(resp.data.data)
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            );
    }

    showData() {
        // console.log(this.state.data)
        const data = this.state.data;
        const list = data.map((element) => <AnimeCards key={element.id} data={element} />)
        return list
    }

    render() {
        return (
            <div>
                <Box display="flex" flexWrap="wrap">
                    {/* <Grid container spacing={1} > */}
                        {this.showData()}
                    {/* </Grid> */}
                </Box>
            </div>
        )
    }
}


export default Api;
