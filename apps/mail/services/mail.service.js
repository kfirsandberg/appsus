// mail service
import { utilService } from '../../../services/util.service.js'
import { aSyncStorageService } from '../../../services/async-storage.service.js'
import { storageService } from '../../../services/storage.service.js'
const MAIL_KEY = 'mailDB'
_createMails()
export const mailService = {
    query,
    getMail,
    removeMail,
    save
}
function query(filter) {
    return aSyncStorageService.query(MAIL_KEY)
        .then(mails => {
            mails.sort((a, b) =>
                filter.date ? a.sentAt - b.sentAt : b.sentAt - a.sentAt
            )
            if (filter.read === 'all') {
                return mails
            }
            if (filter.read === 'read') {
                mails = mails.filter(mail => mail.isRead === true);
            } else if (filter.read === 'unRead') {
                mails = mails.filter(mail => mail.isRead === false);
            }
            return mails
        })
        .catch(err => console.error('err: ', err))
}

function getMail(mailId) {
    return aSyncStorageService.get(MAIL_KEY, mailId)
}

function removeMail(mailId) {
    return aSyncStorageService.remove(MAIL_KEY, mailId)
}
function save(mail) {
    if (mail.id) {
        return aSyncStorageService.put(MAIL_KEY, mail)
    } else {
        return aSyncStorageService.post(MAIL_KEY, mail)
    }
}

function _createMails() {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        const mails = [
            {
                id: 'e101',
                createdAt: 1551133930500,
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1321133930594,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e102',
                createdAt: 1561133930500,
                subject: 'Missing you!',
                body: 'Would like to see you',
                isRead: true,
                sentAt: 1751133930594,
                removedAt: null,
                from: 'nono@nono.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e103',
                createdAt: 1761133930500,
                subject: 'where are you!',
                body: 'i Would like to see you',
                isRead: true,
                sentAt: 1651133930594,
                removedAt: null,
                from: 'nono@nono.com',
                to: 'user@appsus.com'
            }, {
                id: 'e105',
                subject: 'We are going to have the best project!',
                body: 'Eden and Noam are going to have the best project',
                isRead: true,
                sentAt: 1701332778460,
                removedAt: null,
                isStarred: false,
                from: 'kiki@momo.com',
                to: 'user@appsus.com'
            }, {
                id: 'e108',
                subject: 'Need you help!',
                body: utilService.makeLorem(300),
                isRead: true,
                sentAt: 1551133830594,
                removedAt: null,
                isStarred: false,
                from: 'koko@momo.com',
                to: 'user@appsus.com'
            }, {
                id: 'e109',
                subject: 'We Rock!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1651332778460,
                removedAt: null,
                isStarred: false,
                from: 'nono@momo.com',
                to: 'user@appsus.com'
            }, {
                id: 'e115',
                subject: 'We are going to have the best project!',
                body: 'Eden and Noam are going to have the best project Eden and Noam are going to have the best project',
                isRead: true,
                sentAt: 1531133230594,
                removedAt: null,
                isStarred: false,
                from: 'kiki@momo.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e116',
                subject: 'We are going to have the best project!',
                body: 'Eden and Noam are going to have the best project Eden and Noam are going to have the best project',
                isRead: true,
                sentAt: 1531133230594,
                removedAt: null,
                isStarred: false,
                from: 'user@appsus.com',
                to: 'service@momo.com'
            },
            {
                id: 'e119s',
                subject: 'We are going to have the best project!',
                body: 'Eden and Noam are going to have the best project',
                isRead: true,
                sentAt: 1521133930594,
                removedAt: null,
                isStarred: false,
                from: 'user@appsus.com',
                to: 'kiki@koko.com'
            }

        ]
        storageService.saveToStorage(MAIL_KEY, mails)
    }
}