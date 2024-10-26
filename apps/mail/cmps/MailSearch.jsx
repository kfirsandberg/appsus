
const { useState, useEffect } = React

export function MailSearch() {

    function handleChange({ target }) {
        let value = target.value
        console.log(value)

    }
    return (
        <section className="mail-filter grid column align-center">
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search mail"
                onChange={handleChange}

            />
        </section>
    )
}