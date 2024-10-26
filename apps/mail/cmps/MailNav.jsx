const { useNavigate } = ReactRouterDOM

export function MailNav() {
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }
    return (
        <section>
            <button>Compose</button>
            <nav className="mail-box-nav">
                <li onClick={() => handleNavigate('/inbox')}>Inbox</li>
                <li onClick={() => handleNavigate('/sent')}>Sent</li>
                <li onClick={() => handleNavigate('/trash')}>Trash</li>
            </nav>
        </section>
    )
}