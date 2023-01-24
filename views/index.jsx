const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <div className="newButton">
          <a href="/breads/new"><button>Add a new bread</button></a>
        </div>

        {/* <p>I have {breads[1].name} bread!</p> */}

        <ul>
          {
            breads.map((bread, index) => {
              return (
                <li key={index}>
                  <a href={`/breads/${index}`}>
                    {bread.name}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </Default>
    )
}

module.exports = Index
