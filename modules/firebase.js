export const firebase = {
  GET,
  POST,
};

const URL =
  "https://fe23-messageboard-default-rtdb.europe-west1.firebasedatabase.app/.json";

async function GET() {
  const response = await fetch(URL);

  const data = await response.json();

  return data;
}

async function POST(message) {
  if (!message) {
    throw "ERROR: The 'message' parameter in the function is required and missing.";
  }

  if (!(message.author && message.content && message.mood)) {
    throw "ERROR: The 'message' parameter must include 'author', 'content' and 'mood' keys.";
  }
  const OPTIONS = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  };

  const response = await fetch(URL, OPTIONS);

  if (response.ok) {
    const data = await response.json();

    return data.name;
  }

  return false;
}

async function DELETE(id) {
  const data = await GET();

  if (data[id]) {
    delete data[id];

    await PUT(data);

    GET();

    return data;
  } else {
    return false;
  }
}

async function PUT(newObj) {
  const OPTIONS = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newObj),
  };

  const response = await fetch(URL, OPTIONS);

  const data = await response.json();

  if (response.ok) {
    return true;
  }

  return false;
}
