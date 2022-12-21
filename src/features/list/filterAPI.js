const groups = {
  1: "test",
  2: "test2"
};

export function fetchGroup() {
  return new Promise(resolve => {
    setTimeout(() => resolve({data: groups}), 500);
  });
}
