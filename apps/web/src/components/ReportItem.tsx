import { Component } from "solid-js";

interface ReportItemProps {
    code: string;
    endTime: number;
    startTime: number;
    owner: {
        id: string;
        name: string;
    };
    title: string;
    guild: {
        name: string;
    };
}
const ReportItem: Component<ReportItemProps> = (props) => {
    const link = `https://warcraftlogs.com/reports/${props.code}`;

    const title = props.title === "" ? "No title" : props.title;
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            class="flex justify-between rounded-md bg-gray-700 p-2"
        >
            <div class="flex flex-col gap-1">
                <p class="text-sm text-gray-300"> {props.owner.name} </p>
                <p> {title} </p>
            </div>
            <p class="text-sm">{new Date(props.endTime).toDateString()}</p>
        </a>
    );
};
export default ReportItem;
