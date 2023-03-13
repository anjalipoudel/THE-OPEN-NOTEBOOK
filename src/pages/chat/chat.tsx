import React, { useState } from 'react'
import { Books } from '@/data/bookList';

export default function Chat({ contact }) {
    const [text, setText] = useState('');

    return (
        <>

            <div>
                <textarea
                    value={text}
                    placeholder={'chat to' + contact.name}
                    onChange={(e) => setText(e.target.value)}
                />

                <button>send to {contact.email}</button>
            </div>

        </>
    )
}
