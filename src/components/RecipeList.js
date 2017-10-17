import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = ({ recipes, onClick, className, style }) => (
  <div className={className} style={style}>
    <h2>Recipes</h2>
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id} onClick={() => onClick(recipe.id)}>
          <span>{recipe.name}</span>
          <span>{recipe.category}</span>
        </li>
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default RecipeList;
