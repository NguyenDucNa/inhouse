import { useCompanyCurrency } from "src/company/company-context";
import { formatCurrency } from "./currency-formatter";

export default function CurrencyView({price} : {price: number | null | undefined}){
    const currency = useCompanyCurrency();
    if(price === null || price === undefined){
        return <div>N/A</div>
    }

    return(
        <span>
            {formatCurrency(price, currency)}
        </span>
    )
}