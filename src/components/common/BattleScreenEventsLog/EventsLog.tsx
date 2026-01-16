export function EventsLog() {
    return (
        <>
            <div>
                <textarea className="EventsLog"/>
                <div id="pause-button">
                    <input type="submit" className="pause-button" value="Pause"/>
                </div>
            </div>
        </>
    )
}

export default EventsLog;