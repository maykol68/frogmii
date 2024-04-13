import React, { useState, useEffect } from 'react';
import { API_URL } from '../../constants';

function NewCommentEarthquakeForm({ earthquake_id }) {
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/${earthquake_id}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment: { body } })
            });
            if (response.ok) {
                console.log('Comment added successfully');
                setBody('');
            } else {
                throw new Error('Failed to add comment');
            }
        } catch (error) {
            console.error('Error adding comment:', error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2>Add New Comment</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type="submit" disabled={isLoading || !body.trim()}>
                    {isLoading ? 'Adding Comment...' : 'Add Comment'}
                </button>
            </form>
        </div>
    );
}

export default NewCommentEarthquakeForm;