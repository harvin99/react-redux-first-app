export const increment = (numb: number) => {
    return { type: "INCREMENT", payload: numb }
}

export const decrement = (numb: number) => {
    return { type: "DECREMENT",  payload: numb }
}

export const signIn = () => {
    return { type: "SIGN_IN" }
}