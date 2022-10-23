import { shortenAddress } from "hooks/formatting";
import DappLogo from "sections/dapps/DappLogo";
import { getDappImg, isDapp } from "util/dappUtils";

interface AccountProps {
    name?: string;
    addr: string | any
    isSelf?: boolean
}
const AccountOutline = ({ name, addr,isSelf=false }: AccountProps) => {

    return (<p data-tip={addr}
    className={"account-outline text-center items-center justify-center " }>
        {isDapp(addr) ? (DappLogo(getDappImg(addr))) : shortenAddress(addr)}
        </p>)
}
export default AccountOutline

