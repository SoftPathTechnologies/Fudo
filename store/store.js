import create from 'zustand';

export const useStore = create((set) => ({
    // Cart
    cart: {
        pizzas: []
    },

    // Add Pizza to Cart
    addPizza: (data) => {
        set((state) => ({
            cart: {
                pizzas: [
                    ...state.cart.pizzas,
                    data
                ]
            }
        }))
    },

    // Remove Pizza from Car
    removePizza: (index) =>
        set((state) => ({
            cart: {
                pizzas: state.cart.pizzas.filter((_, i) => i != index)
            }
        }))

}))