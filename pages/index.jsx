
import styles from '../styles/Home.module.css'
import Image from 'next/image';

import Card from "../components/Card";

//pre rendering todos os pokemons
export async function getStaticProps(){

    const maxPokemons = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon/'
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json();

    // add pokemon index
    data.results.forEach((item,index)=>{
      item.id = index + 1;
    })

    return {
      props:{
        pokemons: data.results,
      }
    }
}

// listando os pokemons
export default function Home({ pokemons }) {
  return (
    <>
        <div className={styles.title_container}>
            <h1 className={styles.title}>Poke<span>Next</span></h1>
            <Image src="/images/pokeball.png"  width="50px" height="50" alt="Pokenext"/>
        </div>
        <div className={styles.pokemon_container}>
                {
                  pokemons.map(pokemon => (                      
                      <Card key={pokemon.id} pokemon={pokemon} />
                  ))
                }
        </div>
        </>
  )
}
