import React, { useState } from 'react';

const Players = () => {

    state = {
        players: []
    }

    const usernameInputDesign = () => {
        return <div>
            <h2>Enter username: </h2>
        </div>
    }

    return(
        usernameInputDesign()
    )

}

export default Players