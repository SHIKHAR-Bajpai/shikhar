const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '69496a6737mshfacdeb840d63caap1d38f5jsn5d00d252e9d3',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};

async function fetchQuote() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        const quote = data.content;
        const author = '- ' + data.originator.name + ' -';

        document.getElementById('quote').innerHTML = quote;
        document.getElementById('author').innerHTML = author;
    } catch (error) {
        console.error(error);
    }
}

fetchQuote();
