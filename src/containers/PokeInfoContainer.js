import React, { Component } from 'react';


class PokeInfoContainer extends Component {
    render() {
        const { match } = this.props;
        return (
            <>
            <h1>Poke Info</h1>
            <p>ID:{match.params.pokeIndex}</p>
            </>
        );
    }
}

export default PokeInfoContainer;