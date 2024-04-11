import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EarthquakesList from '../features/earthquakes/EarthquakesList';
import EarthquakeDetails from '../features/earthquakes/EarthquakeDetails';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<EarthquakesList />} />
            <Route path="/earthquakes/:id" element={<EarthquakeDetails />} />
            <Route path="/earthquakes/:id/comments" element={<h1>comments</h1>} />
        </Routes>
    );
}

export default AppRoutes;