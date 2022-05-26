import { Component } from "solid-js";
import Externals from "./Externals";

const Footer: Component = () => {
    return (
        <div class="flex h-[250px] w-full flex-col items-center justify-center gap-4 bg-gray-900 p-8">
            <p> DWARF INVASION </p>
            <Externals />
            <p class="text-sm">
                {new Date().getFullYear()} Maintained by Louis-Philippe Turmel{" "}
            </p>
        </div>
    );
};

export default Footer;
