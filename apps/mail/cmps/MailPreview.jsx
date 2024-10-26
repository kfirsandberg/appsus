import { utilService } from '../../../services/util.service.js';
import { mailService } from '../services/mail.service.js';
const { useState } = React;

export function MailPreview({ mail, onMailClick, onMailRemove }) {
    const [isHovered, setIsHovered] = useState(false);
    const isRead = mail.isRead;
    const boldClass = isRead ? '' : 'bold';
    const readClass = isRead ? 'read' : 'unread';

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const onRemove = (e) => {
        e.stopPropagation();
        mailService.removeMail(mail.id)
            .then(() => onMailRemove())
            .catch(err => console.error('Failed to remove mail:', err));
    };

    const truncateText = (text, maxLength = 60) => (
        text.length > maxLength ? text.slice(0, maxLength) + '...' : text
    );

    return (
        <tr className={`mail-preview ${readClass}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onMailClick(mail)}>
            <td><span className={boldClass}>{mail.from}</span></td>
            <td><span className={boldClass}>{mail.subject}</span></td>
            <td><span>{truncateText(mail.body)}</span></td>
            <td className={`mail-sentAt ${boldClass}`}>
                {isHovered ? (
                    <div className="actions-container flex align-center">
                        <button className="action-btn remove-btn" onClick={onRemove}>Remove</button>
                    </div>
                ) : (
                    <span>{utilService.getTimeFromStamp(mail.sentAt)}</span>
                )}
            </td>
        </tr>
    );
}
