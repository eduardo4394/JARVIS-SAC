export const getUsers = async () => {
  const res = await fetch("https://randomuser.me/api/?results=15");
  const data = await res.json();
  console.log(data);
  return data;
};
