export interface DocSection {
  title: string;
  content: string;
  version: string;
  breadcrumbs: { label: string; href?: string }[];
}

export const docContentData: DocSection = {
  title: 'Authentication Service v2.0',
  content: 'This document outlines the steps necessary to integrate the GTSS Payment Gateway into your application. We will cover authentication, request formatting, and error handling.',
  version: 'v2.1.4 (Stable)',
  breadcrumbs: [
    { label: 'Platform', href: '#' },
    { label: 'API', href: '#' },
    { label: 'Authentication' },
  ],
};

export const docErrorCodes = [
  {
    code: '401_INVALID',
    description: 'Token is missing or invalid',
    resolution: 'Request a new token via /auth/token',
  },
  {
    code: '403_SCOPE',
    description: 'Insufficient permissions',
    resolution: 'Check scopes in your request',
  },
  {
    code: '429_LIMIT',
    description: 'Rate limit exceeded',
    resolution: 'Back off for 60 seconds',
  },
];

export const docNavigation = {
  previous: {
    label: 'System Architecture',
    href: '#',
  },
  next: {
    label: 'API References',
    href: '#',
  },
};
