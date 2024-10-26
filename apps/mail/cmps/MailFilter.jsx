export function MailFilter({ filter, onFilterChange }) {
    const handleChange = (event) => {
        onFilterChange(event.target.value)
    }

    const handleDateFilter = () => {
        onFilterChange('date')
    }

    return (
        <section className="mail-filter">
            <select name="read" value={filter.read} onChange={handleChange} className="filter-select">
                <option value="all">All</option>
                <option value="read">Read</option>
                <option value="unRead">Unread</option>
            </select>
            <button onClick={handleDateFilter} className="filter-button">Sort by Date</button>
        </section>
    )
}
