import React, { Fragment } from 'react'; 
import PokeCard from './PokeCard';
import { Grid } from '@material-ui/core';

function List ({pokeData}) {
    return (
        <Fragment>
            <h1>Lista de Pokemons</h1>
            <Grid container spacing={24} justify = "center">
                {pokeData.map((pokemon, index) => {
                    
                    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
                    let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]

                    console.log(pokeIndex)

                    return <PokeCard name={pokemon.name} image={`${url}${pokeIndex}.png?raw=true`}/>
                })}
            </Grid>
        </Fragment>
    );
}

export default List;