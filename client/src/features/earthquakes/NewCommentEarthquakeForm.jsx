import React, { useState } from 'react';
import { API_URL } from '../../constants';

function NewCommentEarthquakeForm({ earthquakeId }) {
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/earthquakes/${earthquakeId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment: { body } })
            });
            if (response.ok) {
                console.log('Comment added successfully');
            } else {
                throw new Error('Failed to add comment');
            }
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div>
            <h2>Add New Comment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}

export default NewCommentEarthquakeForm;