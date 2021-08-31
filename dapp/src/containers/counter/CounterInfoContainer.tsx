import React, { useState } from 'react';
import { useOnBlock, useTezos } from '../../dapp/dapp';
import { COUNTER_ADDRESS } from '../../dapp/defaults';
import { BigMapAbstraction, } from "@taquito/taquito";

import RaffleInfo from '../../components/raffle/RaffleInfo';
import CounterInfo from '../../components/counter/CounterInfo';

type CounterStorage = string;

const CounterInfoContainer: React.FC = () => {
  const tezos = useTezos();

  const [contract, setContract] = useState();
  const [storage, setStorage] = useState<CounterStorage>();

  React.useEffect(() => {
    (async () => {
      if (tezos) {
        const ctr = await (tezos as any).wallet.at(COUNTER_ADDRESS);
        // debugger
        setContract(ctr);
      }
    })();
  }, [tezos]);

  const loadStorage = React.useCallback(async () => {
    if (contract) {
      const str = await (contract as any).storage();
      console.log(str);
      setStorage(str.toString())
    }
  }, [contract]);

  React.useEffect(() => {
    loadStorage();
  }, [loadStorage]);

  useOnBlock(tezos, loadStorage)

  const addValue = React.useCallback(
    (value: number) => {
      return (contract as any).methods
        .increment(value)
        .send();
    },
    [contract]
  );

  const subValue = React.useCallback(
    (value: number) => {
      return (contract as any).methods
        .decrement(value)
        .send();
    },
    [contract]
  );

  const resetValue = React.useCallback(
    () => {
      return (contract as any).methods
        .reset("unit")
        .send();
    },
    [contract]
  );

  return (
    <CounterInfo
      storage={storage}
      addValue={addValue}
      subValue={subValue}
      resetValue={resetValue}
    />
  );
}

export default CounterInfoContainer