const React = require('react')
const Default = require('./layouts/Default')



function Show ({bread}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
    
      return (
        <Default>
            <h3>{bread.name}</h3>
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
              <input type='submit' value="DELETE"/>
            </form>
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
            <p>
                and it
                {
                bread.hasGluten
                ? <span> does </span>
                : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            <p>{bread.getBakedBy()}</p>
            <p>{bread.getBakerBio()}</p>
            {/* <div>Other breads by {bread.baker.name}</div> */}
            <ol>
            {/* {bakersBread.map(bread => {
              return (
                <li>
                  <a href={`/breads/${bread.id}`}>
                  {bread.name}
                  </a>
                </li>
              )
            })} */}
            </ol>
            <li><a href="/breads">Go home</a></li>
        </Default>

      )
}
  

module.exports = Show


