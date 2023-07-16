interface LoginValues {
  bookingId: string;
}

export default function validateLoginInfo(loginValues: LoginValues) {
  const errors: { fields?: string; pass?: string } = {};

  if (!loginValues.bookingId.trim()) {
    errors.fields = "Booking ID is required";
  }

  return errors;
}
