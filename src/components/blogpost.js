import React from 'react'
import {Link} from 'gatsby'
import { Badge, Card, CardBody, CardTitle,  CardText, CardFooter} from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'


const Post = ({ title, author, slug, date, body, fluid, tags }) => {
    return (  
        <Card>
        <Link to={slug}>
        <Img className="card-img-top image-card" fluid={fluid} />
        </Link>
      
            <CardBody>
                <CardTitle>
                <Link to={slug}>
                    <h3 className="font-weight-bold">{title}</h3>
                    </Link>
                </CardTitle>
                <CardText>{body}</CardText>
                <ul className="ul-style">
                    {tags.map(tag  => (
                        <li key={tag }>
                            <Link to={`/tag/${slugify(tag)}`}>
                                <Badge color="primary" className="text-uppercase">
                                    {tag}
                                </Badge>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to={slug} className="btn btn-outline-primary float-right">Read More &rarr;</Link>
            </CardBody>
            <CardFooter className="text-muted">
            Posted on {date} by {author}
            </CardFooter>
        </Card>
       
    );
}
 
export default Post;