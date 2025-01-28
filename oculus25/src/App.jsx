import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import SponsorsPage from "./pages/SponsorsPage";
import SchedulePage from "./pages/SchedulePage";
import ContactUsPage from "./pages/ContactUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsConditionsPage from "./pages/TermsConditions";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/events", element: <EventsPage /> },
        { path: "/event-details", element: <EventDetailsPage /> },
        { path: "/sponsors", element: <SponsorsPage /> },
        { path: "/schedule", element: <SchedulePage /> },
        { path: "/contact", element: <ContactUsPage /> },
        { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
        { path: "/terms-and-conditions", element: <TermsConditionsPage /> },
      ],
    },
  ]);

  return (
    <div className="min-h-screen w-full bg-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;