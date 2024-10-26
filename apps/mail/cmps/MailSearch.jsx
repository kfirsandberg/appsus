const { useState, useEffect } = React

export function MailSearch({ filterBy, onSetSearchFilter }) {
    function handleChange({ target }) {
        const value = target.value
        onSetSearchFilter(value)
    }

    return (
        <section className="mail-search">
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search mail"
                onChange={handleChange}
                className="search-input"
            />
        </section>
    )
}
