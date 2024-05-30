import http from "../../Interceptor";

export const GetByPagination = async (Path) => {
  try {
    console.log(Path);
    const response = await http.get(Path);

    return response;
  } catch (error) {
    console.log(error);
  }
};
