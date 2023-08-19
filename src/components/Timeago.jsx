import React from 'react';
import { formatDistanceToNow } from 'date-fns';

function TimeAgo({ timestamp }) {
  const timeAgo = formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  
  return <span>{timeAgo}</span>;
}

export default TimeAgo;
