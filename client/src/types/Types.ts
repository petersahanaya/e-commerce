interface RegisterProps {
    title : string
}

interface ActionProps {
    type : string,
    payload : object | string | number
}

type DispatchProps = (ActionProps : ActionProps) => void

interface ApiProps {
        id: number,
        title: string,
        price: number,
        description: string,
        category: {
        id: number,
        name: string,
        image: string
        },
        images: string[],
        quantity? : number
}

interface UseSelectorProps{
        products : {
            isLoading : boolean,
            data : ApiProps[],
            isError : null | string
        }
}

interface UseSelectorPropsCart{
        cart : {
            data : ApiProps[],
            successAdd : boolean,
            successRemove : boolean,
            initialData : ApiProps[]
        }
}

interface UseSelectorPropsSearch{
        search : {
            data : ApiProps[],
            isLoading : boolean
        }
}

interface UseSelectorPropsDetail{
    getProductId : {
            isLoading : boolean,
            data : ApiProps,
            initialData : ApiProps
        }
}

export const configFetch = (method : string, value : object) => {
    return {
        method : method,
        headers : { "Content-Type" : "Application/json" },
        body : JSON.stringify(value)
    }
}

export type {RegisterProps, UseSelectorPropsSearch, UseSelectorPropsCart, UseSelectorPropsDetail, ActionProps, DispatchProps, ApiProps, UseSelectorProps}