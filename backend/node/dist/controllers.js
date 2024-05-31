"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModels = exports.getDomains = void 0;
const getDomains = (req, res) => {
    const domains = ["Ecommerce", "Finance", "Health", "Technology", "Media and Streaming", "Education", "Real Estate", "Travel and Tourism", "Logistics and Supply Chain", "Agriculture", "Manufacturing"];
    res.json(domains);
};
exports.getDomains = getDomains;
const getModels = (req, res) => {
    const models = ["Chatbots (NLP/NLU)", "Recommendation Engines", "Predictive Analytics", "Sentiment Analysis", "Image and Video Recognition", "Voice Recognition", "Fraud Detection", "Automated Content Creation (NLG)", "Personalized Marketing", "Customer Segmentation", "Image Generation", "Video Generation", "Text Generation"];
    res.json(models);
};
exports.getModels = getModels;
