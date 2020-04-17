import axios from 'axios';
import { Message } from 'element-ui';
import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    ALL_MANUFACTURERS,
    ALL_MANUFACTURERS_SUCCESS,
    MANUFACTURER_BY_ID,
    MANUFACTURER_BY_ID_SUCCESS,
    ADD_MANUFACTURER,
    ADD_MANUFACTURER_SUCCESS,
    UPDATE_MANUFACTURER,
    UPDATE_MANUFACTURER_SUCCESS,
    REMOVE_MANUFACTURER,
    REMOVE_MANUFACTURER_SUCCESS,
} from './mutation-types';

const API_BASE = '/api/v1';

export const productActions = {
    allProducts({ commit }) {
        commit(ALL_PRODUCTS)

        axios.get(`${API_BASE}/products`).then(response => {
            commit(ALL_PRODUCTS_SUCCESS, {
                products: response.data,
            });
        })
    },
    productById({ commit }, payload) {
        commit(PRODUCT_BY_ID);

        const { productId } = payload;
        axios.get(`${API_BASE}/products/${productId}`).then(response => {
            commit(PRODUCT_BY_ID_SUCCESS, {
                product: response.data,
            });
        })
    },
    removeProduct({ commit }, payload) {
        commit(REMOVE_PRODUCT);

        const { productId } = payload;
        axios.delete(`${API_BASE}/products/${productId}`)
            .then(() => {
                // 回傳 productId，用來刪除對應商品
                commit(REMOVE_PRODUCT_SUCCESS, {
                    productId,
                });
                Message({
                    message: '產品刪除完成',
                    type: 'success'
                })
            })
            .catch(() => {
                Message.error('產品刪除失敗');
            })
    },
    updateProduct({ commit }, payload) {
        commit(UPDATE_PRODUCT);

        const { product } = payload;
        axios.put(`${API_BASE}/products/${product._id}`, product)
            .then(() => {
                commit(UPDATE_PRODUCT_SUCCESS, {
                    product: product,
                });
                Message({
                    message: '商品更新成功',
                    type: 'success'
                })
            })
            .catch(() => {
                Message.error('商品更新失敗');
            })
    },
    addProduct({ commit }, payload) {
        commit(ADD_PRODUCT);
        const { product } = payload;
        axios.post(`${API_BASE}/products`, product)
            .then(response => {
                commit(ADD_PRODUCT_SUCCESS, {
                    product: response.data,
                })
                Message({
                    message: '已新建商品',
                    type: 'success'
                })
            })
            .catch(() => {
                Message.error('商品建立失敗');
            })
    }
};

export const manufacturerActions = {
    allManufacturers({ commit }) {
        commit(ALL_MANUFACTURERS);

        axios.get(`${API_BASE}/manufacturers`).then(response => {
            commit(ALL_MANUFACTURERS_SUCCESS, {
                manufacturers: response.data,
            });
        })
    },
    manufacturerById({ commit }, payload) {
        commit(MANUFACTURER_BY_ID);

        const { manufacturerId } = payload;
        axios.get(`${API_BASE}/manufacturers/${manufacturerId}`).then(response => {
            commit(MANUFACTURER_BY_ID_SUCCESS, {
                manufacturer: response.data,
            });
        })
    },
    removeManufacturer({ commit }, payload) {
        commit(REMOVE_MANUFACTURER);

        const { manufacturerId } = payload;
        axios.delete(`${API_BASE}/manufacturers/${manufacturerId}`)
            .then(() => {
                // 回傳 manufacturerId，用來刪除對應的製造商
                commit(REMOVE_MANUFACTURER_SUCCESS, {
                    manufacturerId,
                });
                Message({
                    message: '製造商刪除完成',
                    type: 'success'
                })
            })
            .catch(() => {
                Message.error('製造商刪除完成失敗');
            })
    },
    updateManufacturer({ commit }, payload) {
        commit(UPDATE_MANUFACTURER);

        const { manufacturer } = payload;
        axios.put(`${API_BASE}/manufacturers/${manufacturer._id}`, manufacturer)
            .then(() => {
                commit(UPDATE_MANUFACTURER_SUCCESS, {
                    manufacturer: manufacturer,
                });
                Message({
                    message: '製造商更新完成',
                    type: 'success'
                })
            })
            .catch(() => {
                Message.error('製造商更新失敗');
            })
    },
    addManufacturer({ commit }, payload) {
        commit(ADD_MANUFACTURER);
        const { manufacturer } = payload;
        axios.post(`${API_BASE}/manufacturers`, manufacturer)
            .then(response => {
                commit(ADD_MANUFACTURER_SUCCESS, {
                    manufacturer: response.data,
                });
                Message({
                    message: '製造商建立完成',
                    type: 'success'
                })
            })
            .catch(() => {
                Message.error('製造商建立失敗');
            })
    }
}
