new Vue({
    el: '#desafio',
    data: {
        nome: 'Gabriel',
        idade: 25,
        imagem: 'https://s2.glbimg.com/XgbwZHhlJ-5SeEPSuWvy9s-y6OA=/0x600/s.glbimg.com/po/tt2/f/original/2017/04/06/hemotify-3.jpg'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})