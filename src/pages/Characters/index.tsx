import React, {useState, useEffect, useCallback} from 'react';
import api from '../../Services/api';
import Container from './styles'

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path : string;
    extension: string;
  }
}

const Characters : React.FC = () =>{
  const [characters, setCharacters] = useState<ResponseData[]>([]);
  /*Pegando os 20 primeiros herois */
  useEffect(() => {
        api
        .get('/characters')
        .then(response => {
        setCharacters(response.data.data.results);
        })
        .catch(err => console.log(err));
    }
  ,[]);
  /* adicionando novos herois (+20) */
  const handleMore = useCallback(async() => {
    try{
      const offset = characters.length;
      const response = await api.get('characters',{
        params:{
          offset,
        }
      });
      setCharacters([...characters, ...response.data.data.results])
    }
    catch(err){
      console.log(err)
    }
  },[characters])
  /*Colocando a array em uma ul */
  return (<div>
    <Container>
    <h1>Characters</h1>
    <ul className='heros'>
    
      {characters.map(character =>{
        return <li>
          <div className='herolist'>
          <img className = 'heroimg'src = {`${character.thumbnail.path}.${character.thumbnail.extension}`} alt ={`Foto do ${character.name}`}/>
          <div className = 'heroname'>{character.name}</div>
          <div className='herodescript'>{character.description}</div>
          </div>
          </li>
      }
        )}
    </ul><div className='btnMore'>
    <button className='button' onClick={handleMore}>
        ↓     Mais    ↓
    </button></div>
    </Container>
  </div>)
}

export default Characters;