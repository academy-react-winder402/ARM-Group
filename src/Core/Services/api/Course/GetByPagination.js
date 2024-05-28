import http from "../../Interceptor";

export const GetByPagination = async () => {
  // const PathGenerator = () => {
  //   var Path;
  //   if (Query != null) {
  //     let Condition;
  //     Condition = "Query=" + Query;
  //     console.log(Condition);
  //   } else {

  //   }
  //   return "/Home/GetCoursesWithPagination";
  // };

  try {
    const response = await http.get("/Home/GetCoursesWithPagination");

    return response;
  } catch (error) {
    console.log(error);
  }
};
