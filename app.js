const main = Vue.createApp({
    

    data(){
        return {
            img : 'https://randomuser.me/api/portraits/men/75.jpg',
            name : 'Mohsin Nawaz',
            age : '45',
            email: 'malikmuhsin@gmail.com',
        }    
    },
    methods: {
        async getUser(){
            const data = await fetch('https://randomuser.me/api/')
            const {results} = await data.json()
            
            console.log(results);

            this.img = results[0].picture.medium,
            this.name =` ${results[0].name.first} ${results[0].name.last}`;
            this.age = results[0].dob.age;
            this.email = results[0].email;

        }
    }

});

main.mount('#main');