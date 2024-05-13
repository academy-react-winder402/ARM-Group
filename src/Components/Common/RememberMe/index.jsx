import { Field } from "formik";

function index({ name, id }) {
  return (
    <>
      <div className="flex gap-5" dir="rtl">
        <span>مرا به خاطر بسپار</span>
        <Field name={name} id={id} type="checkbox" />
      </div>
    </>
  );
}

export default index;
