import { Component } from "solid-js";
import ExternalItem from "./ExternalItem";

const Externals: Component = () => {
    return (
        <div class="mt-6 flex w-full items-center justify-center gap-2">
            <ExternalItem
                src="warcraft-icon.png"
                name="warcraft"
                href="https://worldofwarcraft.com/en-us/guild/us/zuljin/dwarf-invasion"
            />
            <ExternalItem
                src="raiderio.png"
                name="raiderio"
                href="https://raider.io/guilds/us/zuljin/Dwarf%20Invasion"
            />
            <ExternalItem
                src="warcraftlogs.png"
                name="warcraftlogs"
                href="https://www.warcraftlogs.com/guild/us/zuljin/Dwarf%20Invasion"
            />
        </div>
    );
};
export default Externals;
