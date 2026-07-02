def convert_storage(value: float, from_unit: str) -> dict:
    units = {
        "bit": 1,
        "byte": 8,
        "kilobyte": 8 * 1024,
        "megabyte": 8 * 1024**2,
        "gigabyte": 8 * 1024**3,
        "terabyte": 8 * 1024**4,
    }

    from_unit = from_unit.lower()

    if from_unit not in units:
        raise ValueError(
            "Unit must be one of: bit, byte, kilobyte, megabyte, gigabyte, terabyte"
        )

    bits = value * units[from_unit]

    return {
        "bit": bits,
        "byte": bits / units["byte"],
        "kilobyte": bits / units["kilobyte"],
        "megabyte": bits / units["megabyte"],
        "gigabyte": bits / units["gigabyte"],
        "terabyte": bits / units["terabyte"],
    }