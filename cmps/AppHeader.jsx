const { Link, NavLink } = ReactRouterDOM
import { MailSearch } from "../apps/mail/cmps/MailSearch.jsx"

export function AppHeader({filterBy, onSetSearchFilter}) {

    return <header className="app-header">
        <Link to="/">
            <button className ="menu-btn"><img src="assets/img/menu-svgrepo-com.svg" alt="" /></button>
           <img src="assets/img/gmail logo.png" alt=""/>
        </Link>
        <MailSearch filterBy={filterBy} onSetSearchFilter={onSetSearchFilter} />
        <nav>
            <NavLink to="/">about</NavLink>
        </nav>
    </header>
}
