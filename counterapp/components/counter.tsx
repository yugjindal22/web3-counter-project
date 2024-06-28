import { prepareContractCall } from "thirdweb";
import { CONTRACT } from "../utils/constants";
import { TransactionButton, useReadContract } from "thirdweb/react";

const Counter: React.FC = () => {

    const { data: count, isLoading: loadingCount, refetch } = useReadContract({
        contract: CONTRACT,
        method: "getCount",
        });
    return (
        <div style={{ marginTop: "20px"}}>
            <h1>Counter</h1>
            {loadingCount ? (
                <p>Loading...</p>
            ) : (
                <h2>{count?.toString()}</h2>
            )}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", gap: "10px"}}>
                <TransactionButton
                transaction={() => prepareContractCall({
                      contract: CONTRACT,
                      method: "decrement",
                    })}
                    onTransactionSent={() => console.log("decrement sent")}
                    onTransactionConfirmed={() => {
                        console.log("decremented"),
                        refetch()}}
                    >-</TransactionButton>
                <TransactionButton 
                transaction={() => prepareContractCall({
                    contract: CONTRACT,
                    method: "increment",
                  })}
                  onTransactionSent={() => console.log("increment sent")}
                  onTransactionConfirmed={() => {
                    console.log("Incremented"),
                    refetch()}}
                  >+</TransactionButton>
            </div>
        </div>
    )
    };

    export default Counter;
    