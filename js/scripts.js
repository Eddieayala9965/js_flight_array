// This is calling a local file,
// but the syntax is pretty much the same as a remote URL
const getJSON = async () => {
  const url = "./data/flight_logs.json";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// We can makle the anonymous callback function async
// then we can use await to get our array
document.addEventListener("DOMContentLoaded", async () => {
  const myArray = await getJSON();
  console.log(myArray);

  // Sort and return the data based on the airline
  const sortedArray = myArray.slice();
  console.log(sortedArray);

  //   sortedArray.sort((a, b) => {
  //     return a.flight_number - b.flight_number;
  //   });
  //   console.log(sortedArray);

  sortedArray.sort((a, b) => {
    const nameA = a.airline;
    const nameB = b.airline;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });
  console.log(sortedArray);
  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_array_of_objects

  //   Sort and return the data based on the arrival airport

  sortedArray.sort((a, b) => {
    const nameA = a.arrival_airport;
    const nameB = b.arrival_airport;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });
  console.log(sortedArray);

  // Filter out everything but the flights made by Delta, return the new data
  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#filtering_invalid_entries_from_json
  // the reason why this wasnt working originally is because
  //   const filterArray = sortedArray.filter((array) =>
  //     array.airline.includes("Delta")
  //   );
  //   console.log(filterArray);
  const filterArray = sortedArray.filter((flight) => {
    console.log(flight.airline.includes("Delta"));
    return flight.airline.includes("Delta");
  });
  console.log(filterArray);

  // Do the same as before, but try doing it with reduce() instead of filter
  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#sum_of_values_in_an_object_array
  const reduceArray = sortedArray.reduce((acc, flight) => {
    console.log("ACC", acc);
    console.log("Current", flight);
    return acc + flight.airline.includes("Delta");
  }, 0);

  console.log(reduceArray);
});
