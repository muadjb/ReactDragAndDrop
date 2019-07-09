import React from 'react';
import Heading from '../Heading';

export default function EmployeesToAssign() {
  function onGroupDropdown(value: any) {}

  return (
    <div id='ur' className='d-flex flex-column'>
      <Heading>Employees To Assign</Heading>

      {/* <div className='d-flex mb-1'>
        <select onChange={onGroupDropdown}>
          <option> JB </option>
        </select>
      </div>

      <table className='table table-bordered table-hover'>
        <thead className='thead-light'>
          <tr>
            <th scope='col'>jb</th>
          </tr>
        </thead>
        <tbody>
          <tr />
        </tbody>
      </table> */}
    </div>
  );
}
