import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ModalHeader } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { searchProductId } from '../../helpers/serchproduct';


const CardProducto = () => {
    const { id } = useParams();
    console.log(id)
    console.log({idParmas: id})
    const searchProduct  = searchProductId(Number(id));
    const {name,price,images,category,description} = searchProduct

    return (
        <>
        <p>{name}</p>
        <p>{price}</p>
        <img src={images}/>
        <p>{category}</p>
        <p>{description}</p>
      </>
    )
  }
  
  export default CardProducto
