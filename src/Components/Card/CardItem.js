import React from 'react'
import {Card, Button} from 'react-bootstrap'
import imagen from './card.jpg'
import './Card.css'






export default function CardItem() {

 
  return (
 <div>
 <Card className="cards">
  <Card.Img className="imgn" variant="top" src={imagen} />
 
  <Card.Body>
   <div className='card_detail'>
    <Card.Title className='title'>Colombia</Card.Title>
    <Card.Title className='subtitle'>Cartagena</Card.Title>
    </div>
    <Card.Text className='text'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
 <Button className='boton'>Show</Button>
  </Card.Body>
</Card>
 </div>
  )
}
