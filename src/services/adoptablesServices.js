import adoptables from "../data/adoptableDogs.json";

export function getAllAdoptables() {
  return Promise.resolve(adoptables);
}

export function getAdoptableById(id) {
  const dog = adoptables.find((d) => d.id === id);
  return Promise.resolve(dog);
}
