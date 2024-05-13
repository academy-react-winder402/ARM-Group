import { Field } from "formik";

function index() {
  return (
    <>
      <div className="flex gap-5" dir="rtl">
        <span>مرا به خاطر بسپار</span>
        <Field name="RememberMe" id="RememberMe" type="checkbox" />
      </div>
    </>
  );
}

export default index;
