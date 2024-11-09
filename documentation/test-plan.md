# Test_Plan.md

## Objective

To ensure that the "Number to Words Converter" functions accurately and can handle both typical and edge cases.
Testing will verify input validation, conversion accuracy, UI functionality, and performance.

## Test Cases

### 1. Input Validation

- **Valid Inputs:** Enter valid numbers (e.g., 123, 1234567).
- **Invalid Inputs:** Attempt entering non-numeric characters, negative number, wrong format, numbers exceeding 66 digits, and special characters (e.g., “abc”, “1000000000000000000000000”,-40, 01).

### 2. Conversion Accuracy

- **Common Numbers:** Test numbers like 42, 5600, and 123456 to ensure correct conversion.
- **Boundary Cases:** Test high boundary numbers (e.g., 999,999,999,999) to confirm limits are respected.

### 3. Edge Cases

- **Repeating Digits:** Test numbers like 111111 to check if formatting remains correct.
- **Zero Inclusion:** Test numbers with or without leading/trailing zeroes (e.g., 0, 123000).

### 4. UI Validation

- **Convert Button:** Check if the “Convert” button triggers the conversion properly.
- **Clear Button:** Ensure clicking “Clear” removes both the input and output text.

### 5. Performance Testing

- **Maximum Input Length:** Test with the maximum supported input length to ensure prompt response.
