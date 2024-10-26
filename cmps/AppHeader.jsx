const { Link, NavLink } = ReactRouterDOM
import { MailSearch } from "../apps/mail/cmps/MailSearch.jsx"

export function AppHeader({ filterBy, onSetSearchFilter }) {
    return (
        <header className="app-header flex align-center space-between">
            <div className="logo-container flex align-center">
                <button className="menu-btn">
                    <img src="assets/img/menu-svgrepo-com.svg" alt="menu icon" />
                </button>
                <Link to="/">
                    <img className="logo" src="assets/img/gmail logo.png" alt="Gmail logo" />
                </Link>
            </div>
            <MailSearch filterBy={filterBy} onSetSearchFilter={onSetSearchFilter} />
            <nav className="nav-links">
                <NavLink to="/about" className="nav-link">About</NavLink>
            </nav>
        </header>
    )
}
