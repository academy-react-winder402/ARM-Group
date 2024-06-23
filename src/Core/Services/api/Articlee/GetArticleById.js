import http from "../../Interceptor";

export const getArticleById = async (Id) => {
  try {
    const response = await http.get("/News/" + Id);

    return response;
  } catch (error) {
    console.log(error);
  }
};
