import { Component } from "solid-js";

interface AvatarProps {
    src: string;
    style: string;
}
const Avatar: Component<AvatarProps> = (props) => {
    return (
        <div class={`rounded-full border-2 border-orange-300 ` + props.style}>
            <img
                src={props.src}
                class="block h-full w-full rounded-full object-cover"
            />
        </div>
    );
};

export default Avatar;
