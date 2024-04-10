import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import { Link } from "react-router-dom";


function EarthquakesList() {
    const [earthquakes, setEarthquakes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadEarthquakes() {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch earthquakes');
                }
                const data = await response.json();
                setEarthquakes(data.earthquakes);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        loadEarthquakes();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!Array.isArray(earthquakes)) return <p>Unexpected data format</p>;

    if (earthquakes.length === 0) return <p>No earthquakes to display</p>;

    return (
        <div>
            {earthquakes.map((earthquake) => (
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
                </div>
            ))}
        </div>
    );
}

export default EarthquakesList;