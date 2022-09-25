export const convertNumber = (value : any) => {
    const CONVERT = new Intl.NumberFormat(undefined, {
        style : 'currency',
        currency : "USD"
    }).format(value);

    return CONVERT
}
