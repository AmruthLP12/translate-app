document.getElementById('translateButton').addEventListener('click', async () => {
    const textToTranslate = document.getElementById('textToTranslate').value;
    const language = document.getElementById('language').value;
    
    const url = 'https://google-translator9.p.rapidapi.com/v2';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '1f35c8e57dmsh3af930d14088d41p151c95jsn0e28fdd9f0ad',
            'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: textToTranslate,
            target: language
        })
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log('Translated text:', data);
        document.getElementById('translatedText').innerText = data.data.translations[0].translatedText;
    } catch (error) {
        console.error('Error translating text:', error);
        document.getElementById('translatedText').innerText = 'Error translating text. Please try again.';
    }
});
