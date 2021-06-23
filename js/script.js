const app = new Vue(
    {
        el: '#app',
        data: {
            newTodo: '',
            todos: [
                'Fare i compiti',
                'Comprare il pane',
                'Andare a messa'
            ]

        },

        methods: {
            addTodo(){
                this.todos.push(this.newTodo);
                this.newTodo = '';
            },

            removeTodo(indice){
                this.todos.splice(indice, 1);
            }
        }
    }
);

