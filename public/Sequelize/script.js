async function dataFetch() {
  const url = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";
  const response = await fetch(url);

  return response.json()

}
