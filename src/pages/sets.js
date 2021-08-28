import {useState} from 'react';
import {Layout} from 'uinix-ui';

import {getSets} from '../api/get-sets.js';
import PageLayout from '../components/page-layout.js';
import SetPreview from '../components/set-preview.js';
import {ItemTierTypeLabels} from '../constants/item-tier-type-labels.js';
import {groupBy} from '../utils/fp.js';

const Page = () => {
  const [set, setSet] = useState(null);
  console.log(set);

  return (
    <PageLayout title="Sets">
      <Layout>
        <ul>
          {Object.entries(groupedSets).map(([tier, sets]) => (
            <ul key={tier}>
              {ItemTierTypeLabels[tier]}
              {sets.map((set) => (
                <li key={set.id} onClick={() => setSet(set)}>
                  {set.name}
                </li>
              ))}
            </ul>
          ))}
        </ul>
        {set && <SetPreview set={set} />}
      </Layout>
    </PageLayout>
  );
};

const groupedSets = groupBy('tier')(getSets());

export default Page;
