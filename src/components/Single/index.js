import React from 'react';
import PropTypes from 'prop-types';

import './single.scss';

const Single = ({
  title,
  category,
  excerpt,
  content,
}) => (
  <article id="single">
    <h1 id="single-title">{title}</h1>
    <div id="single-category">{category}</div>
    <p id="single-excerpt">{excerpt}</p>
    <div id="single-content">{content}</div>
  </article>
);

Single.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};


export default Single;
