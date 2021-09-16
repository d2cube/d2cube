import {Layout} from 'uinix-ui';

import {FieldType} from '../../enums/index.js';
import {mark} from '../../utils/mark.js';
import BrandText from './brand-text.js';
import Chip from './chip.js';

const SearchFilter = ({
  enumValue,
  field,
  operator,
  query = '',
  isPreview = false,
}) => {
  let valueText = null;
  if (operator.cardinality > 0) {
    switch (field.type) {
      case FieldType.Enum: {
        valueText = (
          <Layout wrap spacing="s" wrapSpacing="s">
            <Chip text={isPreview ? enumValue : mark(enumValue, query)} />
          </Layout>
        );
        break;
      }

      case FieldType.Number:
        valueText = <BrandText color="text.primary" text={query} />;
        break;
      case FieldType.Json:
      case FieldType.String:
      default:
        valueText = <BrandText color="text.primary" text={`"${query}"`} />;
    }
  }

  return (
    <Layout py="s" spacing="m">
      {isPreview && <BrandText color="item.crafted" text={field.label} />}
      <BrandText color="text.muted" text={operator.label} />
      <BrandText color="text.primary" text={valueText} />
    </Layout>
  );
};

export default SearchFilter;
