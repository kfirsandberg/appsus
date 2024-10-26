import { MailPreview } from "./MailPreview.jsx"
import { mailService } from "../services/mail.service.js"
const { useNavigate } = ReactRouterDOM

export function MailList({ mails,onMailRemove }) {
    const navigate = useNavigate()
    const handleMailClick = (mail) => {
        mail.isRead = true 
        mailService.save(mail)
        navigate(`/mail/${mail.id}`)
    }
    if (!Array.isArray(mails)) {
        return <div>No mails found.</div>
    }
    return (
        <section className="email-list">
            {mails.map((mail) => (
                <MailPreview
                    key={mail.id}
                    mail={mail}
                    onMailClick={handleMailClick}
                    onMailRemove={onMailRemove} 
                />
            ))}
        </section>
    )
}
