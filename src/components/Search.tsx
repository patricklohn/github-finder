import React from 'react'
import {BsSearch} from 'react-icons/bs'

const Search = () => {
  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <input type="text" placeholder='Digite o nome do usuário:'/>
      <button><BsSearch/></button>
    </div>
  )
}

export default Search
