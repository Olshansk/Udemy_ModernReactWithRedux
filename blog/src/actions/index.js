import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  jsonPlaceholder.get("/posts").then((res) => {
    console.log(res);
  });
  return {
    type: "FETCH_POSTS",
  };
};
