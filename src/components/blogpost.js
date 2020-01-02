import React from 'react'
import {Link} from 'gatsby'
import { Badge, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'


const Post = ({ title, author, path, date, body, fluid, tags }) => {
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
                <ul className="ul-style">
                    {tags.map(tag  => (
                        <li>
                            <Link to={`/tag/${slugify(tag)}`}>
                                <Badge color="primary" className="text-uppercase">
                                    {tag}
                                </Badge>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to={path} className="btn btn-outline-primary float-right">Read More</Link>
            </CardBody>
        </Card>
    );
}
 
export default Post;