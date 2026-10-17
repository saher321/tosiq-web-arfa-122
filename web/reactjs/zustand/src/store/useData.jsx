import { create } from 'zustand'

export const useData = create(
    (set) => ({
        user: "Ali",
        phone: "+92 313 1234567",
        
        greetings: () => {
            console.log("Hello from Zustand")
        }
    })
)