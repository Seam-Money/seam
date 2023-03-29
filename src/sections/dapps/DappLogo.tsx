const DappLogo = (dappImg:string) => {
    return (
        <div className="p-1 w-10 h-10">
        <img className="rounded-2xl  " src={`/dapps/${dappImg}`} alt={`${dappImg}dapp-img`} />
        </div>
    )

}
export default DappLogo;