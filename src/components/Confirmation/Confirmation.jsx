import React from 'react';
import { Toast } from 'react-bootstrap';
import './Confirmation.scss';
export function Confirmation({ toggle, pizza }) {
  return (
    <div className='black-color'>
    <Toast onClose={toggle}>
      <Toast.Header>
        <div key={pizza.id}>
        <strong className="mr-auto">You ordered {pizza.name} that cost {pizza.price}$</strong>
        </div>
      </Toast.Header>
      <Toast.Body>
        Your delicious pizza will be with you in 30 minutes!
      </Toast.Body>
    </Toast>
    </div>
  );
}
