/*
1. fügt ein Text-Input-Element hinzu für einen kontrollierten Input (State).
2. Wenn der Text sich ändert, soll der Inhalt des Input-Elements 
an unsere shuffletext-Schnittstelle gesendet werden. 
Der Antwort-Text soll in einem strong-Element mit der Klasse "big-text" angezeigt werden.
3. Die Komponenete soll zunächst auf der Startseite eingesetzt werden.
Bonus: Nutzt den Hook useDebouncedValue.
*/

import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

export default function ShuffleText() {
  //
  const [text, setText] = useState('');
  const debouncedText = useDebouncedValue(text, 300);

  useEffect(() => {
    async function fetchText() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/shuffletext?text=${debouncedText}`
        );

        const apiText = await response.json();

        setText(apiText.ShuffleText);
      } catch (error) {
        console.log('Fehler');
      }
    }
    fetchText();
  }, [debouncedText]);

  const quote =
    'Lernen, ohne zu denken, ist verlorene Mühe. Denken, ohne etwas gelernt zu haben, ist gefährlich. Hoffe nicht auf Zukünftiges, denke über Vergangenes nach. Wer das Morgen nicht bedenkt, wird Kummer haben, bevor das Heute zu Ende ist.';
  return (
    <>
      <Layout>
        <label htmlFor="text">Texteingabe</label>
        <input
          id="text"
          value={text}
          defaultValue={quote}
          onChange={(e) => setText(e.target.value)}
        />
        <strong className="big-text">{text}</strong>
      </Layout>
    </>
  );
}
