import {Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import axiosClient from "../../clients/axios-client.jsx";
import Article from "./Article.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader.jsx";

function Articles(props) {
    const [articles, setArticles] = useState([])
    const [isMore, setIsMore] = useState(true);
    const [page, setPage] = useState(2);

    useEffect(() => {
        setArticles([])
        axiosClient.get(`/articles`, props.filters)
            .then(response => {
                const _articles = response.data;
                setArticles(_articles.data)
            })
    }, [props.filters]);

    const fetchData = () => {
        axiosClient.get(`/articles?page=${page}`)
            .then(response => {
                const _articles = response.data;
                setArticles(prevItems => [...prevItems, ..._articles.data])

                if (_articles.data.length > 0){
                    setIsMore(true);
                } else {
                    setIsMore(false);
                }

                setPage(prevPage => prevPage + 1);

            })
    };

    return (
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchData}
            hasMore={isMore}
            loader={<Loader/>}>
        <Container>
            <Row>
                <Col md={{
                        offset: 2,
                        size: 8
                    }}
                     sm="12">

                        {
                            articles && Object.keys(articles).map(key => (
                                <Article key={key} {...articles[key]}/>
                            ))
                        }
                </Col>
            </Row>
        </Container>
        </InfiniteScroll>

    )
}

export default Articles
