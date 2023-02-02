const React = require('react')

const Default = require('./layouts/default')


function GenericError({error}){

    return (
        <Default>
            <main>
                <h1>{error}</h1>
            </main>
        </Default>
    )

}


module.exports = GenericError