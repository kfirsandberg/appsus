const { useNavigate } = ReactRouterDOM

export function MailNav() {
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }

    return (
        <section className="inbox-nav">
            <button className="compose-button"><i className="fa-solid fa-pen"></i></button>
            <nav className="mail-box-nav">
                <ul>

                    <li onClick={() => handleNavigate('/inbox')}><i className="fa-solid fa-inbox"></i>
                    </li>
                    <li onClick={() => handleNavigate('/trash')}><i className="fa-solid fa-trash"></i></li>
                </ul>
            </nav>
        </section>
    )
}
