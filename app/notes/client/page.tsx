'use client';

import { useEffect, useState } from 'react';

// async function fetchNotes() {
//     const responseNotes = await fetch('https://service.pace11-unv.cloud/api/notes').then(res => res.json());
//     return responseNotes
// }

export default function NotesPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then((data) => setData(data? data : [])).finally(() => setLoading(false));
    }, []);
    if (loading) return <p>Loading...</p>;
    console.log('data', data);
    return (
        <ul>
            {data?.map((el) => (
                <li key={el.id}>
                    <h2>{el.title}</h2> 
                </li>
            ))}
        </ul>
    )

    }