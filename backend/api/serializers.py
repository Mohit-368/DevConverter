# serializers.py

from rest_framework import serializers

class NumberSystemSerializer(serializers.Serializer):
    number = serializers.CharField(max_length=100)
    from_base = serializers.ChoiceField(choices=[('binary', 'Binary'), ('octal', 'Octal'), ('decimal', 'Decimal'), ('hexadecimal', 'Hexadecimal')])

class NumberSystemResultSerializer(serializers.Serializer):
    decimal = serializers.CharField(max_length=100)
    binary = serializers.CharField(max_length=100)
    octal = serializers.CharField(max_length=100)
    hexadecimal = serializers.CharField(max_length=100)

class DataStorageUnitsSerializer(serializers.Serializer):
    value = serializers.FloatField()
    from_unit = serializers.ChoiceField(choices=[('bit', 'Bit'), ('byte', 'Byte'), ('kilobyte', 'Kilobyte'), ('megabyte', 'Megabyte'), ('gigabyte', 'Gigabyte'), ('terabyte', 'Terabyte')])
 
class DataStorageUnitsResultSerializer(serializers.Serializer):
    bit = serializers.FloatField()
    byte = serializers.FloatField()
    kilobyte = serializers.FloatField()
    megabyte = serializers.FloatField()
    gigabyte = serializers.FloatField()
    terabyte = serializers.FloatField()

class ColourCodeSerializer(serializers.Serializer):
    color_code = serializers.CharField(max_length=7)
    from_format = serializers.ChoiceField(choices=[('hex', 'Hexadecimal'), ('rgb', 'RGB'),('rgba', 'RGBA'), ('hsl', 'HSL'),('hsv', 'HSV'   )])

class ColourCodeResultSerializer(serializers.Serializer):
    hex = serializers.CharField(max_length=7)
    rgb = serializers.CharField(max_length=20)
    rgba = serializers.CharField(max_length=25)
    hsl = serializers.CharField(max_length=20)
    hsv = serializers.CharField(max_length=20)