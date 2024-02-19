export type CharacterProps = {
    name: string,
    image: string
}

export const Character = (props : {
    character: CharacterProps,
}) => {

    return (
        <div className={"character"} >
            <label>{props.character.name}</label>
            <img src={props.character.image} alt={props.character.name}/>
        </div>
    )
}

