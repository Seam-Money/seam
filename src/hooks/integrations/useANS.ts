import { AptosAccount, AptosClient, Types } from "aptos";

export const resolveName = async (account:AptosAccount, client: AptosClient) => {

    const tableRequest = {
        key_type: "address",
        value_type: "string",
        key: account.address,
    } as Types.TableItemRequest;
    const name = await client.getTableItem(
  "115666430819508854909334766482148507499",
    tableRequest
  )
    console.log("NAME", name);

}
