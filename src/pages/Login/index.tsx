import {Link, Paper, Stack, Typography} from '@mui/material';
import {useCallback} from 'react';
import {Button, Form, Navbar, TextField} from 'shared/components';

import {authService} from 'shared/services/Api/auth';

const Login: React.FC = () => {
  const handleSubmit = useCallback(async (data: any) => {
    try {
      const {data: response} = await authService.signIn(data.email, data.senha);

      console.log('*** response', response);
    } catch (error: any) {
      console.log('*** error', error.response.data);
    }
  }, []);

  return (
    <>
      <Navbar loginPage />
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
        </Stack>

        <Stack minWidth={272} spacing={2} mt={3} mb={5}>
          <TextField name="email" placeholder="E-mail" type="email" />
          <TextField name="senha" placeholder="Senha" type="password" />
        </Stack>

        <Button textButton="Entrar" type="submit" variant="contained" />

        <Stack margin-top={3} spacing={1}>
          <Typography color="#737373" variant="body2" fontSize={16}>
            Novo no GVFLIX?{' '}
            <Typography
              color="white"
              sx={{
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover': {color: '#737373'},
              }}    >
              Se inscreva.
            </Typography>
          </Typography>

          <Typography color="#737373" variant="body2" fontSize={14}>
            Essa página é protegida pelo <br /> Google reCAPTCHA.{' '}
            <a href="www.google.com.br">Learn more.</a>
          </Typography>
          
        </Stack>
      </Stack>
    </>
  );
};

export default Login;

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
