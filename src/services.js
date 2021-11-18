import { PostServices } from "./postAxios";



const services = {

    postImei: async (body) => {
        return await PostServices(body);
    },

};
export {services}