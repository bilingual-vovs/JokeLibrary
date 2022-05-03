class Jokes {
    constructor(){

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