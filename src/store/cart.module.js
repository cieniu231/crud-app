

export const cartStore = {
    namespaced: true,

    state: () => ({
        count: 0
      }),
      mutations: {
        increment (state) {
          // `state` is the local module state
          state.count++
        },
        decrement (state) {
            // `state` is the local module state
            state.count--
          },
        setValue (state, value) {
            state.count = value
        }
      },
      actions: {
        increment (context) {
          context.commit('increment')
        },
        decrement (context) {
            context.commit('decrement')
        },
        setValue (context) {
            context.commit('setValue')
        }
    }   
}