import { GA_TRACK_KEY } from './config';

export const GA_TRACKING_ID = GA_TRACK_KEY;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
