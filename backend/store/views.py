from django.http import JsonResponse

# Create your views here.
def home(request):
    data = {
    'message':"welcome to the E-commerece Store!"
    }
    return JsonResponse(data)