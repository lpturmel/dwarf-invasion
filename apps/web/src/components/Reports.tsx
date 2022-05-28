import { Component, For } from "solid-js";
import ReportItem from "./ReportItem";

interface ReportsProps {
    reports: any[];
}
const Reports: Component<ReportsProps> = (props) => {
    return (
        <div class="min-h-[40vh] flex flex-col gap-4">
            <p class="text-2xl font-bold"> Last logs: </p>
            <For each={props.reports}>
                {(report) => <ReportItem {...report} />}
            </For>
        </div>
    );
};

export default Reports;
