import http from "../../Interceptor";

export const getArticle = async () => {
  try {
    const response = await http.get(
      "/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC"
    );

    return response.news;
  } catch (error) {
    console.log(error);
  }
};
