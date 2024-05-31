"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomains = void 0;
const availableDomains = [
    'Ecommerce', 'Finance', 'Health', 'Technology', 'Media and Streaming', 'Education',
    'Real Estate', 'Travel and Tourism', 'Logistics and Supply Chain', 'Agriculture', 'Manufacturing'
];
const getDomains = (req, res) => {
    res.json(availableDomains);
};
exports.getDomains = getDomains;
