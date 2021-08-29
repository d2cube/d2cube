import {Layout, Text} from 'uinix-ui';

import {UrlType} from '../enums/index.js';
import Experience from './experience.js';
import BrandIcon from './ui/brand-icon.js';
import Grid from './ui/grid.js';

const HudPanel = ({player, title}) => (
  <Layout align="center" direction="column" p="m" spacing="xs">
    <Experience experience={player.experience} />
    <Layout align="center" spacing="xs">
      <Grid size={[1, 9]}>
        <BrandIcon icon="nav.items" href="/items" tooltip="Items" />
        <BrandIcon icon="nav.sets" href="/sets" tooltip="Sets" />
        <BrandIcon icon="nav.runewords" href="/runewords" tooltip="Runewords" />
        <div />
        <BrandIcon as="h1" icon="cube" href="/" size="icon.l" tooltip="Cube" />
        <BrandIcon icon="nav.develop" href="/develop" tooltip="Develop" />
        <BrandIcon icon="nav.about" href="/about" tooltip="About" />
        <BrandIcon icon="nav.support" href="/support" tooltip="Support" />
        <BrandIcon
          icon="nav.github"
          href={UrlType.GithubRepo}
          tooltip="Github"
        />
      </Grid>
    </Layout>
    <Text as="h2" fontSize="m">
      {title}
    </Text>
  </Layout>
);

export default HudPanel;
