import React from 'react'
import Search from '../components/Search'
import gitHub from '../axios/config'
import { useState } from 'react'
import { UserProps } from '../types/user'

const Home = () => {
  const [user,setUser] = useState<UserProps | null>(null);
  const loadUser = async(userName: string) =>{
    const res = await gitHub.get(`users/${userName}`)
    //const res = await fetch(`https://api.github.com/users/${userName}`);
    //const data = await res.json()
    //console.log(data)
    console.log(res.data);
  }
  return (
    <div>
      <Search loadUser={loadUser}/>
    </div>
  )
}

export default Home
