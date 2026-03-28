export function Search({searchValue, handleSearchChange}
    : {
        searchValue: string, 
        handleSearchChange: (newValue: string) => void
    }) {
    return(
        <form className="search-form" action="#">
            <input type="text" 
                name="field-term" 
                placeholder="Search Character list to favorite..." 
                value={searchValue}
                onChange={e => handleSearchChange(e.target.value)}
            />
            <input type="submit" value="Search" />
        </form>
    );
}