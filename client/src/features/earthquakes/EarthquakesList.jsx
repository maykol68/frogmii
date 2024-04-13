import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import { Link } from "react-router-dom";
import "./earthquakes.css"


function EarthquakesList() {
    const [earthquakes, setEarthquakes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadEarthquakes() {
            try {
                const response = await fetch(API_URL);
                console.log(response); 
                if (!response.ok) {
                    throw new Error('Failed to fetch earthquakes');
                }
                const data = await response.json();
                console.log(data);
                setEarthquakes(data.earthquakes);
                console.log(earthquakes);
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
                    <Link to={`/earthquakes/${earthquake.id}`} className="earthquake-title">{earthquake.attributes.title}</Link>
                </div>
            ))}
        </div>
    );
}

export default EarthquakesList;