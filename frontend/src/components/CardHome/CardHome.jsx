import './cardHome.css'
import React, { useState } from 'react';
import { Button,CardText, CardSubtitle, CardTitle,CardBody, CardImg, Card, CardGroup } from 'reactstrap';


const CardHome = () => {
    return (
        <section>
                <Card style={{width: '22rem'}}>
                    <CardImg
                        alt="Mendoza"
                        src="https://cdn.pixabay.com/photo/2021/02/08/21/45/landscape-5996668_1280.jpg"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                        Entre vinos y montañas
                        </CardTitle>
                        <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                        >
                        Mendoza
                        </CardSubtitle>
                        <CardText>
                        La combinacion perfecta de hermosos paisajes y una buena copa de vino.
                        </CardText>
                        <Button>
                        Ver mas
                        </Button>
                    </CardBody>
                </Card>
                <Card style={{width: '22rem'}}>
                    <CardImg
                        alt="Argentina"
                        src="https://images.unsplash.com/photo-1612294037637-ec328d0e075e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                        Tour por Argentina
                        </CardTitle>
                        <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                        >
                        Argentina
                        </CardSubtitle>
                        <CardText>
                        Recorre desde el maravilloso norte argentino hasta la ciudad mas austral del mundo.
                        </CardText>
                        <Button>
                        Ver mas
                        </Button>
                    </CardBody>
                </Card>
                <Card style={{width: '22rem'}}>
                    <CardImg
                        alt="Internacional"
                        src="https://images.freeimages.com/images/large-previews/321/punta-cana-1348130.jpg"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                        Darle la vuelta al mundo
                        </CardTitle>
                        <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                        >
                        Internacional
                        </CardSubtitle>
                        <CardText>
                        Explora nuevos horizontes, el mundo te espera!
                        </CardText>
                        <Button>
                        Ver mas
                        </Button>
                    </CardBody>
                </Card>
        </section>
    )
}

export default CardHome
