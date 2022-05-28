import { Component, For } from "solid-js";
// import { CharacterData } from "../api/battlenet/rest";
import RosterHero from "./RosterHero";

interface RosterProps {
    characters: any[];
}
const Roster: Component<RosterProps> = (props) => {
    return (
        <div class="flex min-h-[40vh] flex-col gap-4">
            <p class="text-2xl font-bold"> Roster </p>
            <div class="flex w-full flex-wrap justify-center gap-2">
                <For each={props.characters}>
                    {(character) => (
                        <RosterHero
                            wowClass={character.wowClass}
                            realm={character.realm}
                            name={character.name}
                            thumbnail={character.assets[0].value}
                        />
                    )}
                </For>
            </div>
        </div>
    );
};

export default Roster;
