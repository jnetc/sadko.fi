import fs from "node:fs"; // 👈 "node:" prefix is an Astro requirement for Node libs
import { repeatable, single } from "@Lib/prismiccms";
import type { TypeLanguages, Pages, IIndex } from "@Types";
import type { PrismicDocument } from "@prismicio/client/*";

const CACHE_FOLDER = "./.cache";
const JSON_FILE = "./.cache/local.json";

export async function RepeatableLocaleData(query: string, page: Pages, lang?: TypeLanguages) {
  let response;

  if (!fs.existsSync(CACHE_FOLDER)) {
    fs.mkdirSync(CACHE_FOLDER, { recursive: true });
  }

  if (fs.existsSync(JSON_FILE)) {
    console.info("__________ LOCAL DATA ___________");
    // Read data from file
    const raw = fs.readFileSync(JSON_FILE);
    response = JSON.parse(raw as unknown as string);
    return response as PrismicDocument<Record<string, any>, string, string>[]
  } else {
    console.info("__________ DATA FROM CMS ___________");

    response = await repeatable(query, page, lang);
    // Write projects to "caching" file
    fs.writeFileSync(JSON_FILE, JSON.stringify(response));
    return response ;
  }
}
export  async function SingleLocaleData( query: string, page: Pages, lang: TypeLanguages) {
  let response;

  if (!fs.existsSync(CACHE_FOLDER)) {
    fs.mkdirSync(CACHE_FOLDER, { recursive: true });
  }

  if (fs.existsSync(JSON_FILE)) {
    console.info("__________ LOCAL DATA ___________");
    // Read data from file
    const raw = fs.readFileSync(JSON_FILE);
    response = JSON.parse(raw as unknown as string);
    return response as IIndex
  } else {
    console.info("__________ DATA FROM CMS ___________");

    response = await single( query, page, lang);
    // Write projects to "caching" file
    fs.writeFileSync(JSON_FILE, JSON.stringify(response));
    return response ;
  }
}
