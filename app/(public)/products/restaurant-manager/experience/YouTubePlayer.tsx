"use client";

import React from 'react';

interface YouTubePlayerProps {
  url: string;
  title?: string;
  className?: string;
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ url, title, className }) => {
  // Convert watch URL to embed URL if needed
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('embed')) return url;
    
    try {
      const urlObj = new URL(url);
      let videoId = '';
      let startAt = 0;

      if (urlObj.hostname.includes('youtube.com')) {
        if (urlObj.pathname.startsWith('/shorts/')) {
          videoId = urlObj.pathname.split('/')[2];
        } else {
          videoId = urlObj.searchParams.get('v') || '';
        }
        const t = urlObj.searchParams.get('t');
        if (t) startAt = parseInt(t.replace('s', '')) || 0;
      } else if (urlObj.hostname.includes('youtu.be')) {
        videoId = urlObj.pathname.slice(1);
        const t = urlObj.searchParams.get('t');
        if (t) startAt = parseInt(t.replace('s', '')) || 0;
      }

      return `https://www.youtube.com/embed/${videoId}${startAt ? `?start=${startAt}` : ''}`;
    } catch (e) {
      return url;
    }
  };

  const embedUrl = getEmbedUrl(url);

  if (!embedUrl) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-black/40 text-white/40 font-mono text-xs uppercase tracking-widest border border-dashed border-white/10">
        Media link pending
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <iframe
        src={embedUrl}
        title={title || "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
};
