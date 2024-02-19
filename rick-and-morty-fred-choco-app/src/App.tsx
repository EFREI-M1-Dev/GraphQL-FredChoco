import './App.css'
import {useQuery} from 'urql'
import {useState} from "react";


function App() {
    const [page, setPage] = useState(1)

    const CHARACTER_QUERY = `
    query {
      characters(page: ${page}) {
        info {
          count
        }
        results {
          name,
          image
        }
      }
    
    }`

    const [result] = useQuery({query: CHARACTER_QUERY})
    const {data, fetching, error} = result




    if (fetching) return <div>Loading...</div>

    if (error) return <pre>{error.message}</pre>

    return (
        <div className="CharacterWrapper">
            <h1>Character</h1>
            <button onClick={() => setPage(previousPage => {
                return previousPage == 0 ? 1 : previousPage - 1
                })
            }>
                Previous
            </button>
            <button onClick={() => setPage(nextPage => {
                return nextPage  + 1
            })
            }>
                Next
            </button>
            <ul>
                {data.characters.results.map((character: any) => (
                    <>
                        <li key={character.name}>{character.name}</li>
                        <img src={character.image} alt={character.name}/>
                    </>

                ))}
            </ul>
        </div>
    )
}

export default App
