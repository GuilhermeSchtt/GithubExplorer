import { useState, useEffect } from 'react';
import {RepositoryItem} from '../RepositoryItem';

import '../../styles/repositories.scss';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return(
    <section id="repository-list">
    <h1>Lista de Repositórios</h1>
    <ul>
      {repositories.map(data => <RepositoryItem key={data.id} repository={data}/>)}
    </ul>
    </section>
  )
}