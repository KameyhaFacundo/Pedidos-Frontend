const GrupoCards = ({ imageSrc, Apellido, Nombre, socialLinks }) => {
    return (
      
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '30vh' }}>
      <Card style={{ width: '80%' }}>
        <Row className="align-items-center">
          <Col sm={4}>
            <Card.Img variant="top" src={imageSrc}  />
          </Col>
          <Col sm={8}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="mb-3">
                  <span style={{ fontSize: '3.8rem' }}>{Apellido} {Nombre}</span>
                  </Card.Title>
              <div className="d-flex flex-column">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} className="mb-2">
                    <img src={link.icon} alt={link.name} style={{ width: '50px', height: '50px' }} />
                  </a>
                ))}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      </div>
    );
  };