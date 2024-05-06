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
  export function createFormObject(array: HTMLInputElement[], activity: "club" | "camp") {
    const store = Object.create(null);
    // Assign new key for activity
    Object.assign(store, { activity: activity });

    array.forEach(i => {

      // If the input is empty, store it as a dash
      if (i.value === '') return Object.assign(store, { [i.name]: '-' });

      Object.assign(store, { [i.name]: i.value })
    });

    return store;
  }
