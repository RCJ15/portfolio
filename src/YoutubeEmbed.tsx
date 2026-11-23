// rickroll: https://www.youtube.com/watch?v=E4WlUXrJgy4

import React from 'react';

interface YoutubeEmbedProps {
  embedId: string;
  width: string | number;
  height: string | number;
  borderSize?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId, width = "560", height = "315", borderSize = "4px"  }) => {
  return (
    <div style={{ border: `${borderSize} solid var(--border)`, overflow: "hidden", width: `${width}px`, height: `${height}px` }}>
      <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    </div>
  );
};

export default YoutubeEmbed;