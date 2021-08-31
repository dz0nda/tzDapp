import React, { useState } from 'react';
import web3 from "web3";

import { useTezos } from '../../dapp/dapp';
import { RAFFLE_ADDRESS } from '../../dapp/defaults';

import { launchRaffleParameters } from '../../types/Raffle';
import RaffleLaunch from '../../components/raffle/RaffleLaunch';

const RaffleLaunchContainer: React.FC = () => {
  const tezos = useTezos();
  const [contract, setContract] = useState(undefined);
  const [reward, setReward] = useState("100");
  const [description, setDescription] = useState("");
  const [closingDate, setClosingDate] = useState(new Date());
  const [winningTicketHash, setwinningTicketHash] = useState("");

  React.useEffect(() => {
    (async () => {
      if (tezos) {
        const ctr = await (tezos as any).wallet.at(RAFFLE_ADDRESS);
        setContract(ctr);
      }
    })();
  }, [tezos]);

  const setNewDate = (date: any) => {
    if (date) {
      setClosingDate(date)
    }
  }

  const launchRaffle = React.useCallback(
    ({ reward, description, closingDate, winningTicketHash }: launchRaffleParameters) => {
      return (contract as any).methods
        .openRaffle(reward, closingDate, description, web3.utils.asciiToHex(winningTicketHash).slice(2))
        .send({ amount: reward });
    },
    [contract]
  );

  return (
    <RaffleLaunch
      reward={reward}
      description={description}
      closingDate={closingDate}
      winningTicketHash={winningTicketHash}
      setReward={setReward}
      setDescription={setDescription}
      setNewDate={setNewDate}
      setwinningTicketHash={setwinningTicketHash}
      onClick={() => {
        launchRaffle({
          reward: parseInt(reward),
          description: description,
          closingDate: closingDate,
          winningTicketHash: winningTicketHash
        })}}
    />
  );
}

export default RaffleLaunchContainer