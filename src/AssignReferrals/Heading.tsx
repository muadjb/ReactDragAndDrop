import React from 'react';

export default function Heading(props: any) {
  return <h1 className='font-serif text-3xl'>{props.children}</h1>;
}
