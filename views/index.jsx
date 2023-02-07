const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title, bakers}) {
    return (
      <Default title={title}>
        <h2>Bakers</h2>
        <ul>
          {bakers.map(baker => (
            <li key={baker._id}>
              <a href={`/bakers/${baker._id}`}>
                {baker.name}
              </a>
            </li>
          ))}
        </ul>


        {/* <p>I have {breads[1].name} bread!</p> */}
        <h2>Breads</h2>
        <div className="newButton">
          <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
        <ul>
          {
            breads.map((bread) => {
              return (
                <li key={bread._id}>
                  <a href={`/breads/${bread._id}`}>
                    {bread.name}
                  </a>
                  {/* <div>{bread.getBakedBy()}</div> */}
                </li>
              )
            })
          }
        </ul>
      </Default>
    )
}

module.exports = Index
