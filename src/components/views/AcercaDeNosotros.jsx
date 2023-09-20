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

  const Participantes = () => {
    const people = [
      { id: 1, Apellido: 'Padros', Nombre: 'Marcos Isaias', imageSrc: Isaias, socialLinks: [
        { url: 'https://github.com/IsaiasPadros', icon: GitIcono, name: 'Git' },
        { url: '', icon: Linkedin, name: 'Linkedin' },
        
      ] },
      { id: 2, Apellido: 'Romo', Nombre: 'Mauro Agustin', imageSrc: Mauro, socialLinks: [
          { url: 'https://github.com/MauroRomo1', icon: GitIcono, name: 'Git' },
          { url: 'https://www.linkedin.com/in/mauro-romo-dharez/', icon: Linkedin, name: 'Linkedin' },
          
        ] },
        { id: 3, Apellido: 'Rivadeneira', Nombre: 'Jose Luis', imageSrc: Jose, socialLinks: [
          { url: 'https://github.com/Rivadeneiea', icon: GitIcono, name: 'Git' },
          { url: '', icon: Linkedin, name: 'Linkedin' },
          
        ] },
        { id: 4, Apellido: 'Kameyha', Nombre: 'Facundo Adrian', imageSrc: Facundo, socialLinks: [
          { url: 'https://github.com/KameyhaFacundo', icon: GitIcono, name: 'Git' },
          { url: '', icon: Linkedin, name: 'Linkedin' },
          
        ] },
        { id: 5, Apellido: 'Zelaya', Nombre: 'Sergio', imageSrc: Sergio, socialLinks: [
          { url: 'https://github.com/SergioSZelaya', icon: GitIcono, name: 'Git' },
          { url: '', icon: Linkedin, name: 'Linkedin' },
          
        ] },
        { id: 5, Apellido: 'Geronimo', Nombre: 'Daniela', imageSrc: Daniela, socialLinks: [
          { url: 'https://github.com/Danielageronimo', icon: GitIcono, name: 'Git' },
          { url: '', icon: Linkedin, name: 'Linkedin' },
          
        ] }
        
      
    ];
    
    
    
  
  export default Participantes;
  

  
  
  