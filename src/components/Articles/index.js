import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Article';
import './Articles.scss';


const Articles = ({ articles }) => (
  <main id="posts">
    {articles.map(article => (
      <Article
        key={article.id}
        {...article}
      />
    ))}
  </main>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Articles;
