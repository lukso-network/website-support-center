import React from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.scss';

import Box from '../components/Box';
import Headline from '../components/Headline';

import GeneralIcon from '../../static/img/icons/icon-general-gradient.png';
import ExtensionIcon from '../../static/img/icons/icon-extension-gradient.png';
import MigrationIcon from '../../static/img/icons/icon-migration-gradient.png';

function Index() {
  return (
    <Layout description="LUKSO Support Center">
      <div className={styles.container}>
        <Headline />
        <div className={styles.cardContainer}>
          <Box
            icon={GeneralIcon}
            link="./general/introduction"
            title="General"
            className="general"
            content="Get help related to wallet support and network interactions"
          />

          <Box
            icon={ExtensionIcon}
            link="./Extension/introduction"
            title="Extension"
            className="Extension"
            content="Get help related to Universal Profiles browser extension"
          />

          <Box
            icon={MigrationIcon}
            link="./migration/introduction"
            title="LYXe Migration"
            className="migration"
            content="Get help on the LYXe migration service"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
