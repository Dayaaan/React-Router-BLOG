import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './article.scss';

const Article = ({
  slug,
  title,
  category,
  excerpt,
}) => (
  <article className="post">
    <Link to={`posts/${slug}`}>
      <h2 className="post-title">{title}</h2>
      <div className="post-category">{category}</div>
      <div className="post-excerpt">{excerpt}</div>
    </Link>
  </article>
);
Article.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
export default Article;
