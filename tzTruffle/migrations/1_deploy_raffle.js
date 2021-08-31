const Raffle = artifacts.require("Raffle"); // step 1
// step 2
const {MichelsonMap} = require("@taquito/taquito");
const web3 = require("web3");
const {pkh} = require("../faucet.json");

const admin = pkh
const closeDate = Date.now() + 10;
const jackpot = 100
const description = ""
const players = []
const soldTickets = new MichelsonMap()
const raffleIsOpen = true
const winningTicketHash = web3.utils.asciiToHex("ec85151eb06e201cebfbb06d43daa1093cb4731285466eeb8ba1e79e7ee3fae3").slice(2)

const initialStorage = {
    "contract_name": "Raffle smart contract with big map",
    "admin": admin,
    "close_date": closeDate.toString(),
    "jackpot": jackpot,
    "description": description,
    "players": players,
    "sold_tickets": soldTickets,
    "raffle_is_open": raffleIsOpen,
    "winning_ticket_number_hash": winningTicketHash
}

// step 3
module.exports = deployer => {
    deployer.deploy(Raffle, initialStorage)
};