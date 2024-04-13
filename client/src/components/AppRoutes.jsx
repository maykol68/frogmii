import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EarthquakesList from '../features/earthquakes/EarthquakesList';
import EarthquakeDetails from '../features/earthquakes/EarthquakeDetails';
import NewCommentEarthquakeForm from '../features/earthquakes/NewCommentEarthquakeForm';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<EarthquakesList />} />
            <Route path="/earthquakes/:id" element={<EarthquakeDetails />} />
            <Route path="/earthquakes/:earthquake_id/comments" element={<NewCommentEarthquakeForm />} />
        </Routes>
    );
}
export default AppRoutes;