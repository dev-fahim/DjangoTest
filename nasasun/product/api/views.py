from rest_framework import generics
from product.api.serializer import ProductSerializer
from rest_framework import permissions
from product.models import Product


class ProductListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, ]

    queryset = Product.objects.all()


class ProductCreateAPIView(generics.CreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny, ]

    queryset = Product.objects.all()
