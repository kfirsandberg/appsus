import { utilService } from '../../../services/util.service.js'
import { mailService } from '../services/mail.service.js'

const { useState, useEffect } = React

export function MailPreview({ mail, onMailClick, onMailRemove }) {
    const [isHovered, setIsHovered] = useState(false)
    const isRead = mail.isRead
    let displayedContent = ''
    let read
    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    function onRemove(e) {
        e.stopPropagation()
        mailService.removeMail(mail.id)
            .then(() => onMailRemove())
            .catch(err => console.error('Failed to remove mail:', err))
    }
    if (isHovered) {
        displayedContent = (
            <div className="actions-container flex align-center">
                <button onClick={onRemove}>remove </button>
                {isRead &&
                    <button > read</button>
                }
                {!isRead &&
                    <button > unRead</button>
                }
            </div>
        )
    } else {
        displayedContent = <span className="mail-sentAt">{utilService.getTimeFromStamp(mail.sentAt)}</span>
    }
    if (isRead) read = 'read'

    return (
        <article className={`grid mail-preview ${read}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onMailClick(mail)}>
            <span>{mail.from}</span>
            <section className="mail-content flex center">
                <p>{mail.subject}</p>
                <p>{mail.body}</p>
            </section>
            <span className={`mail-sentAt`}>{displayedContent}</span>

        </article>
    )
}