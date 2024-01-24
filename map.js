const map = new Map([
    ["id", "21ecr183"],
    ["name", "John Doe"]
  ]);
  map.delete("id");
  map.set("name", "John Doe");
  for (const [key, value] of map) {
    console.log(key,value);
  }
  