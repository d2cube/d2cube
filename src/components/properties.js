import {isEmpty} from '../utils/fp.js';
import BrandText from './ui/brand-text.js';

const Properties = ({properties}) => (
  <ul>
    {properties.map((property, i) => {
      let content;
      if (isEmpty(property)) {
        content = null;
      } else if (Array.isArray(property)) {
        content = (
          <>
            {property.map((part, j) => (
              <Property key={j} property={part} />
            ))}
          </>
        );
      } else {
        content = <Property property={property} />;
      }

      return <li key={i}>{content}</li>;
    })}
  </ul>
);

const Property = ({property}) => (
  <BrandText
    text={typeof property === 'string' ? property : property.text}
    color={property.color}
  />
);

export default Properties;
