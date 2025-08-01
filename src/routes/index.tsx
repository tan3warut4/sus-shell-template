import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// const CollectionPeriodPage = lazy(() => import('masterdata/CollectionPeriodPage'))

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<h1 className="text-xl">🏠 Home Page</h1>} />
    <Route
      path="/collection-periods"
      element={
        <Suspense fallback={<div>Loading Collection Period Page...</div>}>
          {/* <CollectionPeriodPage /> */}
        </Suspense>
      }
    />
  </Routes>
);
