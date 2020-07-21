export const Human = () => {
  let word = "";
  const SpeechRecognition =
    window.SpeechRecognition || (window as any).webkitSpeechRecognition;

  const mic = new SpeechRecognition();
  mic.start();

  mic.lang = "tr";
  mic.onresult = (e) => {
    mic.stop();
    word = e.results[0][0].transcript;
  };

  return word;
};
