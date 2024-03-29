import {Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import axiosClient from "../../clients/axios-client.jsx";
import Article from "./Article.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader.jsx";
import {useFiltersContextProvider} from "../../contexts/FiltersContextProvider.jsx";
import {useAuthContextProvider} from "../../contexts/AuthContextProvider.jsx";

function Articles() {
    const {filters} = useFiltersContextProvider()
    const {user} = useAuthContextProvider()

    const [articles, setArticles] = useState([])
    const [isMore, setIsMore] = useState(true);
    const [page, setPage] = useState(2);

    useEffect(() => {
        setArticles([])
        if (Object.keys(filters).length > 0){
            axiosClient.get(`/articles`, {params: filters})
                .then(response => {
                    const _articles = response.data;
                    setArticles(_articles.data)
                })
        }
        setPage(2);
        setIsMore(true);
    }, [filters]);

    const fetchData = () => {
        axiosClient.get(`/articles?page=${page}`,{params: filters})
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
        <>{
            !!Object.keys(user).length &&
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
        }
            </>
    )
}

export default Articles
