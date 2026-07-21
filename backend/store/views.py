from django.http import JsonResponse


def home(request):
    data = {
        "message": "Welcome to the E-Commerce API",
    }
    return JsonResponse(data)
