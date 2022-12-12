export const uniqueDate = (tasks) => {
    const unique = []
    tasks.forEach(task => {
        if (!unique.includes(task.dateFormat)) {
            unique.push(task.dateFormat)
        }
       
    })
    return unique;
    
} 
export const orderDate = (dates) => {
    return dates.sort((a, b) => {
        const firstDate = moment(a, "DD/MM/AAAA")
        const secondDate= moment(b, "DD/MM/AAAA")
        return firstDate - secondDate;
   }) 
}