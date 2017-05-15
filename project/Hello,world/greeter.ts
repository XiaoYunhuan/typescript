/**
 * Created by xiaoyunhuan on 2017/5/9.
 */
class Greeter {

    constructor(public greeting: string) { }

    greet() {

        return "<h1>" + this.greeting + "</h1>";

    }

}



let greeter = new Greeter("Hello, world!");



document.body.innerHTML = greeter.greet();