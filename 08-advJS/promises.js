function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        console.log("Data fetched succesfully");
      } else {
        console.log("Error fetching data");
      }
    }, 3000);
  });
}

// let response = fetchData()
// console.log(response)

fetchData()
  .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((value)=>{
    consolelog(value);
  })
  .catch((error) => {console.error(error)});