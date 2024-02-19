import {useQuery} from "urql";

export const DetailCharacter = (props: {
    characterName: string,
    closeModal: () => void
}) => {

    const CHARACTER__DETAILS_QUERY = `
query {
  characters(filter: { name: "${props.characterName}" }) {
    info {
      count
    }
    results {
      id
      name
      status
      species
      type
      gender
      image
      created
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
      }
      
    }
  }
}`

    const [result] = useQuery({query: CHARACTER__DETAILS_QUERY});
    const {data, fetching, error} = result

    if (fetching) return (
        <div className={"characterModal"}>
            <button onClick={props.closeModal}>Close</button>
            <p>Loading...</p>
        </div>
    )
    if (error) return (
        <div className={"characterModal"}>
            <button onClick={props.closeModal}>Close</button>
            <pre>{error.message}</pre>
        </div>
    )

    const {
        id,
        name,
        status,
        species,
        type,
        gender,
        image,
        created,
        origin,
        location,
        episode
    } = data.characters.results[0]

    return (
        <div className={"characterModal"}>
            <img src={image} alt={name}/>
            <div className={"characterModalDetails"}>
                <p><span>Id</span><span>{id}</span></p>
                <p><span>Name</span><span>{name}</span></p>
                <p><span>Status</span><span>{status}</span></p>
                <p><span>Species</span><span>{species}</span></p>
                <p><span>Type</span><span>{type}</span></p>
                <p><span>Gender</span><span>{gender}</span></p>
                <p><span>Created</span><span>{created.split('T')[0]}</span></p>
                <p><span>Origin</span><span>{origin.name}</span></p>
                <p><span>Location</span><span>{location.name}</span></p>
                <p><span>Total Episodes number</span><span>{episode.length}</span></p>
            </div>
            <button onClick={props.closeModal}>Close</button>

        </div>
    )
}