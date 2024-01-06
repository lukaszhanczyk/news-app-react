import {Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle} from "reactstrap";

function Article(props) {

    return (
        <Card className={'mb-4'}>
            <CardBody>
                <CardTitle tag="h5">
                    {props.title}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Card subtitle
                </CardSubtitle>
            </CardBody>
            <img
                alt="Card cap"
                src={props.url_to_image}
                width="100%"
            />
            <CardBody>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </CardText>
                <CardLink href={props.url}>
                    Another Link
                </CardLink>
            </CardBody>
        </Card>
    )
}

export default Article
