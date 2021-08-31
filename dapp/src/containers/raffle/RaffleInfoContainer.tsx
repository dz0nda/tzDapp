import React, { useState } from 'react';
import { useOnBlock, useTezos } from '../../dapp/dapp';
import { RAFFLE_ADDRESS } from '../../dapp/defaults';
import { BigMapAbstraction } from "@taquito/taquito";

import RaffleInfo from '../../components/raffle/RaffleInfo';

type RaffleStorage = {
  admin: string;
  close_date: string;
  description: string;
  jackpot: number;
  players: [string];
  raffle_is_open: boolean;
  sold_tickets: BigMapAbstraction;
  winning_ticket_number_hash: string;
};

const RaffleInfoContainer: React.FC = () => {
  const tezos = useTezos();

  const [contract, setContract] = useState();
  const [storage, setStorage] = useState<RaffleStorage>();
  const [tickets, setTickets] = useState<string[]>([])

  React.useEffect(() => {
    (async () => {
      if (tezos) {
        const ctr = await (tezos as any).wallet.at(RAFFLE_ADDRESS);
        // debugger
        setContract(ctr);
      }
    })();
  }, [tezos]);

  const loadStorage = React.useCallback(async () => {
    if (contract) {
      const str = await (contract as any).storage();
      console.log(str);

      const ticket_ids = Array.from(Array(str.players.length).keys())
      const tckts = await str.sold_tickets.getMultipleValues(ticket_ids)
      setStorage(str)
      setTickets([...tckts.valueMap])
    }
  }, [contract]);

  React.useEffect(() => {
    loadStorage();
  }, [loadStorage]);

  useOnBlock(tezos, loadStorage)

  const buyTicket = React.useCallback(
    () => {
      return (contract as any).methods
        .buyTicket("unit")
        .send({ amount: 1 });
    },
    [contract]
  );

  return (
    <RaffleInfo
      storage={storage}
      tickets={tickets}
      buyTicket={buyTicket}
    />
  );
}

export default RaffleInfoContainer