import ReactSelect from 'react-select';

const Search = ({filters, schema, onChange}) => {
  console.log(filters, schema, onChange);
  const options = [];
  return <ReactSelect options={options} />;
};

export default Search;
