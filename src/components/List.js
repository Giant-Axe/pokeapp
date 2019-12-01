import React, { Fragment } from 'react'; 


function List ({pokeData}) {
    return (
        <Fragment>
        <h1>Lista de Pokemons</h1>
        <ul>
            {pokeData.map((pokemon, index) => {
                return (
                    <li key= { index }>
                        { pokemon.name }
                        {/* <a href={pokemon.url}>Url</a> */}
                    </li>
                );
            })}
        </ul>
        </Fragment>
    );
};

export default List;