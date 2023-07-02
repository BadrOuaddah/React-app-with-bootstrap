import React from 'react';
import { Toast } from 'react-bootstrap';
import './Confirmation.scss';

export function Confirmation({ toggle }) {
  return (
    <div className='black-color'>
    <Toast onClose={() => toggle(false)}>
      <Toast.Header>
        <strong className="mr-auto">Your Order Is In The Oven</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body>
        Your delicious pizza will be with you in 30 minutes!
      </Toast.Body>
    </Toast>
    </div>
  );
}
