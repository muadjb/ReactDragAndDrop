import React from 'react';
import UnassignedReferrals from './UnassignedReferrals/UnassignedReferrals';
import EmployeesToAssign from './EmployeesToAssign/EmployeesToAssign';

export default function AssignReferrals() {
  return (
    <div className='flex justify-between'>
      <UnassignedReferrals />
      <EmployeesToAssign />
    </div>
  );
}
