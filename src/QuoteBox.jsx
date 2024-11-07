import React from 'react';

function QuoteBox({ quote, author, onNewQuote }) {
    return (
        <div id="quote-box" style={{ textAlign: 'center', margin: 'auto', maxWidth: '500px' }}>
            <p id="text">{quote}</p>
            <p id="author">- {author}</p>
            <button id="new-quote" onClick={onNewQuote}>
                New Quote
            </button>
            <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Tweet
            </a>
        </div>
    );
}

export default QuoteBox;
