import React, { useState } from 'react';
import Heading from '../Heading';

export default function UnassignedReferrals() {
  const [refType, setRefType] = useState();

  return (
    <div id='ur' className='d-flex flex-column'>
      <Heading>Unassigned Referrals</Heading>

      <label className='pointer'>
        IR
        <input className='pointer' type='radio' name='r' value='IR' checked={refType === 'IR'} />
      </label>

      <label className='pointer'>
        10 Day
        <input className='pointer' type='radio' name='r' value='10D' checked={refType === '10D'} />
      </label>

      <table className='table table-bordered table-hover'>
        <thead className='thead-light'>
          <tr />
        </thead>
        <tbody>
          <tr />
        </tbody>
      </table>
    </div>
  );
}
