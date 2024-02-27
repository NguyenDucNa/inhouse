import { createContext, useContext } from 'react';
import { Company } from '@packages/core/company/company-hook.ts';

export const CompanyContext = createContext<Company | undefined>(undefined);

export function useCompanyContext() {
  const context = useContext(CompanyContext);

  if (context === undefined) {
    throw new Error(
      'useCompanyContext must be used within a CompanyContextProvider'
    );
  }

  return context;
}

export function useCompanyCurrency() {
  const companyContext = useCompanyContext();
  return companyContext.settings.currency;
}

export function useCompanyId() {
  const companyContext = useCompanyContext();
  return companyContext.id;
}
