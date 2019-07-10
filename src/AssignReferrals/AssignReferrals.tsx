import React from 'react';
import Typeclasses from './UnassignedReferrals/UnassignedReferrals';
import EmployeesToAssign from './EmployeesToAssign/EmployeesToAssign';

export default function AssignReferrals() {
  return (
    <div className='flex justify-between'>
      <Typeclasses />
      <EmployeesToAssign />
    </div>
  );
}
