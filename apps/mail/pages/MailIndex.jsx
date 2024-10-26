import { MailList } from '../cmps/MailList.jsx'
import { MailNav } from '../cmps/MailNav.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { mailService } from '../services/mail.service.js'

const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filter, setFilter] = useState({ date: true, read: 'all' })
    
    useEffect(() => {
        loadMails()
    }, [filter,])

    const loadMails = () => {
        mailService.query(filter)
            .then(mails => setMails(mails))
            .catch(err => console.error('Failed to load mails:', err))
    }
    const handleFilterChange = (newFilter) => {
        if (newFilter === 'date') {
            setFilter(prevFilter => ({ ...prevFilter, date: !prevFilter.date }))
        } else {
            setFilter(prevFilter => ({ ...prevFilter, read: newFilter }))
        }
    }
    return (
        <section className="inbox">
            <MailNav />
            <section className="mail-container">
                <MailFilter filter={filter} onFilterChange={handleFilterChange} />
                <MailList mails={mails} onMailRemove={loadMails} />
            </section>
        </section>
    )
}