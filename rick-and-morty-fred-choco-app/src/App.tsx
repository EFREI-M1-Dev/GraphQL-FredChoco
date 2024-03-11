import './App.css'
import { useQuery } from 'urql'
import { useState } from "react";
import { Character } from "./Character";
import { DetailCharacter } from "./DetailCharacter";
import { graphql } from '../src/gql'

const App = () => {
    const [page, setPage] = useState<number>(1)
    const [currentNameCharacterDetails, setCurrentNameCharacterDetails] = useState<string | null>(null)

    const CHARACTER_QUERY = graphql(/* GraphQL */ `
    query GetCharacters($page: Int!) {
      characters(page: $page) {
        info {
          count
          pages
        }
        results {
          name
          image
        }g
      }
    }
    
    `);

    const [result] = useQuery({ query: CHARACTER_QUERY, variables: { page } })
    const { data, fetching, error } = result

    if (fetching) return <div>Loading...</div>
    if (error) return <pre>{error.message}</pre>

    if (!data) return <div>No data</div>
    if (!data.characters) return <div>No characters</div>
    if (!data.characters.info) return <div>No infos</div>
    if (!data.characters.results) return <div>No characters</div>

    return (
        <div className="CharacterWrapper">
            <h1>Characters (Page {page}/{data.characters.info.pages})</h1>
            <button onClick={() => setPage(previousPage => {
                return previousPage === 0 ? 1 : previousPage - 1
            })}>
                Previous
            </button>
            <button onClick={() => setPage(nextPage => {
                if (!data) return nextPage
                if (!data.characters) return nextPage
                if (!data.characters.info) return nextPage
                return nextPage === data.characters.info.pages ? nextPage : nextPage + 1
            })}>
                Next
            </button>
            <div className={"containerCharacters"}>
                {data.characters.results.map((character) => {
                    if (!character) {
                        return <div>No character</div>
                    } else {
                        return <Character
                            key={character.name}
                            character={character}
                            setDetails={() => {
                                if (character.name !== null && character.name !== undefined) {
                                    setCurrentNameCharacterDetails(character.name);
                                }
                            }}
                        />
                    }
                })}
                {currentNameCharacterDetails &&
                    <DetailCharacter
                        characterName={currentNameCharacterDetails}
                        closeModal={() => setCurrentNameCharacterDetails(null)} />
                }

            </div>
        </div>
    )
}

export default App
