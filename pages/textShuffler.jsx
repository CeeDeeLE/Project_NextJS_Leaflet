/*
1. fügt ein Text-Input-Element hinzu für einen kontrollierten Input (State).
2. Wenn der Text sich ändert, soll der Inhalt des Input-Elements 
an unsere shuffletext-Schnittstelle gesendet werden. 
Der Antwort-Text soll in einem strong-Element mit der Klasse "big-text" angezeigt werden.
3. Die Komponenete soll zunächst auf der Startseite eingesetzt werden.
Bonus: Nutzt den Hook useDebouncedValue.
*/
import ShuffleText from '../components/ShuffleText';

export default function textShuffler() {
  return <ShuffleText />;
}
