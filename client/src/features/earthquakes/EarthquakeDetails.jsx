import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../constants';
import { Link } from'react-router-dom';

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
            <h2>Earthquake Details</h2>
            <div key={earthquake.id} className='earthquake-container'>  
                    <h2>Type: {earthquake.feature_type}</h2>
                    <p>Mag: {earthquake.attributes.magnitude}</p>
                    <p>Place: {earthquake.attributes.place}</p>
                    <p>Time: {earthquake.attributes.time}</p>
                    <p>tsunami: {earthquake.attributes.tsunami}</p>
                    <p>mag_type: {earthquake.attributes.mag_type}</p>
                    <p>title: {earthquake.attributes.title}</p>
                    <p>latitude: {earthquake.attributes.coordinates.latitude}</p>
                    <p>longitude: {earthquake.attributes.coordinates.longitude}</p>
                    <p>external_url: {earthquake.links.external_url}</p>
                    <Link to={`/earthquakes/${earthquake.id}/comments`}></Link>
            </div>
        </div>
    );
}

export default EarthquakeDetails;