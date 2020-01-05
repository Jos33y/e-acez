import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../util/authors"
import {Card, CardText, CardBody, CardTitle, Row } from "reactstrap"
import LaughterImage from "../images/laff.jpg"
import AdeImage from "../images/ade.jpg"

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Team" keywords={['gatsby']} />
    <Row className="mb-4">
      <div className="col-md-3">
          <img src={LaughterImage} style={{maxWidth: '100%'}} alt="Laughter Praise"/>
      </div>
      <div className="col-md-8">
        <Card style={{ midHeight: '100%' }}>
          <CardBody>
            <CardTitle className="font-weight-bold">{authors[0].name} </CardTitle>
            <CardText>{authors[0].bio}</CardText>
              <br/>
          </CardBody>
        </Card>
      </div>
    </Row>

    <Row className="mb-4">
      <div className="col-md-3">
          <img src={AdeImage} style={{maxWidth: '100%'}} alt="Laughter Praise"/>
      </div>
      <div className="col-md-8">
        <Card style={{ midHeight: '100%' }}>
          <CardBody>
            <CardTitle className="font-weight-bold">{authors[1].name} </CardTitle>
            <CardText>{authors[1].bio}</CardText>
              <br/>
          </CardBody>
        </Card>
      </div>
    </Row>
 
  </Layout>
)

export default TeamPage
