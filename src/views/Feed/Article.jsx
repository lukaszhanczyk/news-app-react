import {Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, ListGroup, ListGroupItem} from "reactstrap";

function Article(props) {

    return (
        <Card className={'mb-4'}>
            <CardBody>
                {
                    props?.apiSource?.name &&
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h5"
                    >
                        {props?.apiSource?.name}
                    </CardSubtitle>
                }
                <CardTitle className="mt-2" tag="h4">
                    {props.title}
                </CardTitle>
                {
                    props?.authors &&
                    <CardSubtitle
                        className="mt-2 text-muted"
                        tag="h6"
                    >
                        {Object.keys(props?.authors).map(key => (
                            <span key={key}>
                                {(props?.authors[key].name).toLowerCase().replace(/(^\w{1})|(\s\w{1})/g, (v) => v.toUpperCase())}
                                {props?.authors.length === parseInt(key) + 1 ? "" : <span> | </span>}
                            </span>
                        ))}

                    </CardSubtitle>
                }
            </CardBody>
            {
                props.url_to_image &&
                <img
                alt="Card cap"
                src={props.url_to_image}
                width="100%"
                />
            }
            <CardBody>
                {
                    props?.description &&
                    <CardText>
                        {props?.description}
                    </CardText>
                }
                <CardLink href={props.url}>
                    Go to article
                </CardLink>
            </CardBody>

            <ListGroup flush>
                {
                    props?.source?.name &&
                    <ListGroupItem>
                        {props?.source?.name}
                    </ListGroupItem>
                }
                {
                    props?.category?.name &&
                    <ListGroupItem>
                        {props?.category?.name}
                    </ListGroupItem>
                }
                {
                    props?.published_at &&
                    <ListGroupItem>
                        {props?.published_at}
                    </ListGroupItem>
                }
            </ListGroup>

        </Card>
    )
}

export default Article
