import { Container, Row, Col, Image, Nav } from "react-bootstrap";

const Category = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Nav.Link href="/home">
              <Image
                src="https://recepti.bg/static/uploads/recepy/main/1538.jpg"
                roundedCircle
              />
            </Nav.Link>
          </Col>
          <Col xs={6} md={4}>
            <Nav.Link href="/home">
              <Image
                src="https://recepti.bg/static/uploads/recepy/main/2473.jpg"
                roundedCircle
              />
            </Nav.Link>
          </Col>
          <Col xs={6} md={4}>
            <Nav.Link href="/home">
              <Image
                src="https://recepti.bg/static/uploads/recepy/main/2372.jpg"
                roundedCircle
              />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Category;
