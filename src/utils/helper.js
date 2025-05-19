export function filterData(SearchIP, allrestaurents) {
  return allrestaurents.filter((restaurent) =>
    restaurent.info.name.toLowerCase().includes(SearchIP.toLowerCase())
  );
}
