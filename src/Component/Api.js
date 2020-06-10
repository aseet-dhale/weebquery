import React, { Component } from 'react'
import axios from 'axios'
import { Box } from '@material-ui/core'
import AnimeCards from './AnimeCards'
import PageNavigation from './PageNavigation'



class Api extends Component {
    pageOffset = 0;
    pageLimit = 20;
    url = `https://kitsu.io/api/edge/anime/?page[limit]=${this.pageLimit}&page[offset]=${this.pageOffset}`;

    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
        this.showData = this.showData.bind(this)
        this.fetchData = this.fetchData.bind(this)
    }


    componentDidMount() {
        this.fetchData()
    }

    scrollTop(){
        document.documentElement.scrollTop = 0;
    }

    fetchData() {
        axios.get(this.url)
            .then(
                resp => {
                    this.setState({
                        data: resp.data.data,
                    })
                    // console.log(this.url)
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            );
    }

    previousPage = () => {
        // console.log("pre")
        // console.log(this.pageOffset)
        if (this.pageOffset > 0) {
            this.pageOffset = this.pageOffset - this.pageLimit;
            this.url = `https://kitsu.io/api/edge/anime/?page[limit]=${this.pageLimit}&page[offset]=${this.pageOffset}`;
            this.fetchData()
            this.showData()
            this.scrollTop()
        }
        // console.log(this.pageOffset)
    }

    nextPage = () => {
        // console.log("next")
        // console.log(this.pageOffset)
        if (this.pageOffset < 12000) {
            this.pageOffset = this.pageOffset + this.pageLimit;
            this.url = `https://kitsu.io/api/edge/anime/?page[limit]=${this.pageLimit}&page[offset]=${this.pageOffset}`;
            this.fetchData()
            this.showData()
            this.scrollTop()
        }
        // console.log(this.pageOffset)

    }

    showData() {
        // console.log(this.state.data)
        const data = this.state.data;
        const list = data.map((element) => <AnimeCards loading key={element.id} data={element} />)
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
                <PageNavigation currentPage={this.pageOffset} nextPage={this.nextPage} previousPage={this.previousPage} />
            </div>
        )
    }
}


export default Api;
