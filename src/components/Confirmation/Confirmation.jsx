import React from 'react';
import { Toast } from 'react-bootstrap';
import './Confirmation.scss';
export function Confirmation({ toggle,pizzas }) {
  return (
    <div className='black-color'>
    <Toast onClose={() => toggle(false)}>
      <Toast.Header>
        <strong className="mr-auto">You ordered {pizzas.name} that cost {pizzas.price}$</strong>
      </Toast.Header>
      <Toast.Body>
        Your delicious pizza will be with you in 30 minutes!
      </Toast.Body>
    </Toast>
    </div>
  );
}
