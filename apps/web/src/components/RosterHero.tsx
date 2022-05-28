import { Component } from "solid-js";
import { WowClass, wowClassMap } from "../data/roster";

interface RosterHeroProps {
    realm: string;
    name: string;
    wowClass: WowClass;
    thumbnail: string;
}
const RosterHero: Component<RosterHeroProps> = (props) => {
    const color = wowClassMap[props.wowClass].color;
    return (
        <div>
            <img src={props.thumbnail} alt={props.name} />
            <p class={`text-sm`} style={{ color }}>
                {props.name}
            </p>
        </div>
    );
};

export default RosterHero;
