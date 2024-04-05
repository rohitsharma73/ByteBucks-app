import History from "./History"

function PaymentHistory() {
    return (
        <div id="PaymentHistory">
            <div className={`bg-white py-16 px-4 w-full`} >
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                    <img src="https://img.freepik.com/free-vector/financial-obligation-document-promissory-bill-loan-agreement-debt-return-promise-issuer-payee-signing-contract-businessmen-making-deal_335657-848.jpg?w=740&t=st=1712332107~exp=1712332707~hmac=5393b3164ef766ccfa498f656fb7cbd70b825ced54635efbba9f2bdb7b311c2e" alt="img" />
                    <div className='flex flex-col px-8 item-center justify-center'>
                        <h1 className='font-bold text-4xl  py-2'>Payment History</h1>
                        <History />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentHistory