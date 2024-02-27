export function currencyUnit(currency: string) {
  switch (currency) {
    case 'EUR': {
      return 100;
    }
    case 'USD': {
      return 100;
    }
    case 'VND': {
      return 1;
    }
    default: {
      return 1;
    }
  }
}

export function currencySymbol(currency: string) {
  switch (currency) {
    case 'EUR': {
      return '€';
    }
    case 'USD': {
      return '$';
    }
    case 'VND': {
      return '₫';
    }
    default: {
      return '';
    }
  }
}

export function formatCurrency(value: number | null, currency: string): string {
  if (value == undefined) {
    return 'N/A';
  }

  const unit: number = currencyUnit(currency);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(value / unit);
}

export function formatRawCurrency(
  value: number | null,
  currency: string
): { value: string; symbol: string } {
  if (value == undefined) {
    return { value: '0', symbol: currencySymbol(currency) };
  }

  const unit: number = currencyUnit(currency);

  return {
    value: Intl.NumberFormat('en-US').format(value / unit),
    symbol: currencySymbol(currency),
  };
}

export function normalizeCurrency(value: string, currency: string) {
  if (!value) {
    return 0;
  }

  const unit: number = currencyUnit(currency);
  return parseFloat(value) * unit;
}
