import { Toaster } from "react-hot-toast";

const AllToaster = () => {
  return (
    <Toaster
      // position="top-left"
      position="bottom-right"
      toastOptions={{
        duration: 5000,
        style: {
          // marginRight:"5rem",
          // marginBottom: "8rem",
          width: "15rem",
          boxShadow: "1px 1px 3px 1px #9E9E9E",
        },
        // style: {
        //   background: "#363636",
        //   color: "#fff",
        // },
        // error: {},
      }}
    />
  );
};

export default AllToaster;
