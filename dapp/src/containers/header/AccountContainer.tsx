import React from 'react';
import { useAccountPkh, useConnect, useOnBlock, useTezos} from "../../dapp/dapp";

import Account from '../../components/header/Account';

const AccountContainer: React.FC = () => {
  const connect = useConnect();
  const accountPkh = useAccountPkh();
  const tezos = useTezos();
  const [balance, setBalance] = React.useState('');

  const accountPkhPreview = React.useMemo(() => {
    if (!accountPkh) return ''
    else {
      console.log('account', accountPkh);
      const accPkh = (accountPkh as unknown) as string
      const ln = accPkh.length
      return `${accPkh.slice(0, 7)}...${accPkh.slice(ln - 4, ln)}`
    }
  }, [accountPkh]);

  const loadBalance = React.useCallback(async () => {
    // console.log(loadBalance)
    if (tezos) {
      const tezosOk = tezos as any
      const bal = await tezosOk.tz.getBalance(accountPkh)
      setBalance(tezosOk.format('mutez', 'tz', bal).toString())
    }
  }, [tezos, accountPkh, setBalance])

  React.useEffect(() => {
    loadBalance()
  }, [loadBalance])

  useOnBlock(tezos, loadBalance)

  return (
    <Account
      address={accountPkhPreview}
      balance={balance}
    />
  );
};

export default AccountContainer