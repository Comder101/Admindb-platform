from django.contrib import admin
from  .models  import Product
from  .models  import Category
from .models import Customer

class AdminProduct(admin.ModelAdmin):
    list_display = ['name', 'price', 'category']


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']


admin.site.register(Product,AdminProduct)
admin.site.register(Category)
admin.site.register(Customer)

# Register your models here.
