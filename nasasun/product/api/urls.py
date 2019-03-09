from django.urls import path
from product.api.views import ProductListAPIView, ProductCreateAPIView

app_name = 'product'

urlpatterns = [
    path('all_products/', ProductListAPIView.as_view(), name="all_prodcuts"),
    path('create_new/', ProductCreateAPIView.as_view(), name="create_new")
]
