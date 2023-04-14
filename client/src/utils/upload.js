import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dt2tjqscc/image/upload",
      data
    );

    const { url } = res.data;
    console.log(url);
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
