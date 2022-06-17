import {Container, Link, Paper, Stack, Typography} from '@mui/material';
import {useCallback} from 'react';
import {Button, Form, Navbar, TextField} from 'shared/components';

import {authService} from 'shared/services/Api/auth';

const Login: React.FC = () => {
  const {signIn} = useAuth();

  //Trabalha com o enviar da API.
  const handleSubmit = useCallback(
    async (data: any) => {
      try {
        await signIn(data.email, data.senha);
      } catch (error: any) {
        console.log('*** error', error);
      }
    },
    [signIn],
  );

  return (
    <>
      <Navbar loginPage />
      <Container>
        <Stack
          component={Form}
          onSubmit={handleSubmit}
          width="100%"
          height="100vh"
          justifyContent="center"
          alignItems="center">
          
          <Stack component={Paper} padding={5}>
            <Typography color="white" variant="h5" fontWeight={500}>
              Entrar
            </Typography>

            <Stack minWidth={272} spacing={2} mt={3} mb={5}>
              <TextField name="email" type="email" label="E-mail" />
              <TextField name="senha" type="password" label="Senha" />
            </Stack>

            <Button textButton="Entrar" type="submit" variant="contained" />

            <Stack margin-top={3} spacing={1} mt={1}>
              <Typography color="#737373" variant="body2" fontSize={16}>
                Novo no GVFLIX?{' '}
                <Typography
                  color="white"
                  sx={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&:hover': {color: '#737373'},
                  }}
                  component={Link}>
                  Se inscreva.
                </Typography>
              </Typography>

              <Typography color="#737373" variant="body2" fontSize={14}>
                Essa página é protegida pelo <br /> Google reCAPTCHA.{' '}
                <a href="https://www.google.com/recaptcha/about/">
                  Learn more.
                </a>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Login;

function useAuth(): {signIn: any} {
  throw new Error('Function not implemented.');
}
/* (Stack) = https://mui.com/pt/material-ui/react-stack/

O componente Stack gerencia o leiaute de filhos imediatos ao longo do eixo vertical 
ou horizontal com espaçamento e/ou divisão opcional entre cada filho.

(Ele já vem com Diplay flex ativo)
*/

/*(Paper) = https://mui.com/pt/material-ui/react-paper/

O fundo de uma aplicação se assemelha a textura lisa e opaca de uma folha de papel e 
o comportamento de uma aplicação imita a habilidade do papel de ser redimensionado, 
embaralhado e amontoado em várias folhas.

*/

/*(useAuth) = https://useauth.dev/docs/getting-started

O useAuth React Hook nos permite entrar, sair e buscar informações sobre o usuário.
 Vamos testar isso para garantir que esteja configurado corretamente
*/

/*(useCallback) = https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback

Recebe como argumentos, um callback e um array. useCallback retornará uma versão memoizada 
do callback que só muda se uma das entradas tiverem sido alteradas. 

*/
