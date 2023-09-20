import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../styles/acercaDeNosotros.css"

import Isaias from  '../../assets/Isaias.png';
import Sergio from  '../../assets/Sergio.png';
import Facundo from  '../../assets/Facundo.png';
import Daniela from  '../../assets/Daniela.png';
import Jose from  '../../assets/Jose.png';
import Mauro from  '../../assets/Mauro.png';
import GitIcono from  '../../assets/git.png';
import Linkedin from  '../../assets/linkedin.png';

const GrupoCards = ({ imageSrc, Apellido, Nombre, socialLinks }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center min-H3"
    >
      <Card className='w80'>
        <Row className="align-items-center">
          <Col sm={4}>
            <Card.Img variant="top" src={imageSrc} />
          </Col>
          <Col sm={8}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="mb-3">
                <span className="font-s3">
                  {Apellido} {Nombre}
                </span>
              </Card.Title>
              <div className="d-flex flex-column">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} className="mb-2">
                    <img
                      src={link.icon}
                      alt={link.name}
                      className='img50'
                    />
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
    {
      id: 1,
      Apellido: "Padros",
      Nombre: "Marcos Isaias",
      imageSrc: Isaias,
      socialLinks: [
        { url: "https://github.com/IsaiasPadros", icon: GitIcono, name: "Git" },
        { url: "", icon: Linkedin, name: "Linkedin" },
      ],
    },
    {
      id: 2,
      Apellido: "Romo",
      Nombre: "Mauro Agustin",
      imageSrc: Mauro,
      socialLinks: [
        { url: "https://github.com/MauroRomo1", icon: GitIcono, name: "Git" },
        {
          url: "https://www.linkedin.com/in/mauro-romo-dharez/",
          icon: Linkedin,
          name: "Linkedin",
        },
      ],
    },
    {
      id: 3,
      Apellido: "Rivadeneira",
      Nombre: "Jose Luis",
      imageSrc: Jose,
      socialLinks: [
        { url: "https://github.com/Rivadeneiea", icon: GitIcono, name: "Git" },
        { url: "", icon: Linkedin, name: "Linkedin" },
      ],
    },
    {
      id: 4,
      Apellido: "Kameyha",
      Nombre: "Facundo Adrian",
      imageSrc: Facundo,
      socialLinks: [
        {
          url: "https://github.com/KameyhaFacundo",
          icon: GitIcono,
          name: "Git",
        },
        { url: "", icon: Linkedin, name: "Linkedin" },
      ],
    },
    {
      id: 5,
      Apellido: "Zelaya",
      Nombre: "Sergio",
      imageSrc: Sergio,
      socialLinks: [
        {
          url: "https://github.com/SergioSZelaya",
          icon: GitIcono,
          name: "Git",
        },
        { url: "", icon: Linkedin, name: "Linkedin" },
      ],
    },
    {
      id: 6,
      Apellido: "Geronimo",
      Nombre: "Daniela",
      imageSrc: Daniela,
      socialLinks: [
        {
          url: "https://github.com/Danielageronimo",
          icon: GitIcono,
          name: "Git",
        },
        { url: "", icon: Linkedin, name: "Linkedin" },
      ],
    },
  ];

  return (
    <>
      <div className="text-center">
        <h1>TEAM 1 </h1>
      </div>
      <div>
        {people.map((person) => (
          <div
            key={person.id}
            className="mb-4"
          >
            <GrupoCards
              Apellido={person.Apellido}
              Nombre={person.Nombre}
              imageSrc={person.imageSrc}
              socialLinks={person.socialLinks}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Participantes;
