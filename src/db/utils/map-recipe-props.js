export const mapRecipeProps = (props) => (recipes) => {
  const {type} = props;

  return recipes.map((recipe) => ({
    ...recipe,
    type,
  }));
};
