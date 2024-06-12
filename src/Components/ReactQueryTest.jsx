// import { useMutation, useQuery } from "react-query";
// import { GetCourseById } from "../Core/Services/api/CourseDetail/GetCourseById";
// import { useState } from "react";

// function ReactQueryTest() {
//   const [state, setState] = useState();
//   //console.log(Boolean(state))
//   const { data, isSuccess, refetch, is } = useQuery({
//     queryKey: ["sss"],
//     queryFn: () => GetCourseById(state),
//     enabled: Boolean(state),
//     // onSuccess: () => {},
//   });
//   const {
//     mutate: deleteMutate,
//     isSuccess,
//     data,
//   } = useMutation({
//     mutationKey: ["sss"],
//     mutationFn: GetCourseById,
//   });
//   return (
//     <div>
//       {data && isSuccess ? (
//         <h1>{data.courseId}</h1>
//       ) : (
//         <button
//           className="border border-red-500 rounded-md"
//           onClick={() => deleteMutate("f4f2b093-8914-ef11-b6c2-f4b229435c5d")}
//         >
//           کلیک کن
//         </button>
//       )}
//     </div>
//   );
// }

export default null;
