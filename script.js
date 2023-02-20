function calculateMinimumCost() {
	var input = document.querySelector("input").value;
	var ropeLengths = input.split(",");
  const n = ropeLengths.length;

  // Sort the rope lengths in non-decreasing order
  ropeLengths.sort((a, b) => a - b);

  // Keep track of the total cost of connecting ropes
  let totalCost = 0;

  // Keep connecting ropes until there is only one rope left
  while (n > 1) {
    // Take the two smallest ropes
    const smallestRope = ropeLengths.shift();
    const secondSmallestRope = ropeLengths.shift();

    // Connect the two smallest ropes and add the cost to the total
    const connectedRope = smallestRope + secondSmallestRope;
    totalCost += connectedRope;

    // Add the connected rope back to the list of ropes in the correct position
    let i = 0;
    while (i < n - 1 && ropeLengths[i] < connectedRope) {
      i++;
    }
    ropeLengths.splice(i, 0, connectedRope);

    // Decrement n
    n--;
  }

  // Return the total cost
  return totalCost;
}
