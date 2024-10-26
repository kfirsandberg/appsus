import { mailService } from '../services/mail.service.js'
import { MailInfoSection } from '../cmps/mailInfoSection.jsx'
const { useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React


export function MailDetails() {
    const params = useParams()
    const navigate = useNavigate()

    const [mail, setMail] = useState(null)

    useEffect(() => {
        loadMail()
    }, [params.mailId ])

    function loadMail() {
        mailService.getMail(params.mailId)
            .then(mail => {
                setMail(mail)
            })
            .catch(error => {
                console.error('error:', error)
                navigate('/mail')
            })
    }

    function onBack() {
        navigate('/')
    }


    if (!mail) return <div>Loading...</div>

    return (
        <section className="mail-details">
            <button title="Back to Inbox" className="btn btn-back" onClick={onBack}>
                <i className="ri-arrow-left-line"></i>
            </button>
            <section className="mail-subject flex align-center space-between">
                <p>{mail.subject}</p>
            </section>

            <MailInfoSection nameOnly={(mail.from).split('@')[0]} fullName={mail.from} />

            <section className="mail-body">
                <p>{mail.body}</p>
            </section>
        </section>
    )
}