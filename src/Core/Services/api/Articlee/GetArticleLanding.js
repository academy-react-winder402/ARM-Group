import http from "../../Interceptor";

export const GetArticleLanding = async () => {
  try {
    const response = await http.get("/News/");

    return response.news;
  } catch (error) {
    console.log(error);
  }
};
