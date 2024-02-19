import './App.css'
import {useQuery} from 'urql'

const CHARACTER_QUERY = `
    query {
      characters {
        info {
          count
        }
        results {
          name
        }
      }
    }`

function App() {
    const [result] = useQuery({query: CHARACTER_QUERY})
    const {data, fetching, error} = result
    console.log(data)
    if (fetching) return <div>Loading...</div>

    if (error) return <pre>{error.message}</pre>

    return (
        <>
            <h1>Character</h1>
            <ul>
                {data.characters.results.map((character: any) => (
                    <li key={character.name}>{character.name}</li>
                ))}
            </ul>
        </>
    )
}

export default App
