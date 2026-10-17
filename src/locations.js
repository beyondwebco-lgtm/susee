/**
 * SUSEE TRUCKS PRIVATE LIMITED — CENTRALIZED LOCATION CONTACT CONFIGURATION
 * 
 * Reusable data structure storing Sales & Service direct calling and WhatsApp
 * contact details for all 9 dealership network locations.
 */

export const SALES_MESSAGE_TEMPLATE = (locationName) =>
  `Hello, I would like to enquire about your products and sales services at ${locationName}.`;

export const SERVICE_MESSAGE_TEMPLATE = (locationName) =>
  `Hello, I need assistance with service at ${locationName}. Please help me.`;

export function formatPhoneDisplay(raw10Digit) {
  if (!raw10Digit || raw10Digit.length !== 10) return raw10Digit;
  return `+91 ${raw10Digit.slice(0, 5)} ${raw10Digit.slice(5)}`;
}

export function buildCallUrl(raw10Digit) {
  return `tel:+91${raw10Digit}`;
}

export function buildWhatsappUrl(raw10Digit, message) {
  return `https://wa.me/91${raw10Digit}?text=${encodeURIComponent(message)}`;
}

export const LOCATIONS = [
  {
    id: 'vellore',
    name: 'Vellore, Tamil Nadu',
    shortCode: 'Vellore',
    state: 'Tamil Nadu',
    isHeadOffice: true,
    badgeText: 'Head Office',
    sales: {
      phone: '9344721623',
      displayPhone: '+91 93447 21623',
      callUrl: 'tel:+919344721623',
      whatsappUrl: 'https://wa.me/919344721623?text=' + encodeURIComponent('Hello, I would like to enquire about your products and sales services at Vellore, Tamil Nadu.')
    },
    service: {
      phone: '9344721689',
      displayPhone: '+91 93447 21689',
      callUrl: 'tel:+919344721689',
      whatsappUrl: 'https://wa.me/919344721689?text=' + encodeURIComponent('Hello, I need assistance with service at Vellore, Tamil Nadu. Please help me.')
    }
  },
  {
    id: 'kpm',
    name: 'Kanchipuram, Tamil Nadu (KPM)',
    shortCode: 'KPM',
    state: 'Tamil Nadu',
    isHeadOffice: false,
    badgeText: 'Network Location',
    sales: {
      phone: '9344721648',
      displayPhone: '+91 93447 21648',
      callUrl: 'tel:+919344721648',
      whatsappUrl: 'https://wa.me/919344721648?text=' + encodeURIComponent('Hello, I would like to enquire about your products and sales services at Kanchipuram, Tamil Nadu (KPM).')
    },
    service: {
      phone: '9344721622',
      displayPhone: '+91 93447 21622',
      callUrl: 'tel:+919344721622',
      whatsappUrl: 'https://wa.me/919344721622?text=' + encodeURIComponent('Hello, I need assistance with service at Kanchipuram, Tamil Nadu (KPM). Please help me.')
    }
  },
  {
    id: 'tvm',
    name: 'Tiruvannamalai, Kerala (TVM)',
    shortCode: 'TVM',
    state: 'Kerala',
    isHeadOffice: false,
    badgeText: 'Network Location',
    sales: {
      phone: '9344721605',
      displayPhone: '+91 93447 21605',
      callUrl: 'tel:+919344721605',
      whatsappUrl: 'https://wa.me/919344721605?text=' + encodeURIComponent('Hello, I would like to enquire about your products and sales services at Tiruvannamalai, Kerala (TVM).')
    },
    service: {
      phone: '9344721756',
      displayPhone: '+91 93447 21756',
      callUrl: 'tel:+919344721756',
      whatsappUrl: 'https://wa.me/919344721756?text=' + encodeURIComponent('Hello, I need assistance with service at Tiruvannamalai, Kerala (TVM). Please help me.')
    }
  },
  {
    id: 'arakkonam',
    name: 'Arakkonam, Tamil Nadu',
    shortCode: 'Arakkonam',
    state: 'Tamil Nadu',
    isHeadOffice: false,
    badgeText: 'Network Location',
    sales: {
      phone: '8925957094',
      displayPhone: '+91 89259 57094',
      callUrl: 'tel:+918925957094',
      whatsappUrl: 'https://wa.me/918925957094?text=' + encodeURIComponent('Hello, I would like to enquire about your products and sales services at Arakkonam, Tamil Nadu.')
    },
    service: {
      phone: '8870022249',
      displayPhone: '+91 88700 22249',
      callUrl: 'tel:+918870022249',
      whatsappUrl: 'https://wa.me/918870022249?text=' + encodeURIComponent('Hello, I need assistance with service at Arakkonam, Tamil Nadu. Please help me.')
    }
  },
  {
    id: 'tpt',
    name: 'Tirupattur, Andhra Pradesh (TPT)',
    shortCode: 'TPT',
    state: 'Andhra Pradesh',
    isHeadOffice: false,
    badgeText: 'Network Location',
    sales: {
      phone: '9344721626',
      displayPhone: '+91 93447 21626',
      callUrl: 'tel:+919344721626',
      whatsappUrl: 'https://wa.me/919344721626?text=' + encodeURIComponent('Hello, I would like to enquire about your products and sales services at Tirupattur, Andhra Pradesh (TPT).')
    },
    service: {
      phone: '9384091125',
      displayPhone: '+91 93840 91125',
      callUrl: 'tel:+919384091125',
      whatsappUrl: 'https://wa.me/919384091125?text=' + encodeURIComponent('Hello, I need assistance with service at Tirupattur, Andhra Pradesh (TPT). Please help me.')
    }
  },
  {
    id: 'gudiyatham',
    name: 'Gudiyatham, Tamil Nadu',
    shortCode: 'Gudiyatham',
    state: 'Tamil Nadu',
    isHeadOffice: false,
    badgeText: 'Network Location',
    sales: {
      phone: '9344721609',
      displayPhone: '+91 93447 21609',
      callUrl: 'tel:+919344721609',
      whatsappUrl: 'https://wa.me/919344721609?text=' + encodeURIComponent('Hello, I would like to enquire about your products and sales services at Gudiyatham, Tamil Nadu.')
    },
    service: {
      phone: '9344721678',
      displayPhone: '+91 93447 21678',
      callUrl: 'tel:+919344721678',
      whatsappUrl: 'https://wa.me/919344721678?text=' + encodeURIComponent('Hello, I need assistance with service at Gudiyatham, Tamil Nadu. Please help me.')
    }
  },
  {
    id: 'arani',
    name: 'Arani, Tamil Nadu',
    shortCode: 'Arani',
    state: 'Tamil Nadu',
    isHeadOffice: false,
    badgeText: 'Network Location',
    sales: {
      phone: '8766657386',
      displayPhone: '+91 87666 57386',
      callUrl: 'tel:+918766657386',
      whatsappUrl: 'https://wa.me/918766657386?text=' + encodeURIComponent('Hello, I would like to enquire about your products and sales services at Arani, Tamil Nadu.')
    },
    service: {
      phone: '8870007695',
      displayPhone: '+91 88700 07695',
      callUrl: 'tel:+918870007695',
      whatsappUrl: 'https://wa.me/918870007695?text=' + encodeURIComponent('Hello, I need assistance with service at Arani, Tamil Nadu. Please help me.')
    }
  },
  {
    id: 'vandavasi',
    name: 'Vandavasi, Tamil Nadu',
    shortCode: 'Vandavasi',
    state: 'Tamil Nadu',
    isHeadOffice: false,
    badgeText: 'Network Location',
    sales: {
      phone: '9344721611',
      displayPhone: '+91 93447 21611',
      callUrl: 'tel:+919344721611',
      whatsappUrl: 'https://wa.me/919344721611?text=' + encodeURIComponent('Hello, I would like to enquire about your products and sales services at Vandavasi, Tamil Nadu.')
    },
    service: {
      phone: '9344721611',
      displayPhone: '+91 93447 21611',
      callUrl: 'tel:+919344721611',
      whatsappUrl: 'https://wa.me/919344721611?text=' + encodeURIComponent('Hello, I need assistance with service at Vandavasi, Tamil Nadu. Please help me.')
    }
  },
  {
    id: 'vaniyambadi',
    name: 'Vaniyambadi, Tamil Nadu',
    shortCode: 'Vaniyambadi',
    state: 'Tamil Nadu',
    isHeadOffice: false,
    badgeText: 'Network Location',
    sales: {
      phone: '9344721626',
      displayPhone: '+91 93447 21626',
      callUrl: 'tel:+919344721626',
      whatsappUrl: 'https://wa.me/919344721626?text=' + encodeURIComponent('Hello, I would like to enquire about your products and sales services at Vaniyambadi, Tamil Nadu.')
    },
    service: {
      phone: '9384091121',
      displayPhone: '+91 93840 91121',
      callUrl: 'tel:+919384091121',
      whatsappUrl: 'https://wa.me/919384091121?text=' + encodeURIComponent('Hello, I need assistance with service at Vaniyambadi, Tamil Nadu. Please help me.')
    }
  }
];

export function getLocationById(id) {
  return LOCATIONS.find(loc => loc.id === id);
}

export function getLocationByName(name) {
  return LOCATIONS.find(loc => loc.name === name || loc.shortCode.toLowerCase() === name.toLowerCase());
}
