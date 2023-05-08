# Rate the docs 
## overall
8 out of 10
## RPCh Architecture 
10 out of 10
## Using RPCh
9 out of 10 
## Guides
5 out of 10

# what was the most difficult part to understand in the RPCh docs in relation to this task?
### Integrate RPCh is the most difficult part to understand for me.
# what would you improve in the docs?
### add some beginner friendly easy to understand example for each category 
- RPCh ethers adapter
- RPCh SDK
- RPCh Crypto 
 - bundler 
 - web
 - nodejs
 # what was your overall experience (please describe)?
 ### i tried with sdk(bundler,nodejs) and ethers adapter(bundler,nodejs) , but i was not able to intigrate  with anyone. I got errors in all methods. Here is error for above index.mjs :-
 ```
 $ DEBUG="rpch*" node index.mjs
  rpch:ethers:verbose Using SEND eth_chainId {"loggedAt":"1682455549268"} +0ms
  rpch:ethers:verbose is sdk ready? false {"loggedAt":"1682455549274"} +4ms
  rpch:ethers:verbose Using SEND net_version {"loggedAt":"1682455549275"} +1ms
  rpch:ethers:verbose is sdk ready? false {"loggedAt":"1682455549275"} +0ms
Error sending transaction: Error: could not detect network (event="noNetwork", code=NETWORK_ERROR, versi
on=providers/5.7.2)
    at Logger.makeError (D:\Github\hopr-bounty-submission\RPCh documentation review 0xbhagi\node_modules
\@ethersproject\logger\lib\index.js:238:21)
    at Logger.throwError (D:\Github\hopr-bounty-submission\RPCh documentation review 0xbhagi\node_module
s\@ethersproject\logger\lib\index.js:247:20)
    at RPChProvider.<anonymous> (D:\Github\hopr-bounty-submission\RPCh documentation review 0xbhagi\node
_modules\@ethersproject\providers\lib\json-rpc-provider.js:609:54)
    at step (D:\Github\hopr-bounty-submission\RPCh documentation review 0xbhagi\node_modules\@ethersproj
ect\providers\lib\json-rpc-provider.js:48:23)
    at Object.throw (D:\Github\hopr-bounty-submission\RPCh documentation review 0xbhagi\node_modules\@et
hersproject\providers\lib\json-rpc-provider.js:29:53)
    at rejected (D:\Github\hopr-bounty-submission\RPCh documentation review 0xbhagi\node_modules\@ethers
project\providers\lib\json-rpc-provider.js:21:65)
    at runNextTicks (node:internal/process/task_queues:60:5)
    at listOnTimeout (node:internal/timers:540:9)
    at process.processTimers (node:internal/timers:514:7) {
  reason: 'could not detect network',
  code: 'NETWORK_ERROR',
  event: 'noNetwork'
} 
```