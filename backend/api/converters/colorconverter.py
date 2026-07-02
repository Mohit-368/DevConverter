import colorsys


def convert_color(value, from_format):
    from_format = from_format.lower()

    if from_format == "hex":
        value = value.lstrip("#")
        if len(value) != 6:
            raise ValueError("HEX color must be 6 digits.")

        r = int(value[0:2], 16)
        g = int(value[2:4], 16)
        b = int(value[4:6], 16)
        a = 1.0

    elif from_format == "rgb":
        r, g, b = value
        a = 1.0

    elif from_format == "rgba":
        r, g, b, a = value

    elif from_format == "hsl":
        h, s, l = value
        r, g, b = colorsys.hls_to_rgb(h / 360, l / 100, s / 100)
        r, g, b = round(r * 255), round(g * 255), round(b * 255)
        a = 1.0

    elif from_format == "hsv":
        h, s, v = value
        r, g, b = colorsys.hsv_to_rgb(h / 360, s / 100, v / 100)
        r, g, b = round(r * 255), round(g * 255), round(b * 255)
        a = 1.0

    else:
        raise ValueError("Unsupported color format.")

    hex_color = f"#{r:02X}{g:02X}{b:02X}"

    h, l, s = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
    hsv_h, hsv_s, hsv_v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)

    return {
        "hex": hex_color,
        "rgb": (r, g, b),
        "rgba": (r, g, b, round(a, 2)),
        "hsl": (
            round(h * 360),
            round(s * 100),
            round(l * 100),
        ),
        "hsv": (
            round(hsv_h * 360),
            round(hsv_s * 100),
            round(hsv_v * 100),
        ),
    }