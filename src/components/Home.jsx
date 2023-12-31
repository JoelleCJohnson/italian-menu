import { useEffect, useState } from "react"

function SingleMenuComponent(props) {
    console.log(props)
    return (
        <div className="menu-item">
            <h3>{props.title}</h3>
            <p id>{props.description}</p>
        </div>

    )
}

export default function Home() {
    const [menuItem, setMenuItem] = useState() //[getter(stateVar), setter]. This is destructuring the array. 
    // 1. fetch data -DONE lines 12-15
    // 2. get an array of objects -DONE line 4

    // 3. render each object
    //create a state variable-DONE line 4
    //put array of objects inside state variable-DONE line 22
    //display the items in dom
    //map over the array of objects
    //return each item so that it displays on the browser

    useEffect(() => {
        fetch('https://codice-boca.web.app/menu')
            .then(res => res.json()) //contacting the API
            .then(data => setMenuItem(data)) //handling the conversion of the data, cleans data
            .catch(err => console.error(err))
    }, [])

  

    return (
        <section className="menu-items">
            {(!menuItem) //no menu items?
                ?
                //if no menu items, show button. 
                <h3>Loading...</h3>
                :
                //Otherwise, show menu items.
                menuItem.map((singleItem) => {
                    return (
                        <SingleMenuComponent title={singleItem.title} description={singleItem.description} />
                    )
                })
            }

        </section>
    )
}