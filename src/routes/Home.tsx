import gitHub from '../axios/config'
import { useState } from 'react'
import { UserProps } from '../types/user'

import Search from '../components/Search'
import User from '../components/User'
import Error from '../components/Error'

const Home = () => {
  const [user,setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState<string>("");

  const loadUser = async(userName: string) =>{
    setError(false)
    setUser(null)
    try {
      const res = await gitHub.get(`users/${userName}`)

      //const res = await fetch(`https://api.github.com/users/${userName}`);
      //const data = await res.json()
     //console.log(data)

    const {avatar_url, login, location, followers, following} = res.data;
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    }

    setUser(userData);

    } catch (error: unknown) {
      if (typeof error === "object" && error !== null && "status" in error) {
        if(error.status === 404){
          setError(true)
          setMessageError("Usuario não encontrado!")
          return
        }
      }
    }
  }
  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && <User {...user}/>}
      {error && <Error typeError={messageError}/>}
    </div>
  )
}

export default Home
