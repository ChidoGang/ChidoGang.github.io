import React from "react";
import coverImage from "../../assets/images/icon.jpg"

import Card from'react-bootstrap/card';

function About() {
    return (
        <Card> 
            <Card.Body>
                <Card.Title> Welcome, my name is Edgar.  </Card.Title>
                    <Card.Img variant="top" src={coverImage}className="icon"/>
                    <Card.Text>
                         I am a web developer from a small town in New Jersey. 
                    </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default About;