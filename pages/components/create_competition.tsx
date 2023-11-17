import * as React from 'react'
import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from 'wagmi'

export function CreateCompetition() {
    const [name, setName] = React.useState('')
    const [tokenAddress, setTokenAddress] = React.useState('')
    const [amount, setAmount] = React.useState(0)

    const { config } = usePrepareContractWrite({
        address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
        abi: [
            {
                name: 'mint',
                type: 'function',
                stateMutability: 'nonpayable',
                inputs: [{ internalType: 'uint32', name: 'tokenId', type: 'uint32' }],
                outputs: [],
            },
        ],
        functionName: 'createCompetition',
        args: [name, tokenAddress, amount],
    })
    const { data, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                write?.()
            }}
        >
            <label>Competition Name</label>
            <input
                id="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Competition Name"
                value={name}
            />
            <label>Token Address</label>
            <input
                id="address"
                onChange={(e) => setTokenAddress(e.target.value)}
                placeholder=""
                value={tokenAddress}
            />
            <label>Amount</label>
            <input
                id="amount"
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                placeholder="0"
                value={amount}
            />

            <button disabled={!write || isLoading}>
                {isLoading ? 'Creating Competition...' : 'Create Competition'}
            </button>
            {isSuccess && (
                <div>
                    Successfully created competition!
                    <div>
                        <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
                    </div>
                </div>
            )}
        </form>
    )
}