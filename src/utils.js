// import dataDummy from "./data-dummy.json";

const url =
  "https://ryr2u9hpx5.execute-api.us-east-2.amazonaws.com/latest/api/scholarships/";

const normalizeData = (data) => {
  const dataNormalized = data
    .filter((i) => i.rewards > 0)
    .sort((a, b) => b.rewards > a.rewards);
  return dataNormalized;
};

export const getData = async () => {
  let response = await fetch(url);

  if (response.status !== 200) {
    return normalizeData([]);
  }

  let data = await response.json();
  return await normalizeData(data.Items);
};
