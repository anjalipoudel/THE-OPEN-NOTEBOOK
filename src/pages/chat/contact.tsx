import React, { useState } from 'react'

export default function ContactList({ contacts, onSelect, selectedContact }) {
    return (
        <div>
            <ul>
                {contacts.map(contact =>
                    <li key={contact.email}>
                        <button onClick={() => {
                            onSelect(contact);
                        }}>
                            {contact.name}
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}
