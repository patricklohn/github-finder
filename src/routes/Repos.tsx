import {useState, useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import { RepoPros } from '../types/repo';
import gitHub from '../axios/config'

import classes from './Repos.module.css'
import BackBtn from '../components/BackBtn';
import Loader from '../components/Loader';
import Repo from '../components/Repo';

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

        let orderedRepos = res.data.sort((a: RepoPros, b: RepoPros) =>{
          b.stargazers_count - a.stargazers_count
        })

        orderedRepos = orderedRepos.slice(0, 10);

        setRepos(orderedRepos);

        setIsLoading(false)
      }

      if(username){
        loadRepos(username);
      }

    },[])

    if(!repos && isLoading) return <Loader/>

  return (
    <div className={classes.repos}>
        <BackBtn/>
        <h2>Explore os repositórios do usuário: {username}</h2>
        {repos && repos.length === 0 && <p>Não há repositórios.</p>}
        {repos && repos.length > 0 && (
          <div className={classes.repos_container}>
            {repos.map((repo: RepoPros) => (
              <Repo key={repo.name } {...repo}/>
            ))}
          </div>
        )}
    </div>
  )
}

export default Repos
