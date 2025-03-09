from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100, verbose_name="Product Name")
    price = models.DecimalField(max_digits=6, decimal_places=2, verbose_name="Price")
    description = models.TextField(blank=True, null=True, verbose_name="Description")
    image = models.ImageField(upload_to='products/', blank=True, null=True, verbose_name="Image")
    stock = models.PositiveIntegerField(default=0, verbose_name="Stock")

    def __str__(self):
        return f"{self.name} - ${self.price}"

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"


class Customer(models.Model):
    first_name = models.CharField(max_length=50, verbose_name="First Name")
    last_name = models.CharField(max_length=50, verbose_name="Last Name")
    email = models.EmailField(unique=True, verbose_name="Email")
    phone = models.CharField(max_length=15, blank=True, null=True, verbose_name="Phone Number")

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = "Customer"
        verbose_name_plural = "Customers"

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, verbose_name="Customer")
    product = models.ManyToManyField(Product, verbose_name="Ordered Products")
    order_date = models.DateTimeField(auto_now_add=True, verbose_name="Order Date")
    total_price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Total Price")

    def __str__(self):
        return f"Order {self.id} - {self.customer.first_name} {self.customer.last_name}"

    class Meta:
        verbose_name = "Order"
        verbose_name_plural = "Orders"
