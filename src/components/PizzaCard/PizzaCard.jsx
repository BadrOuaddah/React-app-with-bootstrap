import React from 'react';
import {Card, Badge, Button} from 'react-bootstrap';

export function PizzaCard({data, setOrdred}) {
  return (
    <div>
      <Card className="h-100 shadow-sm bg-white rounded">
        <Card.Img variant='top' src={data.image} />
        <Card.Body className='d-flex flex-column'>
        <div className='d-flex mb-2 justify-content-between'>
            <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
            <Badge pill className='mb-1'>
              ${data.price}
            </Badge>
        </div>
            <Card.Text className='text-secondary'>{data.desc}</Card.Text>
            <button onClick={() => setOrdred()}
            className='mt-auto font-weight-bold btn btn-success'>
                Order Pizza 🍕
            </button>
        </Card.Body>
        </Card>
    </div>
  )
}
