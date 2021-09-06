new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            console.log('metodo resultado chamado...')
            return this.valor != 37 ?
                'Valor diferente de 37' : 'Valor igual 37'
        }
    },
    methods: {
        aumentar() {
            this.valor++
        },
        diminuir() {
            this.valor--
        }
    },
    watch: {
        valor(novo, antigo) {
            setTimeout(() => {
                this.valor = 0 
            }, 5000)
        }
    }
})