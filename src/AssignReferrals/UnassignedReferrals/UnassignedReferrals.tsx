import React, { useState } from 'react';
import Heading from '../Heading';
import { TypeclassColumn } from '../models';

export default function Typeclasses() {
  const [refType, setRefType] = useState();

  const columns: TypeclassColumn[] = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
  ];

  return (
    <div id='ur' className=''>
      <Heading>Unassigned Referrals</Heading>

      <label className='cursor-pointer'>
        IR
        <input
          className='cursor-pointer'
          type='radio'
          name='r'
          value='IR'
          checked={refType === 'IR'}
        />
      </label>

      <label className='cursor-pointer'>
        10 Day
        <input
          className='cursor-pointer'
          type='radio'
          name='r'
          value='10D'
          checked={refType === '10D'}
        />
      </label>

      <table className=''>
        <thead className=''>
          <tr />
        </thead>
        <tbody>
          <tr />
        </tbody>
      </table>
    </div>
  );
}
