import './cardHome.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const CardHome = () => {
  return (
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Mendoza</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Argentina</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='link2' href="#link2">Mundo</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
        Luxury boutique hotel de una leyenda de la enología.
        Susana Balbo es la primera enóloga del país y tiene desde siempre una historia de amor con el mundo del vino. La atención por el detalle y la pasión por los productos de alta gama son una filosofía de trabajo y su modo de ver la vida. Susana y su hija, Ana, les abren las puertas de su mundo.
        Deleita tus sentidos siendo un invitado de Susana Balbo a su Winemaker 's House & Spa Suites.
        Todas las suites cuentan con aire acondicionado, calefacción, TV de pantalla plana, terraza privada y jardín. El baño está equipado con una bañera relajante y una bañera climatizada.
        Esta casa se encuentra a 26km del aeropuerto.

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardHome
