import {AppBar, Container, Stack, Toolbar} from '@mui/material';
import {logo} from 'shared/assets';

interface INavBarProps {
  loginPage?: boolean;
}

export const Navbar: React.FC<INavBarProps> = ({loginPage = false}) => {
  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack height={80} direction="row" padding={3.5} paddingLeft={1.7}>
            <img src={logo} alt="GVFLIX" />

            {loginPage && <div></div>}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

/*(Appbar) =  https://mui.com/pt/material-ui/react-app-bar/ 

A barra de aplicativos superior fornece conteúdo e ações relacionadas à tela atual. 
Ela é utilizada para a identidade visual, títulos de tela, navegação e ações.

(Toolbar)

Estilo da barra superior.
(disableGutters) : Desabilita o padding.
*/

/*(Cotainer) = https://mui.com/pt/material-ui/react-container/

O container centraliza seu conteúdo horizontalmente. É o elemento de leiaute mais básico.
A largura de um container fluído é limitada pelo valor da propriedade ((maxWidth)).
*/
