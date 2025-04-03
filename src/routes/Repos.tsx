import {useState, useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import { RepoPros } from '../types/repo';
import gitHub from '../axios/config'

import classes from './Repos.module.css'
import BackBtn from '../components/BackBtn';

const Repos =  () => {
    const {username} = useParams()
    const [repos, setRepos] = useState<RepoPros[] | [] | null>(null); 
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
      const loadRepos = async function(username: string){
        setisLoading(true)
        const res = await  gitHub.get(`/users/${username}/repos`);
        //const res = await fetch(`https://api.github.com/users/${username}/repos`)
        //const data = await res.json() 

        setisLoading(false)
        console.log(res.data);
      }

      if(username){
        loadRepos(username);
      }
    },[])
  return (
    <div>
        <BackBtn/>
        repos {username}
    </div>
  )
}

export default Repos
