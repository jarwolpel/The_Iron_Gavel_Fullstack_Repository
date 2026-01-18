import "./EventsLog.css";

let events: string = "";

export function EventsLog() {
    return (
        <>
            <div className="EventsLog DefaultBackground">
                <textarea 
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
}
export default EventsLog;