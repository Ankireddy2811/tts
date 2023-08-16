document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const synthesizeBtn = document.getElementById('synthesizeBtn');
    const playAudioBtn = document.getElementById('playAudioBtn');
    const languageEle = document.getElementById('languageElement');
    const pitchEle = document.getElementById('pitchElement');
    const rateEle = document.getElementById('rateElement');

    synthesizeBtn.addEventListener('click', () => {
        const text = inputText.value;
        const selectedLanguage = languageEle.value;
        const pitch = parseFloat(pitchEle.value);
        const rate = parseFloat(rateEle.value);

        responsiveVoice.speak(text, selectedLanguage, {
            pitch,
            rate
        });
        playAudioBtn.textContent = 'Pause Audio';
        playAudioBtn.disabled = false;
    });

    playAudioBtn.addEventListener('click', () => {
        if (responsiveVoice.isPlaying()) {
            responsiveVoice.pause();
            playAudioBtn.textContent = 'Play Audio';
        } else {
            responsiveVoice.resume();
            playAudioBtn.textContent = 'Pause Audio';
        }
    });
});
