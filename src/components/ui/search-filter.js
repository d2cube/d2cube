import {Layout} from 'uinix-ui';

import {FieldType} from '../../enums/index.js';
import BrandText from './brand-text.js';
import Chip from './chip.js';

const SearchFilter = ({enums, field, operator, value}) => {
  let valueText = null;
  if (operator.cardinality > 0) {
    switch (field.type) {
      case FieldType.EnumSet: {
        valueText = (
          <Layout wrap spacing="s" wrapSpacing="s">
            {enums.map((text) => (
              <Chip key={text} text={text} />
            ))}
          </Layout>
        );
        break;
      }

      case FieldType.Number:
        valueText = <BrandText color="text.primary" text={value} />;
        break;
      case FieldType.Json:
      case FieldType.String:
      default:
        valueText = <BrandText color="text.primary" text={`"${value}"`} />;
    }
  }

  return (
    <Layout py="s" spacing="m">
      <BrandText color="item.rune" text={field.label} />
      <BrandText color="item.unique" text={operator.label} />
      <BrandText color="text.primary" text={valueText} />
    </Layout>
  );
};

export default SearchFilter;
