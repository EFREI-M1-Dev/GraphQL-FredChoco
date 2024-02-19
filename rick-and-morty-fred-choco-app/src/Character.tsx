import { graphql } from '../src/gql';
import { FragmentType, useFragment } from './gql/fragment-masking';

export const CharacterFragment = graphql(/* GraphQL */ `
  fragment CharacterFragment on Character {
    name
    image
  }
`);

export type CharacterFragmentType = FragmentType<typeof CharacterFragment>;

export const Character = (props: {
    character: CharacterFragmentType,
    setDetails: () => void
}) => {

    const character = useFragment(CharacterFragment, props.character);

    return (
        <div className={"character"} onClick={props.setDetails}>
            <label>{character.name}</label>
            <img src={character.image || undefined} alt={character.name || undefined}/>
        </div>
    );
};
