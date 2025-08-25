import React, { useState } from 'react';
import { BRIDGED_TOKENS_CONFIGS } from '../../constants.js';
import styles from './ImportTokenSection.module.scss';

const ImportTokenButton = ({ tokenKey }) => {
  const [isImporting, setIsImporting] = useState(false);
  const [importStatus, setImportStatus] = useState(null);

  const tokenConfig = BRIDGED_TOKENS_CONFIGS[tokenKey];

  const importToken = async () => {
    if (!window.ethereum) {
      setImportStatus({
        type: 'error',
        message:
          'No wallet provider found. Please install MetaMask, Rabby, or another Web3 wallet.',
      });
      return;
    }

    setIsImporting(true);
    setImportStatus(null);

    try {
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenConfig.address,
            symbol: tokenConfig.symbol,
            decimals: tokenConfig.decimals,
          },
        },
      });

      if (wasAdded) {
        setImportStatus({
          type: 'success',
          message: `${tokenConfig.symbol} token has been added to your wallet!`,
        });
      } else {
        setImportStatus({
          type: 'warning',
          message: 'Token import was cancelled or failed.',
        });
      }
    } catch (error) {
      console.error('Error importing token:', error);

      let errorMessage = 'Failed to import token. ';

      if (error.code === 4001) {
        errorMessage += 'User rejected the request.';
      } else {
        errorMessage += error.message || 'Please try again.';
      }

      setImportStatus({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setIsImporting(false);
    }
  };

  const handleClick = () => !isImporting && importToken();

  React.useEffect(() => {
    if (importStatus) {
      const timer = setTimeout(() => {
        setImportStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [importStatus]);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.importButton} ${isImporting ? styles.importing : ''}`}
        onClick={handleClick}
        disabled={isImporting}
        type="button"
        title={`Import ${tokenConfig.symbol} token to your wallet`}
      >
        {isImporting ? (
          <span className={styles.loadingContainer}>
            <span className={styles.spinner}></span>
            Importing...
          </span>
        ) : (
          <span className={styles.buttonContent}>
            <span className={styles.tokenSymbol}>{tokenConfig.symbol}</span>
            <span className={styles.buttonText}>Import to Wallet</span>
          </span>
        )}
      </button>

      {importStatus && (
        <div className={`${styles.statusMessage} ${styles[importStatus.type]}`}>
          {importStatus.message}
        </div>
      )}
    </div>
  );
};

const ImportTokenSection = () => {
  return (
    <div className={styles.tokenTableWrapper}>
      <table className={styles.tokenTable}>
        <thead>
          <tr>
            <th>Network Name</th>
            <th>Bridged LYX Contract Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(BRIDGED_TOKENS_CONFIGS).map(
            ([tokenKey, tokenConfig]) => (
              <tr key={tokenKey}>
                <td className={styles.networkName}>
                  {tokenConfig.bridgeNetwork.chainName}
                </td>
                <td className={styles.contractAddress}>
                  <a
                    href={`http://etherscan.io/address/${tokenConfig.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <code>{tokenConfig.address}</code>
                  </a>
                </td>
                <td className={styles.importButtonCell}>
                  <ImportTokenButton tokenKey={tokenKey} />
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ImportTokenSection;
