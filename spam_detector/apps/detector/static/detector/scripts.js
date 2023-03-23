
document.getElementById('predict-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const message = document.getElementById('message').value;
        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

        const response = await fetch('/predict/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrfToken
            },
            body: `message=${encodeURIComponent(message)}`
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('prediction-result').innerText = `Prediction: ${result.prediction}`;
        } else {
            document.getElementById('prediction-result').innerText = 'Error: Failed to predict';
        }
    } catch (error) {
        console.error(error);
        document.getElementById('prediction-result').innerText = 'Error: Unexpected error occurred';
    }
});


