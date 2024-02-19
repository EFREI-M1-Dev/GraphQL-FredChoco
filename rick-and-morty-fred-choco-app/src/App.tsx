import './App.css'
import {useQuery} from 'urql'
import {useState} from "react";
import {Character, CharacterProps} from "./Character";


const App = () => {
    const [page, setPage] = useState<number>(1)

    const CHARACTER_QUERY = `
    query {
      characters(page: ${page}) {
        info {
          count
          pages
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
            <h1>Characters (Page {page}/{data.characters.info.pages})</h1>
            <button onClick={() => setPage(previousPage => {
                return previousPage == 0 ? 1 : previousPage - 1
                })
            }>
                Previous
            </button>
            <button onClick={() => setPage(nextPage => {
                return nextPage == data.characters.info.pages ? nextPage : nextPage + 1
            })
            }>
                Next
            </button>
            <div className={"containerCharacters"}>
                {data.characters.results.map((character: CharacterProps) => (
                    <Character character={character} key={character.name} />
                ))}
            </div>
        </div>
    )
}

export default App
