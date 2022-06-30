import React , { useState } from "react";
import { Card ,  Carousel } from "react-bootstrap";

function Portfolio(){
    const [work] = useState([
        {
            name: 'Tutoring Service',
            id: 'Tutoring-Img-Element',
            link: 'https://tutoring-service.herokuapp.com/',
            github:"https://github.com/mital2021/tutoring-service",
            image: "tutoringapp"
        },
        {
            name: "Pokemon Battle Simulator",
            id: "pokemon-Img-Element",
            link: "https://nexfp.github.io/Pokemon-Battle-Simulator/",
            github:"https://github.com/NeXFP/Pokemon-Battle-Simulator",
            image: "pokemon"
        },
        {
            name: 'Weird NJ',
            id: 'nj-Img-Element',
            link: 'https://three-headed-goats-weirdnjobs.herokuapp.com/',
            github: 'https://github.com/ManoLo2ManoLo/WeirdNJobs',
            image: "nj"
        },
        {
            name: "Weather Dashboard",
            id: "WeatherDash-Img-Element",
            link: 'https://chidogang.github.io/Weather-dashboard-/',
            github: 'https://github.com/ChidoGang/Weather-dashboard-',
            image: "weatherapp"
        },
        {
            name: "Coding Quiz",
            id: "CodeQuiz-Img-Element",
            link: "https://chidogang.github.io/coding-quiz/",
            github: "https://github.com/ChidoGang/coding-quiz",
            image: "Coding"
        },
        {
            name: "Password Generator",
            id: "codeGen-Img-Element",
            link:"https://chidogang.github.io/Code-generator-/",
            github:"https://github.com/ChidoGang/Code-generator-",
            image: "Gen"
        },
    ])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return(
        <div>
            <h1>Examples of my work!</h1>
            <center>
                <Carousel className="w-80" activeIndex={index} onSelect={handleSelect}>
                    {work.map((example)=>(
                        <Carousel.Item>
                            <div className="black">
                                <img
                                    className="d-block w-100 opacity50"
                                    id={example.id}
                                    src={require(`../../assets/images/${example.image}.png`)}
                                    alt={example.name}
                                />
                            </div>

                            <Carousel.Caption>
                                <center>
                                    <Card bg="dark" className="padding">
                                        <h3>{example.name}</h3>
                                        <p>Link to Application: <a href={example.link} target="blank_" className="link">{example.link}</a></p>
                                        <p>Link to Repository: <a href={example.github} target="blank_" className="link">{example.github}</a></p>
                                    </Card>
                                </center>
                            </Carousel.Caption>
                    </Carousel.Item>
                    ))}
                </Carousel>
            </center>
        </div>
    )
}

export default Portfolio;
