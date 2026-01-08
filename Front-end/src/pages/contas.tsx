import { matchPath, useLocation } from 'react-router';
import { Crud } from '@toolpad/core/Crud';
import { contasDataSource, Conta } from '../data/contas';
import { useDemoRouter } from '@toolpad/core/internal';


export default function ContasCrudPage() {

  const router = useDemoRouter("/contas");
  
  const contaId = useLocation().pathname
    ? matchPath('/contas/:contaId/*', useLocation().pathname)?.params.contaId
    : null;

  return (
    <Crud<Conta>
      dataSourceCache={null}
      dataSource={contasDataSource}
      rootPath="/contas"
      initialPageSize={25}
      defaultValues={{ itemCount: 1 }}
      pageTitles={{
        show: `Conta ${contaId}`,
        create: 'Nova conta',
        edit: `Conta ${contaId} - Alterar Saldo`,
      }}
    />
  );
}
