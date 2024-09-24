export default function TransactionPage( { params }: {params: { transactionId: string }} ){
    return (
        <div>
            <h1>Transaction Details for Product {params.transactionId}</h1>
        </div>
    );
}