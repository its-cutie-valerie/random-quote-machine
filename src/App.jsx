import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';
import './App.css';

const quotesArray = [
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
];

function App() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        const randomQuote = quotesArray[randomIndex];
        setQuote(randomQuote.text);
        setAuthor(randomQuote.author);
    };

    // Load a random quote initially
    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="App">
            <QuoteBox quote={quote} author={author} onNewQuote={fetchQuote} />
        </div>
    );
}

export default App;
