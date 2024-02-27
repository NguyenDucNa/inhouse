import { ReactNode } from 'react';
import { useCompany } from '@packages/core/company/company-hook.ts';
import { CompanyContext } from '@packages/core/company/company-context.ts';

export function CompanyProvider(props: {
  children: ReactNode;
  companyId?: string;
}) {
  const companyContext = useCompany(props.companyId ?? '96Sushi');

  if (companyContext.loading) {
    return <div>Loading...</div>;
  }

  if (companyContext.error) {
    throw companyContext.error;
  }

  if (companyContext.company) {
    return (
      <CompanyContext.Provider value={companyContext.company}>
        {props.children}
      </CompanyContext.Provider>
    );
  } else {
    throw new Error('Company not found');
  }
}
