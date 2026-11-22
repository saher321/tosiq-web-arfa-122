import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware' 

export const useAuth = create(
    persist(
        (set) => ({
            user: null,
            token: null,
            isAuthenticated: false,

            login: (loggedInUser, userToken) => {
                set({
                    user: loggedInUser, 
                    token: userToken,
                    isAuthenticated: true
                })

            },

            logout: () => {
                set({
                    user: null, 
                    token: null,
                    isAuthenticated: false
                })
            }

        }),
        {
            name: "auth-cred",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)