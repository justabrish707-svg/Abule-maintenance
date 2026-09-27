/**
 * Input validation and sanitization utilities
 */

// Matches Ethiopian phone numbers:
// 09xxxxxxxx, 07xxxxxxxx, +2519xxxxxxxx, +2517xxxxxxxx
const ETHIOPIA_PHONE_REGEX = /^(\+251|0)(9|7)\d{8}$/;

export function cleanPhone(phone: string): string {
  return phone.replace(/[\s\-()]/g, '');
}

export function isValidEthiopianPhone(phone: string): boolean {
  const cleaned = cleanPhone(phone);
  return ETHIOPIA_PHONE_REGEX.test(cleaned);
}

export function sanitizeText(input: string, maxLength = 500): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // strip potential HTML brackets
    .slice(0, maxLength);
}

export interface ContactValidationErrors {
  name?: string;
  phone?: string;
  device?: string;
  issue?: string;
}

export function validateContactSubmission(form: {
  name: string;
  phone: string;
  device: string;
  issue: string;
}): { isValid: boolean; errors: ContactValidationErrors } {
  const errors: ContactValidationErrors = {};

  const cleanName = sanitizeText(form.name, 80);
  if (!cleanName || cleanName.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const cleanPh = cleanPhone(form.phone);
  if (!cleanPh) {
    errors.phone = 'Phone number is required.';
  } else if (!isValidEthiopianPhone(cleanPh)) {
    errors.phone = 'Please enter a valid phone number (e.g., 0911223344 or +251911223344).';
  }

  if (!form.device) {
    errors.device = 'Please select a device type.';
  }

  const cleanIssue = sanitizeText(form.issue, 800);
  if (!cleanIssue || cleanIssue.length < 5) {
    errors.issue = 'Please briefly describe the problem (at least 5 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
