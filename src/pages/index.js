import {Link} from 'gatsby';
import React from 'react';

import {PageLayout} from '../components/index.js';

const Page = () => (
  <PageLayout title="Evil will be resurrected soon...">
    <Link to="/explorer">Explore</Link>
  </PageLayout>
);

export default Page;
