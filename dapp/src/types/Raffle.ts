import { BigMapAbstraction } from "@taquito/taquito";

export type RaffleStorage = {
  admin: string;
  close_date: string;
  description: string;
  jackpot: number;
  players: [string];
  raffle_is_open: boolean;
  sold_tickets: BigMapAbstraction;
  winning_ticket_number_hash: string;
};

export type launchRaffleButtonProps = { raffleReward: number; raffleDescription: string; raffleClosingDate: Date; raffleWinningHashNumber: string };
export  type launchRaffleParameters = { reward: number; description: string; closingDate: Date; winningTicketHash: string };
