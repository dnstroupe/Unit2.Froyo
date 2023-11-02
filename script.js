function countFroyoFlavors() {
  // Get the input value and split it into an array of flavors
  const flavorsInput = document.getElementById("flavorsInput").value;
  const flavorsArray = flavorsInput.split(",");

  // Create an object to keep track of the flavor counts
  const flavorCounts = {};

  // Iterate through the array of flavors and count each flavor
  flavorsArray.forEach(function (flavor) {
    flavor = flavor.trim(); // Remove extra spaces
    if (flavorCounts[flavor]) {
      flavorCounts[flavor]++;
    } else {
      flavorCounts[flavor] = 1;
    }
  });

  // Display the flavor counts in a table
  const table = document.getElementById("flavorsTable");
  table.innerHTML = "<tr><th>Flavor</th><th>Count</th></tr>";
  for (const flavor in flavorCounts) {
    const row = document.createElement("tr");
    const flavorCell = document.createElement("td");
    const countCell = document.createElement("td");
    flavorCell.textContent = flavor;
    countCell.textContent = flavorCounts[flavor];
    row.appendChild(flavorCell);
    row.appendChild(countCell);
    table.appendChild(row);
  }
}
