import gitHub from '../axios/config'
import { useState } from 'react'
import { UserProps } from '../types/user'

import Search from '../components/Search'
import User from '../components/User'
import Error from '../components/Error'
import Loader from '../components/Loader'

const Home = () => {
  const [user,setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false)

  const loadUser = async(userName: string) =>{
    setIsLoading(true)
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
    setIsLoading(false)
    setUser(userData);

    } catch (error: unknown) {
      if (typeof error === "object" && error !== null && "status" in error) {
        if(error.status === 404){
          setError(true)
          setIsLoading(false)
          setMessageError("Usuario não encontrado!")
          return
        }
      }
    }
  }
  return (
    <div>
      <Search loadUser={loadUser}/>
      {isLoading && <Loader/>}
      {user && <User {...user}/>}
      {error && <Error typeError={messageError}/>}
    </div>
  )
}

export default Home
