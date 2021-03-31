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
    body: JSON.stringify({ newUrl }),
})
    .then(res => res.json())
    .then(res => {updateUI(res);
        console.log("Form Submitted")
    console.log(res);
    })
} else {
    console.log("URL invalid");
    errorUrl.innerText ='URL invalid, please try again';

}
    }

    async function updateUI(res) {
    document.querySelector('#confidence').innerText = 'Confidence: ' + res.confidence + '%';
    document.querySelector('#subjectivity').innerText = 'Subjectivity: ' + res.subjectivity;
    document.querySelector('#irony').innerText = 'Irony: ' + res.irony;
    document.querySelector('#polarity').innerText = `Polarity: ${score(
        res.score_tag
      )}`;
}

export const score = (score_tag) => {
    if (score_tag === "P+") {
        return "STRONG POSITIVE";
    } else if (score_tag === "P") {
        return "POSITIVE";
    } else if (score_tag === "N") {
        return "NEGATIVE";
    } else if (score_tag === "N+") {
        return "STRONG NEGATIVE";
    } else if (score_tag === "NEU") {
        return "NEUTRAL";
    } else {
        return "WITHOUT SENTIMENT";
    }
};

export { handleSubmit }
