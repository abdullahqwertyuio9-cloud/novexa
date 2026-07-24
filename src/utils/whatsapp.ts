/**
 * NOVEXA WhatsApp Link Helper
 * Primary Contact Number: 03218458140 (+92 321 8458140)
 */

export const WHATSAPP_NUMBER = "923218458140";
export const FORMATTED_PHONE = "+92 321 8458140";

export function getWhatsAppUrl(message?: string): string {
  const defaultText = "Hello NOVEXA Digital Agency! I would like to inquire about your digital services.";
  const textToUse = message || defaultText;
  const encodedMessage = encodeURIComponent(textToUse);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getServiceWhatsAppUrl(serviceTitle: string, subFeature?: string): string {
  let message = `Hello NOVEXA Digital Agency! I am interested in getting details and a quote for: *${serviceTitle}*.`;
  if (subFeature) {
    message += ` Specifically for: _${subFeature}_.`;
  }
  message += ` Please let me know the availability and next steps.`;
  return getWhatsAppUrl(message);
}

export function getConsultationWhatsAppUrl(details?: {
  name?: string;
  service?: string;
  industry?: string;
  budget?: string;
}): string {
  let message = `Hello NOVEXA! I would like to book a Free Consultation.`;
  if (details) {
    if (details.name) message += `\n- Name: ${details.name}`;
    if (details.service) message += `\n- Service Required: ${details.service}`;
    if (details.industry) message += `\n- Industry: ${details.industry}`;
    if (details.budget) message += `\n- Budget Range: ${details.budget}`;
  }
  message += `\nLooking forward to discussing our project!`;
  return getWhatsAppUrl(message);
}

export function getPortfolioWhatsAppUrl(projectTitle?: string): string {
  if (projectTitle) {
    const message = `Hi NOVEXA Team,\n\nI saw your portfolio project "${projectTitle}" and I would like a similar solution for my business.\n\nPlease contact me.`;
    return getWhatsAppUrl(message);
  }
  const defaultMessage = `Hi NOVEXA Team,\n\nI saw your portfolio project and I would like a similar solution for my business.\n\nPlease contact me.`;
  return getWhatsAppUrl(defaultMessage);
}
