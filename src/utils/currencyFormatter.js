export const currrencyFormatter=(amount)=>{
    return amount?.toLocaleString("en-Us",{
        style: "currency",
        currency:"USD"
    })
}