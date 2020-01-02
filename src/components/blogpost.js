import React from 'react'
import {Link} from 'gatsby'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import Img from 'gatsby-image'


const Post = ({ title, author, path, date, body, fluid}) => {
    return (  
        <Card>
        <Img className="card-img-top" fluid={fluid} />
            <CardBody>
                <CardTitle>
                <Link to={path}>
                    {title}
                    </Link>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date} </span> by {" "}
                    <span className="text-info">{author} </span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <Link to={path} className="btn btn-outline-primary float-right">Read More</Link>
            </CardBody>
        </Card>
    );
}
 
export default Post;