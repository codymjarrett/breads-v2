const React = require('react')

const Default = require('./layouts/default')


function Error404(){

    return (
        <Default>
            <main>
                <h1>404 Page not found!</h1>
            </main>
        </Default>
    )

}


module.exports = Error404