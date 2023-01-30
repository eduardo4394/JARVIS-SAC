export const getUsers = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/?results=15");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("there was an error: " + error.message);
  }
};
