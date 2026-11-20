/**
 * Single source of truth for the registered office.
 * Update here and every surface (contact page, about page, JSON-LD) follows.
 */
export const COMPANY_ADDRESS = {
  building: "One Business Village",
  street: "One Emily Street",
  city: "Hull",
  postcode: "HU9 1ND",
} as const;

/**
 * UK postal convention: building, street, locality, postcode on one line.
 * -> "One Business Village, One Emily Street, Hull, HU9 1ND"
 */
export const ADDRESS_ONE_LINE = [
  COMPANY_ADDRESS.building,
  COMPANY_ADDRESS.street,
  COMPANY_ADDRESS.city,
  COMPANY_ADDRESS.postcode,
].join(", ");
