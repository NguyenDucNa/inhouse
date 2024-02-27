import { graphql } from "src/graphql/types";
import { useMutation } from "@apollo/client";

const MUTATE = graphql(`
    mutation LocalDeviceOrderCreateInvoice($orderId: ID!, $input: LocalDeviceOrderCreateInvoice!){
        localDeviceOrderCreateInvoice(orderId: $orderId, input: $input)
    }
`)

export function useLocalDeviceOrderCreateInvoice(){
    return useMutation(MUTATE,{});
}