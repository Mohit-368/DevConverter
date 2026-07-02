from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import NumberSystemSerializer, NumberSystemResultSerializer, DataStorageUnitsSerializer, DataStorageUnitsResultSerializer, ColourCodeSerializer, ColourCodeResultSerializer
from .converters.colorconverter import convert_color
from .converters.datastorage import convert_storage

from .converters.numberconverter import convert_number

# Create your views here.

@api_view(['POST'])
def convert_number_view(request):
    serializer = NumberSystemSerializer(data=request.data)
    if serializer.is_valid():
        number = serializer.validated_data['number']
        from_base = serializer.validated_data['from_base']
        try:
            result = convert_number(number, from_base)
            result_serializer = NumberSystemResultSerializer(result)
            return Response(result_serializer.data)
        except ValueError as e:
            return Response({"error": str(e)}, status=400)
    else:
        return Response(serializer.errors, status=400)
    
@api_view(['POST'])
def convert_storage_view(request):
    serializer = DataStorageUnitsSerializer(data=request.data)
    if serializer.is_valid():
        value=serializer.validated_data['value']
        from_unit=serializer.validated_data['from_unit']
        try :
            result = convert_storage(value, from_unit)
            result_serializer = DataStorageUnitsResultSerializer(result)
            return Response(result_serializer.data) 
        except ValueError as e:
            return Response({"error": str(e)}, status=400)
    else:
        return Response(serializer.errors, status=400)
    
@api_view(['POST'])
def convert_color_view(request):
    serializer = ColourCodeSerializer(data=request.data)
    if serializer.is_valid():
        color_code = serializer.validated_data['color_code']
        from_format = serializer.validated_data['from_format']
        try:
            result = convert_color(color_code, from_format)
            result_serializer = ColourCodeResultSerializer(result)
            return Response(result_serializer.data)
        except ValueError as e:
            return Response({"error": str(e)}, status=400)
    else:
        return Response(serializer.errors, status=400)
    





