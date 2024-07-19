"use server"

export async function addOrder(formData){
    try {
        console.log("Setting order..")
        const {customer, delivery, dish, breakroom, quantity, disc} = Object.fromEntries(formData);
        
    } catch (error) {
        console.error
        console.log(error)
    }
}