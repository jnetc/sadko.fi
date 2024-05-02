import type { IFormData } from "@Types";

// Sending data to the nodemailer
  export async function sendmail(store: IFormData) {
    return await fetch('/api/sendblank.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...store }),
    });
  }

  // Create object with key and value from every input to store
  export function createFormObject(array: HTMLInputElement[], activity: "Кружок" | "Лагерь") {
    const store = Object.create(null);
    Object.assign(store, { activity: activity });
    array.forEach(i => Object.assign(store, { [i.name]: i.value }));

    return store;
  }
