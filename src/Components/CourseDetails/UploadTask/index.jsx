import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free", // Get production API keys from Bytescale
});

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
const options = {
  layout: "modal",
  locale: {
    addAnotherFileBtn: "  فایل دیگری آپلود کنید...",
    addAnotherImageBtn: "  عکس دیگری آپلود کنید...",
    cancelBtn: "cancel",
    cancelBtnClicked: "cancelled",
    cancelPreviewBtn: "Cancel",
    continueBtn: "Continue",
    cropBtn: "Crop",
    customValidationFailed: "Failed to validate file.",
    doneBtn: "Done",
    fileSizeLimitPrefix: "File size limit:",
    finishBtn: "Finished",
    finishBtnIcon: true,
    imageCropNumberPrefix: "Image",
    maxFilesReachedPrefix: "Maximum number of files:",
    maxImagesReachedPrefix: "Maximum number of images:",
    orDragDropFile: "...or drag and drop a file.",
    orDragDropFileMulti: "...or drag and drop files.",
    orDragDropImage: "...or drag and drop an image.",
    orDragDropImageMulti: "...or drag and drop images.",
    processingFile: "Processing file...",
    removeBtn: "remove",
    removeBtnClicked: "removed",
    submitBtnError: "Error!",
    submitBtnLoading: "Please wait...",
    unsupportedFileType: "File type not supported.",
    uploadFileBtn: "تسک خود را آپلود کنید",
    uploadFileMultiBtn: "Upload Files",
    uploadImageBtn: "Upload an Image",
    uploadImageMultiBtn: "Upload Images",
    xOfY: "of",
  },
  maxFileCount: 10,
  maxFileSizeBytes: 1000485760,
  multi: true,
  styles: {
    breakpoints: {
      fullScreenHeight: 420,
      fullScreenWidth: 750,
    },
    colors: {
      active: "#528fff",
      error: "#d23f4d",
      primary: "#377dff",
      shade100: "#333",
      shade200: "#7a7a7a",
      shade300: "#999",
      shade400: "#a5a6a8",
      shade500: "#d3d3d3",
      shade600: "#dddddd",
      shade700: "#f0f0f0",
      shade800: "#f8f8f8",
      shade900: "#fff",
    },
    fontFamilies: {
      base: "-apple-system, blinkmacsystemfont, Segoe UI, helvetica, arial, sans-serif",
    },
    fontSizes: {
      base: 16,
    },
  },
  tags: ["example_tag"],
};

const index = () => (
  <UploadDropzone
    uploader={uploader}
    options={options}
    onUpdate={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
    width="90%"
    height="450px"
  />
);

export default index;
