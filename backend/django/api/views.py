from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

class DomainList(APIView):
    def get(self, request):
        domains = ["Ecommerce", "Finance", "Health", "Technology", "Media and Streaming", "Education", "Real Estate", "Travel and Tourism", "Logistics and Supply Chain", "Agriculture", "Manufacturing"]
        return Response(domains)

class ModelList(APIView):
    def get(self, request):
        models = ["Chatbots (NLP/NLU)", "Recommendation Engines", "Predictive Analytics", "Sentiment Analysis", "Image and Video Recognition", "Voice Recognition", "Fraud Detection", "Automated Content Creation (NLG)", "Personalized Marketing", "Customer Segmentation", "Image Generation", "Video Generation", "Text Generation"]
        return Response(models)
