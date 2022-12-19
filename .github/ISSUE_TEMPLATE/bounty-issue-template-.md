---
name: 'Bounty Issue Template '
about: Describe this issue template's purpose here.
title: ''
labels: bounty
assignees: MartinBenediktBusch

---

<!--- Please DO NOT remove the automatically added 'new issue' label -->
<!--- Provide a general summary of the issue in the Title above -->

### Job Story
HOPR monitors its staking seasons using Dune analytics dashboards. In essence, people can stake HOPR tokens and receive a reward for locking their tokens into the smart contract. You can find the current dashboard for staking season 5 [here](https://dune.com/hoprnet/hopr-staking-season-5). You can read more about our current staking season 5 [here](https://medium.com/hoprnet/hopr-staking-5-0-b00007b4e4bf) and you can find the latest deployment on Gnosis Chain [here](https://blockscout.com/xdai/mainnet/address/0xd80fbBFE9d057254d80eEbB49f17aCA66a238e2D0BB1Ff7A9b3f2c87267626630aa0195cAE3ed5E3/contracts).

### Description
Dune is changing its whole database architecture. You can read more about it [here](https://dune.com/docs/reference/dune-v2/query-engine/). In this bounty you will replicate the following queries in the new Dune Engine v2 (Spark SQL). You can find the HOPR staking season 5 smart contract by selecting Dune Engine v2 (Spark SQL) as the database in Dune, search for hopr_protocol and select HoprStakeSeason5. The required changes to make the queries run in the new engine should be minimal (hint: Often it will be just required to change the FROM statement in SQL).

Queries: 
https://dune.com/queries/1392948  
https://dune.com/queries/1393548  
https://dune.com/queries/1393667  
https://dune.com/queries/1393720  
https://dune.com/queries/1392298  

<!--
Add milestones if applicable:

On large bounties, it might make sense to include various milestones, so to encourage early PRs and minimize delayed / last minute work.
-->

<!--
Add expiry date if applicable:

- If the bounty must be completed before specific date, expiry date must be included.
- Once expired, does it make the bounty invalid or is the bounty still valuable?
-->

### Definition of Done
- Replicate all queries above in the Dune Engine v2 (Spark SQL)
- New queries must replicate the output of the queries above (1:1). That is, no additional features should be added and no features should be deleted. 
- Create a pull request for our [hopr-devrel repository](https://github.com/hoprnet/hopr-devrel) and submit all your Dune queries into a new sub-folder.
<!--
If bounty is a dapp it should follow the dapp standard https://github.com/hoprnet/hopr-community/blob/main/DAPP_STANDARD.md
-->

### What is HOPR?

Find out more about HOPR at the following links:

- [HOPR Website](https://hoprnet.org)
- [hoprnet monorepo](https://github.com/hoprnet/hoprnet)
- [hoprnet docs](http://docs.hoprnet.org)
- [discord](https://discord.com/invite/dEAWC4G)

This bounty is part of [The Bounty Program](https://bounties.hoprnet.org/)
