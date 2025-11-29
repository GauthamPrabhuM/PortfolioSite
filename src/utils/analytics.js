import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initializeAnalytics = (measurementId) => {
  ReactGA.initialize(measurementId);
};

// Track page views
export const trackPageView = (path, title) => {
  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: title,
  });
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  ReactGA.event(eventName, eventParams);
};

// Track button clicks
export const trackButtonClick = (buttonName, buttonLocation) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

// Track external link clicks
export const trackExternalLink = (linkName, linkUrl) => {
  trackEvent('external_link_click', {
    link_name: linkName,
    link_url: linkUrl,
  });
};

// Track section scrolling/engagement
export const trackSectionEngagement = (sectionName, scrollDepth) => {
  trackEvent('section_engagement', {
    section_name: sectionName,
    scroll_depth_percent: scrollDepth,
  });
};

// Track resume download
export const trackResumeDownload = (fileName) => {
  trackEvent('resume_download', {
    file_name: fileName,
  });
};

// Track file downloads
export const trackFileDownload = (fileName, fileType) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  });
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  trackEvent('social_click', {
    platform: platform,
  });
};

// Track navigation menu interactions
export const trackNavigation = (destination) => {
  trackEvent('navigation', {
    destination: destination,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    depth_percent: depth,
  });
};
