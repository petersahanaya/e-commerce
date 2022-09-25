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
        images: string[]
}

interface UseSelectorProps {
        products : {
            isLoading : string,
            data : ApiProps[],
            isError : null | string
        }
}

export const configFetch = (method : string, value : object) => {
    return {
        method : method,
        headers : { "Content-Type" : "Application/json" },
        body : JSON.stringify(value)
    }
}

export type {RegisterProps, ActionProps, DispatchProps, ApiProps, UseSelectorProps}