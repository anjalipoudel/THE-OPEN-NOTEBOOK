import React, { useState } from 'react'
import ContactList from './contact'
import Chat from './chat'




export default function ChatMessenger() {
    const [to, setTo] = useState(contacts[0])



    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat contact={to} />
        </div>


    )
}
const contacts = [
    { name: 'Anjali', email: 'anjali@gmail.com' },
    { name: 'Aakritee', email: 'aakritee@gmail.com' },
    { name: 'Tara', email: 'tara@gmail.com' },

]