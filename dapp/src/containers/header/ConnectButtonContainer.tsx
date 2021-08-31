import React from 'react';
import { useConnect} from "../../dapp/dapp";
import { NETWORK} from '../../dapp/defaults';

import ConnectButton from '../../components/header/ConnectButton';

const ConnectButtonContainer: React.FC = () => {
  const connect = useConnect();

  const handleConnect = React.useCallback(async () => {
    try {
      await connect(NETWORK, { forcePermission: true })
    } catch (err) {
      console.error((err as Error).message)
    }
  }, [connect])

  return (
    <ConnectButton
      onClick={handleConnect}
    />
  );
};

export default ConnectButtonContainer
