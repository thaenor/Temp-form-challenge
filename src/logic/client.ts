const mock_send =
  "https://run.mocky.io/v3/3e3bd241-94df-4e75-abba-5b8749263c27";
const mock_fetch =
  "https://run.mocky.io/v3/68286e76-197a-402d-9852-84a47c82b6a6";
const get_countires = "https://restcountries.eu/rest/v2/all";

export async function postData(data = {}, url = mock_send) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  });
  if (response.status === 200) {
    return data;
  } else {
    throw new Error("network error");
  }
}

export async function fetchData(url = mock_fetch) {
  return fetch(url).then((response) => response.json());
}

export async function getCountries(url = get_countires) {
  return fetch(url).then((response) => response.json());
}
