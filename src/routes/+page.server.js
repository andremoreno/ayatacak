import { alkitab } from '../lib/alkitab';
import { randomVerse } from '../lib/random-verse';
import { translateVerse } from '../lib/translate-verse';

/** @type {import('./$types').PageLoad} */
export const load = async () => {
    let translatedVerse = await translateVerse(await randomVerse());
    let verse = await alkitab(translatedVerse);

    return verse;
}