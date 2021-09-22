import Link from 'next/link.js';
import {Layout, Text} from 'uinix-ui';

import BrandIcon from './brand-icon.js';

const CardPreview = ({preview, onViewPreview}) => {
  const {description, href, icon, title} = preview;

  const handleViewPreview = (event) => {
    event.stopPropagation();
    onViewPreview(preview);
  };

  return (
    <Link href={href}>
      <Layout justify="space-between" spacing="m" variant="card.preview">
        <Layout direction="column" spacing="s">
          <Layout align="center" spacing="s">
            <BrandIcon icon={icon} />
            <h3>{title}</h3>
          </Layout>
          <Text variant="description">{description}</Text>
        </Layout>
        <BrandIcon
          icon="video"
          tooltip="Click to view preview"
          onClick={handleViewPreview}
        />
      </Layout>
    </Link>
  );
};

export default CardPreview;
