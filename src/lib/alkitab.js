import axios from "axios";
import * as cheerio from 'cheerio';

export const alkitab = async (verse) => {
    let url = 'https://alkitab.mobi/tb/passage/' + encodeURIComponent(verse);
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let content = $('div:nth-child(5) .style1')
        .map((i, el) => {
            return $(el).text();
        }).toArray().join(' ');

    let firstAlphabetical = (content.match(/[a-zA-Z]/) || []).pop();
    content = content.substring(content.indexOf(firstAlphabetical), content.length);
    
    return { verse, content };
}