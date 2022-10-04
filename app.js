const app = Vue.createApp({
    data(){
        return{
           userInput: '', 
           pargraphToogle: true,
           inputBackgroundColor: ''
        }
    },

    computed:{
        userClass(){
         return{user1: this.userInput === 'user1',
                user2: this.userInput === 'user2',
                visible: this.pargraphToogle,
                hidden: !this.pargraphToogle
        } 

        }
    },

    methods: {
        toogleParagraph(){
            this.pargraphToogle = !this.pargraphToogle
        }
    }
})

app.mount('#assignment')