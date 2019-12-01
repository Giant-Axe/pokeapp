import React, { Fragment } from 'react'; 
import PokeCard from './PokeCard';
import { Grid } from '@material-ui/core';

function List ({pokeData}) {
    return (
        <Fragment>
            <Grid container justify = "center">
                {pokeData.map((pokemon, index) => {
                    
                    let url = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/"
                    let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]

                    console.log(pokeIndex)

                    return <PokeCard to={`/poke-info/${pokeIndex}/${pokemon.name}`} name={pokemon.name} image={`${url}${pokeIndex}.png?raw=true`}/>
                })}
            </Grid>
        </Fragment>
    );
}

export default List;