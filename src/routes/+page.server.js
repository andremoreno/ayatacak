import { alkitab, getRandomVerse, translateVerse } from '$lib/services';

/** @type {import('./$types').PageLoad} */
export const load = async ({ url }) => {
    url.searchParams.get('ref');
    let random = Math.floor(Math.random() * 10000 + 1);

    let translatedVerse = await translateVerse(await getRandomVerse());
    let verse = await alkitab(translatedVerse);

    return { verse, random };
}