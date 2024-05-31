"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServices = void 0;
const availableServices = [
    'Chatbots', 'Recommendation Engines', 'Predictive Analytics', 'Sentiment Analysis',
    'Image and Video Recognition', 'Voice Recognition', 'Fraud Detection', 'Automated Content Creation',
    'Personalized Marketing', 'Customer Segmentation', 'Image Generation', 'Video Generation', 'Text Generation'
];
const getServices = (req, res) => {
    res.json(availableServices);
};
exports.getServices = getServices;
