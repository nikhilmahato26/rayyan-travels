import { BUSINESS_CONFIG } from '../config/business';

export function getCallHref(phone: string = BUSINESS_CONFIG.phones.primaryClean): string {
  return `tel:+${phone}`;
}

export function getEmailHref(): string {
  return `mailto:${BUSINESS_CONFIG.email}?subject=${encodeURIComponent('Cab Service & Travel Enquiry - Rayyan Travels')}`;
}

export function getGoogleMapsHref(): string {
  return BUSINESS_CONFIG.location.googleMapsUrl;
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
