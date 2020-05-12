//Variables
const listTweets = document.querySelector('#lista-tweets');
//Events
eventListeners();

loadingCacheTweets();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', addingTweet); //submit an event when you press the buttom

    listTweets.addEventListener('click', deleteTweet);

    document.addEventListener('DOMContentLoader', loadingCacheTweets);

}

function addingValue(tweet){
    const delTweet = document.createElement('a'); //creating a link element to delete the tweets
    delTweet.classList = 'borrar-tweet';
    delTweet.innerText = 'X';

    const li = document.createElement('li'); //creates a li
    li.innerText = tweet; //adds the tweet element on the li
    li.appendChild(delTweet); //insters a delete buttom on the li
    listTweets.appendChild(li); //inserts the li in the div with id lista-tweets
}

function addingTweet(e) {
    e.preventDefault(); //Prevents default from the element
    const tweet = document.querySelector('#tweet').value; //Obtains the value from the text area

    addingValue(tweet);

    addToLocalStorage(tweet);

}

function deleteTweet(e) {
    e.preventDefault(); //Prevents default from the element
    if (e.target.classList.contains('borrar-tweet')) {
        e.target.parentElement.remove(); //removing the selected tweet from the list
        deleteTweetFromLocalStorage(e.target.parentElement.innerText);
        
    }
}

function addToLocalStorage(tweet){

    let tweets;

    tweets = obtainTweetsLocalStorage();

    tweets.push(tweet);

    localStorage.setItem('tweets', JSON.stringify(tweets));

}

function obtainTweetsLocalStorage(){
    let tweets;

    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else{
        tweets =  JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}

function loadingCacheTweets(){
    let tweets;
    if(localStorage.getItem('tweets') != null){
        tweets =  JSON.parse(localStorage.getItem('tweets'));
        console.log(tweets);
        for (tweet of tweets){
            addingValue(tweet);
        }
    }
    
}

function deleteTweetFromLocalStorage(tweet){
    let tweets, tweetDeleted;

    tweets = obtainTweetsLocalStorage();

    tweetDeleted = tweet.substring(0,tweet.length-1);

    tweets.forEach(function(tweet,index) {
        if(tweetDeleted == tweet){
            tweets.splice(index, 1);
            localStorage.setItem('tweets', JSON.stringify(tweets));
        }
    });

}