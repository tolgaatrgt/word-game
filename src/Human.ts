export const Human = (callback: (w: string) => void) => {
  const SpeechRecognition =
    window.SpeechRecognition || (window as any).webkitSpeechRecognition;
  const mic = new SpeechRecognition();
  mic.lang = "tr-TR";
  mic.start();
  mic.onresult = (e) => {
    mic.stop();
    callback(e.results[0][0].transcript);
  };
};

export default Human;
