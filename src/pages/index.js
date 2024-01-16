import React from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.scss';

import Box from '../components/Box';
import Headline from '../components/Headline';

function Index() {
  return (
    <Layout description="LUKSO Support Center">
      <div className={styles.container}>
        <Headline />
        {/* TODO add search bar here */}
        <br />
        <div className={styles.cardContainer}>
          <Box
            // icon={NetworksIcon}
            link="./extension/introduction"
            title="Extension"
            content="Get help on the extension"
          />
          <Box
            // icon={NetworksIcon}
            link="./migration/introduction"
            title="LYXe Migration"
            content="Get help on the LYXe migration"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
