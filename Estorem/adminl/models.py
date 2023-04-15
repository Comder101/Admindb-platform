
from django.db import models
from django.db.models import Model


class Category(models.Model):
    name= models.CharField(max_length=50)

    @staticmethod
    def get_all_categories():
        return Category.objects.all()
    
    def __str__(self):
        return self.name
    

class SubCategory(models.Model):
    name= models.CharField(max_length=50)
    category= models.ForeignKey(Category,on_delete=models.CASCADE,default=1 )

    @staticmethod
    def get_all_subcategories():
        return Category.objects.all()
    
    def __str__(self):
        return self.name
    
class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField (max_length=50)
    phone = models.CharField(max_length=10)
    email=models.EmailField()
    password = models.CharField(max_length=100)

    #to save the data
    def register(self):
        self.save()

class Uom(models.Model):
    name= models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class Vendor(models.Model):
 
    first_name = models.CharField(max_length=50)
    last_name = models.CharField (max_length=50)
    phone = models.CharField(max_length=10)
    email=models.EmailField()
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    

    address= models.CharField(max_length=250, default='', blank=True, null= True)
    image= models.ImageField(upload_to='uploads/vendors/')


    #to save the data
    def register(self):
        self.save()

class DelivPart(models.Model):
 
    first_name = models.CharField(max_length=50)
    last_name = models.CharField (max_length=50)
    phone = models.CharField(max_length=10)
    email=models.EmailField()
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    

    address= models.CharField(max_length=250, default='', blank=True, null= True)
    image= models.ImageField(upload_to='uploads/delivpar')


    #to save the data
    def register(self):
        self.save()

class FinManager(models.Model):
 
    first_name = models.CharField(max_length=50)
    last_name = models.CharField (max_length=50)
    phone = models.CharField(max_length=10)
    email=models.EmailField()
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    

    address= models.CharField(max_length=250, default='', blank=True, null= True)
    image= models.ImageField(upload_to='uploads/finman')


    #to save the data
    def register(self):
        self.save()

class Invman(models.Model):
 
    first_name = models.CharField(max_length=50)
    last_name = models.CharField (max_length=50)
    phone = models.CharField(max_length=10)
    email=models.EmailField()
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    

    address= models.CharField(max_length=250, default='', blank=True, null= True)
    image= models.ImageField(upload_to='uploads/invman')


    #to save the data
    def register(self):
        self.save()

    
class Brand(models.Model):
    bname=models.CharField(max_length=50)
    vendors= models.ForeignKey(Vendor,on_delete=models.CASCADE,default=1 )

class Product(models.Model):
    name = models.CharField(max_length=60)
    price= models.IntegerField(default=0)
    category= models.ForeignKey(Category,on_delete=models.CASCADE,default=1 )
    description= models.CharField(max_length=250, default='', blank=True, null= True)
    image= models.ImageField(upload_to='uploads/products/')

    @staticmethod
    def get_products_by_id(ids):
        return Product.objects.filter (id__in=ids)
    @staticmethod
    def get_all_products():
        return Product.objects.all()

    @staticmethod
    def get_all_products_by_categoryid(category_id):
        if category_id:
            return Product.objects.filter (category=category_id)
        else:
            return Product.get_all_products()

# # Create your models here.
