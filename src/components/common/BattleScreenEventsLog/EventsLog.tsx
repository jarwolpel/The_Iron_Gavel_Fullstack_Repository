import "./EventsLog.css";

export function EventsLog() {
    return (
        <>
            <div className="EventsLog">
                <textarea className="log"/>
            </div>
            <div className="EventsLog">
                <div className="pause-button">
                    <input type="submit" className="pause-button" value="Pause"/>
                </div>
            </div>
        </>
    )
}

export default EventsLog;