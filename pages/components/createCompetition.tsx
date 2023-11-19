import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'

import styles from '../../styles/Home.module.css';

import {ethers} from "ethers"

export default function CreateCompetition() {
  const [name, setName] = React.useState('')
  const [tokenAddress, setTokenAddress] = React.useState('')
  const [amount, setAmount] = React.useState(ethers.constants.Zero)
 

  const { config } = usePrepareContractWrite({
    address: '0xb13cb2f9d2963bCF222097ff143E96F1FE3E5DFA',
    abi: [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "competitionId",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "winners",
            "type": "address[]"
          }
        ],
        "name": "claimPrize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "competitionId",
            "type": "uint256"
          }
        ],
        "name": "completeCompetition",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_prizeAmount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_prizeToken",
            "type": "address"
          }
        ],
        "name": "createCompetition",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "push",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "competitions",
        "outputs": [
          {
            "internalType": "address",
            "name": "organizer",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "prizeAmount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "prizeToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
          },
          {
            "internalType": "enum CompetitionPlatform.CompetitionStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "competitionId",
            "type": "uint256"
          }
        ],
        "name": "getCompetitionDetails",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "organizer",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "prizeAmount",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "prizeToken",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
              },
              {
                "internalType": "enum CompetitionPlatform.CompetitionStatus",
                "name": "status",
                "type": "uint8"
              }
            ],
            "internalType": "struct CompetitionPlatform.Competition",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getNumberOfCompetitions",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    functionName: 'createCompetition',
    args: [name,amount,tokenAddress],
  })
  const { data, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    
      <form
        className={styles.createCompetitionForm}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("sa")
          write?.();
        }}
      >
        <div className={styles.formGroup}>
          <label className={styles.competitionLabel} htmlFor="name">Competition Name</label>
          <input className={styles.competitionInput}
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Competition Name"
            value={name}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.competitionLabel} htmlFor="address">Token Address</label>
          <input className={styles.competitionInput}
            id="address"
            onChange={(e) => setTokenAddress(e.target.value)}
            placeholder="Your token address"
            value={tokenAddress}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.competitionLabel} htmlFor="amount">Amount</label>
          <input className={styles.competitionInput}
            id="amount"
            onChange={(e) => setAmount(ethers.utils.parseEther(e.target.value))}
            placeholder=""
            value={ethers.utils.formatEther(amount)}
          />
        </div>
      
        <button className={styles.createButton} disabled={!write || isLoading}>
          {isLoading ? 'Creating Competition...' : 'Create Competition'}
        </button>
        {isSuccess && (
          <div className={styles.successMessage}>
            Successfully created competition!
            <div>
              <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
            </div>
          </div>
        )}
      </form>
   
  )
}

