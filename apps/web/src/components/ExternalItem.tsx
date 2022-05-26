import { Component } from "solid-js";

interface ExternalItemProps {
    href: string;
    src: string;
    name: string;
}
const ExternalItem: Component<ExternalItemProps> = (props) => {
    return (
        <a
            href={props.href}
            class="w-10 rounded-md bg-gray-700 p-2 transition-colors duration-200 hover:bg-gray-700/80"
            target="_blank"
        >
            <img src={props.src} alt={props.name} />
        </a>
    );
};

export default ExternalItem;
