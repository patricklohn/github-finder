import {useState, useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import { RepoPros } from '../types/repo';
import gitHub from '../axios/config'

import classes from './Repos.module.css'
import BackBtn from '../components/BackBtn';
import Loader from '../components/Loader';

const Repos =  () => {
    const {username} = useParams()
    const [repos, setRepos] = useState<RepoPros[] | [] | null>(null); 
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const loadRepos = async function(username: string){
        setIsLoading(true)
        const res = await  gitHub.get(`/users/${username}/repos`);
        //const res = await fetch(`https://api.github.com/users/${username}/repos`)
        //const data = await res.json() 

        if(res){
          setRepos(res.data);
        }

        setIsLoading(false)
      }

      if(username){
        loadRepos(username);
      }

    },[])

    if(!repos && isLoading) return <Loader/>

  return (
    <div>
        <BackBtn/>
        <h2>Explore os repositórios do usuário: {username}</h2>
        {repos && repos.length === 0 && <p>Não há repositórios.</p>}
        {repos && repos.length > 0 && (
          <div>
            {repos.map((repo: RepoPros) => (
              <p>{repo.name}</p>
            ))}
          </div>
        )}
    </div>
  )
}

export default Repos
