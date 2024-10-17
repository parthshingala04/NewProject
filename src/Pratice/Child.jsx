import React, {useContext } from 'react'
import { global } from '../App';

function Child() {

    const {data} = useContext(global);
    console.log(data);

  return (
    <>
        <h1 style={{color:data}}>Child Componet</h1>
    </>
  )
}

export default Child