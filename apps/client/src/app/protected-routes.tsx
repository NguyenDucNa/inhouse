import { Outlet } from 'react-router-dom';
import { CompanyProvider } from '@packages/core/company/company-provider.tsx';
import { AuthProtection } from '@client/app/protections/auth-protection.tsx';
import ModalProvider from '@packages/ui/modal/modal-provider.tsx';

export default function ProtectedRoutes() {
  return (
    <AuthProtection>
      <CompanyProvider>
        <ModalProvider>
          <Outlet />
        </ModalProvider>
      </CompanyProvider>
    </AuthProtection>
  );
}
