function handleSubmit(event) {
    event.preventDefault()

    let newUrl = document.getElementById('formUrl').value;
    console.log(newUrl);
    const errorUrl = document.getElementById('errorUrl');
    if (Client.checkForUrl(newUrl))  {

        
    fetch('http://localhost:8081/add', {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ formUrl }),
})
    .then(res => res.json())
    .then(res => {updateUI(res);
    
    })
} else {
    console.log(errorUrl, "URL invalid")

}
console.log("Form Submitted")

    }

    async function updateUI(res) {

    document.querySelector('#result').innerText = 'Confidence = ' + res.confidence + '%';
    document.querySelector('#subjectivity').innerText = res.subjectivity;
    document.querySelector('#score').innerText = `Polarity score: ${score(
        res.score_tag
      )}`;
}

export const score = (score_tag) => {
    if (score_tag === "P+" || score_tag === "P") {
        return "Positive";
    } else if (score_tag === "N+" || score_tag === "N") {
        return "Negative";
    } else if (score_tag === "NEU") {
        return "Neutral";
    } else {
        return "Non Sentimental";
    }
};


export { handleSubmit }
