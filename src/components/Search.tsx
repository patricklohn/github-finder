import {BsSearch} from 'react-icons/bs'
import {useState} from "react"

type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <input type="text" placeholder='Digite o nome do usuário:' onChange={(e)=> setUserName(e.target.value)}/>
      <button onClick={() => loadUser(userName)}><BsSearch/></button>
    </div>
  )
}

export default Search
