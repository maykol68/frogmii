import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../constants';
import { Link } from'react-router-dom';
import "./earthquakeDetails.css";

function EarthquakeDetails() {
    const [earthquake, setEarthquake] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchEarthquakeDetails = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setEarthquake(data);
                } else {
                    throw new Error('Failed to fetch earthquake details');
                }
            } catch (error) {
                console.error('Error fetching earthquake details:', error);
            }
        };
        fetchEarthquakeDetails();
    }, [id]);

    if (!earthquake) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2 className="earthquake-details-title">Earthquake Details</h2>
            <div key={earthquake.id} className='earthquake-details-container'>  
                <h2 className="earthquake-details-item">Type: {earthquake.feature_type}</h2>
                <p className="earthquake-details-item">Mag: {earthquake.attributes.magnitude}</p>
                <p className="earthquake-details-item">Place: {earthquake.attributes.place}</p>
                <p className="earthquake-details-item">Time: {earthquake.attributes.time}</p>
                <p className="earthquake-details-item">Tsunami: {earthquake.attributes.tsunami}</p>
                <p className="earthquake-details-item">Mag Type: {earthquake.attributes.mag_type}</p>
                <p className="earthquake-details-item">Title: {earthquake.attributes.title}</p>
                <p className="earthquake-details-item">Latitude: {earthquake.attributes.coordinates.latitude}</p>
                <p className="earthquake-details-item">Longitude: {earthquake.attributes.coordinates.longitude}</p>
                <p className="earthquake-details-item">External URL: {earthquake.links.external_url}</p>
                <Link to={`/earthquakes/${earthquake.id}/comments`} className="earthquake-details-link">Comment</Link>
            </div>
        </div>
    );
}

export default EarthquakeDetails;