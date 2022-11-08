import { alkitab } from '../lib/alkitab';
import { randomVerse } from '../lib/random-verse';
import { translateVerse } from '../lib/translate-verse';

/** @type {import('./$types').PageLoad} */
export const load = async ({ url }) => {
    url.searchParams.get('ref');
    let random = Math.floor(Math.random() * 10000 + 1);

    let translatedVerse = await translateVerse(await randomVerse());
    let verse = await alkitab(translatedVerse);

    return { verse, random };
}