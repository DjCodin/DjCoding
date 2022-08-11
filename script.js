
var factList = [
  "16 million people are trafficked for forced labor in the private economy. (Private economy includes: private individuals, groups, or companies in all sectors except the commercial sex industry)", 
  "4.8 million people are trafficked for forced sexual exploitation.", 
  "4.1 million people are trafficked for forced labor in state-imposed forced labor.It is estimated that 20.9 million people are trafficked worldwide. ", 
  "Women and girls are disproportionately affected by human trafficking, accounting for 71% of all victims. ", 
  "The largest share of labor trafficked adults are domestic workers (24%) followed by construction (18%), manufacturing (15%), and agriculture and fishing (11%) sectors.", 
  "Migrant workers and indigenous people are particularly vulnerable to forced labor."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
