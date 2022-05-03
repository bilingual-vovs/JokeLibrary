class Jokes {
    constructor(){

    }
    help(){
        console.log(`Hey, Odin see you need some help, right?
    - To see list of jokes use "jokes.jokeYouWantToUse()
    - To check the list of jokes use "jokes.getList()"
    - To get description of joke use "jokes.description('nameOfJoke')
    - To get the systamized objekt of jokes you can use "jokes.getSystamized()", to see info about that object use "systemJokes.help()"`)
    }
    redirectS(){
        window.location.href = "about:blank"
    }
    redirectPlus(URL){
        window.location.href = URL
    }
    timeoutRedirectS(){
        setTimeout(()=>{
            window.location.href = "about:blank"
        }, 5000)
    }
    timeoutRedirectPlus(timeout, URL){
        setTimeout(()=>{
            window.location.href = URL
        }, timeout)
    }
}

let jokes = new Jokes()