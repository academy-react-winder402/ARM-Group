import http from "../../Interceptor";

export const getArticle = async (RowsOfPage, PageNumber) => {
  try {
    const response = await http.get("/News", {
      params: {
        RowsOfPage,
        PageNumber,
      },
    });

    return response.news;
  } catch (error) {
    console.log(error);
  }
};
