const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./pages/About.jsx"
import { MailIndex } from "./apps/mail/pages/MailIndex.jsx"
import {MailDetails} from "./apps/mail/pages/MailDetails.jsx"
import {Trash} from "./apps/mail/pages/trash.jsx"

export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/inbox" element={<MailIndex />} />
                <Route path="/" element={<MailIndex />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail/:mailId" element={<MailDetails />} />
            </Routes>
        </section>
    </Router>
}
