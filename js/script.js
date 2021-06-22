const app = new Vue(
    {
        el : '#app',

        data : {
            counter : 0,
            images : ["https://picsum.photos/id/230/500/300","https://picsum.photos/id/231/500/300","https://picsum.photos/id/237/500/300","https://picsum.photos/id/234/500/300","https://picsum.photos/id/236/500/300"]
        },
        created : function() {
            return setInterval(this.next, 3000);
        },
        methods : {
            next : function() {
                 (this.counter == this.images.length - 1) ? this.counter = 0 : this.counter++;
                 console.log(this.counter,this.images.length - 1);
             },
            prev : function() {
                (this.counter == 0) ? this.counter = this.images.length -1 : this.counter--;
                console.log(this.counter,this.images.length - 1);
            },
            cambia : function(indice) {
                this.counter = indice
            }
        }
    }
);