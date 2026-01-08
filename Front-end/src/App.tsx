import PersonIcon from '@mui/icons-material/Person';
import { Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import type { Navigation } from '@toolpad/core/AppProvider';
import { Home } from '@mui/icons-material';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Home',
    icon: <Home />,
  },
  {
    segment: 'contas',
    title: 'Contas',
    icon: <PersonIcon />,
    pattern: 'contas{/:contaId}*',
  },
];

const BRANDING = {
  title: "CRUD de Contas Bancárias",
};


export default function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}