import React from 'react'
import Search from '../components/Search'
import gitHub from '../axios/config'
import { useState } from 'react'
import { UserProps } from '../types/user'

import User from '../components/User'

const Home = () => {
  const [user,setUser] = useState<UserProps | null>(null);
  const loadUser = async(userName: string) =>{
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
  }
  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && <User {...user}/>}
    </div>
  )
}

export default Home
