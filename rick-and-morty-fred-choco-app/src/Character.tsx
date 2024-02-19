export type CharacterProps = {
    name: string,
    image: string
}

export const Character = (props : {
    character: CharacterProps,
    setDetails: () => void
}) => {

    return (
        <div className={"character"} onClick={props.setDetails} >
            <label>{props.character.name}</label>
            <img src={props.character.image} alt={props.character.name}/>
        </div>
    )
}

