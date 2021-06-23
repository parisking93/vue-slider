const app = new Vue(
    {
        el : '#app',

        data : {
            counter : 0,
            images : ["https://picsum.photos/id/230/500/300","https://picsum.photos/id/231/500/300","https://picsum.photos/id/237/500/300","https://picsum.photos/id/234/500/300","https://picsum.photos/id/236/500/300"],
            autoplay : "",
            intervallo : '',
            check : ''
        },
        mounted(){
            this.autoplay = true;
            this.intervallo = setInterval(this.next, 3000);

            document.addEventListener('keyup', (event)=>{
                if (event.key == ' ' && this.autoplay == true) {
                    this.stop();
                    this.autoplay =false;
                } else if (event.key == ' ' && this.autoplay == false) {
                    this.set();
                    this.autoplay =true;
                }
            });
        },
        methods : {
            next : function() {
                 (this.counter == this.images.length - 1) ? this.counter = 0 : this.counter++;
             },
            prev : function() {
                (this.counter == 0) ? this.counter = this.images.length -1 : this.counter--;

            },
            cambia : function(indice) {
                this.counter = indice
            },
            set : function() {
                this.autoplay = true;
                this.intervallo = setInterval(this.next, 3000);;
            },
            stop : function() {
               this.autoplay = false;
               this.intervallo = clearInterval(this.intervallo);
            }
        }
    }
);