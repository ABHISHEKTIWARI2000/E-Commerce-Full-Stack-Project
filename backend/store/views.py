from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_categories(request):
    # some linters may not recognize Django's manager attribute on model classes
    categories = Category.objects.all()  # type: ignore[attr-defined]
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)