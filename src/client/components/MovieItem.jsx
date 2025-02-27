import React from 'react';
import starEmptyImage from '@images/star_empty.png';
import { TMDB_THUMBNAIL_URL } from '../../server/apis/url';
import { round } from '../utils/round';

function MovieItem({ rate, title, thumbnailUrl }) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + thumbnailUrl;

  return (
    <div className="item">
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={starEmptyImage} className="star" />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;
