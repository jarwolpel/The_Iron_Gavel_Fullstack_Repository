//import { useEffect, useRef } from "react";
import "./EventsLog.css";

let events: string = "";
// const log = useRef<HTMLTextAreaElement>(null);


export function EventsLog() {
    return (
        <>
            <div className="EventsLog DefaultBackground">
                <textarea 
                // ref={log}
                readOnly
                className="log DefaultBackground" 
                rows={5} 
                cols={30}
                value={events}
                ></textarea>
            </div>
        </>
    )
}

export function appendEventToLog(event: string) {
    events += "\n" + event;
    // if(log.current) {
    //     log.current.scrollTop = log.current.scrollHeight
    // }
}

export default EventsLog;