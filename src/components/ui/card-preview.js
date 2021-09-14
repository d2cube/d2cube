import Link from 'next/link.js';
import {useState} from 'react';
import {Layout, Text} from 'uinix-ui';
import {v4 as uuid} from 'uuid';

import {getEmbedSrc} from '../../utils/get-embed-src.js';
import BrandIcon from './brand-icon.js';
import Button from './button.js';

const CardPreview = ({preview}) => {
  const {description, embedId, href, icon, title} = preview;
  const [embedKey, setEmbedKey] = useState(uuid());

  const rewatch = (event) => {
    event.stopPropagation();
    setEmbedKey(uuid());
  };

  return (
    <Link href={href}>
      <Layout direction="column" spacing="m" variant="card.preview">
        <Layout align="center" spacing="m">
          <BrandIcon icon={icon} />
          <h3>{title}</h3>
        </Layout>
        <Text variant="description">{description}</Text>
        {embedId && (
          <>
            <iframe
              key={embedKey}
              allowFullScreen
              src={getEmbedSrc(embedId)}
              frameBorder="0"
            />
            <Button text="Rewatch" onClick={rewatch} />
          </>
        )}
      </Layout>
    </Link>
  );
};

export default CardPreview;
