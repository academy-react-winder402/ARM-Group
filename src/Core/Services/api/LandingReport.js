import http from "../Interceptor";

export const LandingReportApi = async () => {
  try {
    const response = await http.get("/Home/LandingReport");

    return response;
  } catch (error) {
    console.log(error);
  }
};
