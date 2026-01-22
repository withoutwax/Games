import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4
    if (import.meta.env.VITE_GOOGLE_ANALYTICS_ID) {
      ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
    }
  }, []);

  useEffect(() => {
    // Send pageview on route change
    if (import.meta.env.VITE_GOOGLE_ANALYTICS_ID) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default Analytics;
