import links from "../links.json";

export const seedLinks = () => {
  const storedLinks = localStorage.getItem("links");
  if (!storedLinks) {
    localStorage.setItem("links", JSON.stringify(links));
    return addKey(links);
  } else {
    return addKey(JSON.parse(storedLinks));
  }
};

const addKey = (links) => {
  return links.map((link) => {
    return {
      ...link,
      key: Math.random().toString(),
    };
  });
};
