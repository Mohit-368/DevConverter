def convert_number(number: str, base: str) -> dict:
    base_map = {
        "binary": 2,
        "decimal": 10,
        "octal": 8,
        "hexadecimal": 16,
    }

    base = base.lower()

    if base not in base_map:
        raise ValueError(
            "Base must be one of: binary, decimal, octal, hexadecimal"
        )

    try:
        decimal = int(number, base_map[base])
    except ValueError:
        raise ValueError(f"'{number}' is not a valid {base} number.")

    return {
        "input": number.upper(),
        "input_base": base,
        "decimal": str(decimal),
        "binary": bin(decimal)[2:],
        "octal": oct(decimal)[2:],
        "hexadecimal": hex(decimal)[2:].upper(),
    }