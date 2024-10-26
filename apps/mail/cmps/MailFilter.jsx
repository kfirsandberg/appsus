
export function MailFilter({ filter, onFilterChange }) {
    const handleChange = (event) => {
        onFilterChange(event.target.value)
    }

    const handleDateFilter = () => {
        onFilterChange('date')
    }


    return (
        <section className="filter">
            <select name="read" value={filter.read} onChange={handleChange}>
                <option value="all">all</option>
                <option value="read">Read</option>
                <option value="unRead">Unread</option>
            </select>
            <button onClick={handleDateFilter}>sort by date</button>
        </section>
    )
}