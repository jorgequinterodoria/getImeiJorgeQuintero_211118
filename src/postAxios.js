import axios from "axios";

const RouteToServer = 'https://fleetsapapiqa.azurewebsites.net/api/GetIMEIDataServicesByIMEIAndCompany'

const PostServices = async (body) => {

  
  return await axios
    .post(`${RouteToServer}`, body, {

    })
    .then((response) => {
      const res = response.data;
      if (response.data) {

        return {
          statusCode: response.status,
          ...res,
        };
      } else {

        return {
          statusCode: response.status,
          ...response.data.error,
        };
      }
    })
    .catch((error) => {

      const statusCode = error.response && error.response.status;
      let errorData = error.response && error.response.data;
      if (typeof errorData === "object" && errorData.message) {
        errorData = errorData.message;
      }

      switch (statusCode) {
        case 400:
          return {
            statusCode: statusCode,
            message: errorData,
          };

        case 404:
          return {
            statusCode: statusCode,

          };
        case 500:
          return {
            statusCode: statusCode,
            message: "Error",
          };
        case 502:
          return {
            statusCode: statusCode,

          };
        default:
          return {
            statusCode: 0,

          };
      }
    });
};

export { PostServices };
