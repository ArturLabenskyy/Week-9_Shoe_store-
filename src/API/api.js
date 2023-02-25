// import axios from "axios";

import axios from "axios";

const Api = {
    shoes: axios.create({
        baseURL: "https://63f7500fe40e087c958bda19.mockapi.io/shoes",
    }),

    async getShoes() {
        try {
            const response = await this.shoes.get("/");
            return response.data;
        } catch (error) {}
    },

    async addShoe(shoe) {
        const response = await this.shoes.post("/", shoe);
        return response;
    },

    async deleteShoe(shoe) {
        const response = await this.shoes.delete(`/${shoe.id}`);
        return response;
    },

    async updateShoe(shoe) {
        const response = await this.shoes.put(`/${shoe.id}`, shoe);
        return response;
    },
};

export default Api;
