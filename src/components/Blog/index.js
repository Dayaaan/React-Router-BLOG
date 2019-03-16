/**
 * NPM import
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/**
 * Local import
 */
import './Blog.scss';
import Header from 'src/components/Header';
import Articles from 'src/components/Articles';
import Single from 'src/components/Single';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';

import categories from 'src/data/categories';
import { getPostsByCategory, getPostBySlug } from 'src/data/posts';

/**
 * Code
 */

// const Demo = () => (
//   <div>
//     demo
//   </div>
// );
const Blog = () => (
  <div id="blog">
    <Header categories={categories} />
    <Switch>
      {categories.map(category => (
        <Route
          exact
          key={category.label}
          path={category.route}
          render={() => <Articles articles={getPostsByCategory(category.label)} />}
        />
      ))}
      <Route
        path="/posts/:slug"
        render={({ match }) => {
          const { slug } = match.params;
          const article = getPostBySlug(slug);
          return (
            <Single {...article} />
          );
        }}
      />
      <Redirect from="/jquery" to="/autre" />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

/**
 * Prop component : lorsque l'on souhaite transmettre un composants sans configuration
 */

/**
 * Prop render : tous les autres cas de figures
 * render = { () => (
 *  <Demo info="enrichissement" autre="" />
 * )}
 */

/**
 * Export
 */
export default Blog;
