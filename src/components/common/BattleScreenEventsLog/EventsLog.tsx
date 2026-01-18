import "./EventsLog.css";

export function EventsLog() {
    return (
        <>
            <div className="EventsLog">
                <textarea className="log" rows={5} cols={30}></textarea>
            </div>
        </>
    )
}

export default EventsLog;