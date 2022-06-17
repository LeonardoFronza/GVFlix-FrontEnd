import {Paper, Stack, TextField, Typography} from '@mui/material';
import {Container} from '@mui/system';
import {useCallback} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button, Form, Navbar} from 'shared/components';
import {userService} from 'shared/services/Api/user';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (data: any) => {
      try {
        await userService.userCreate({
          ...data,
        });

        navigate('/');
      } catch (error: any) {
        console.log('*** error', error);
      }
    },
    [navigate],
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
          alignContent={'center'}>
          <Stack component={Paper} padding={5}>
            <Typography color="white" variant="h5" fontWeight={500}>
              Cadastrar
            </Typography>

            <Stack minWidth={272} spacing={2} marginTop={3} marginBottom={5}>
              <TextField name="nome" type="text" label="Nome" />
              <TextField name="email" type="email" label="E-mail" />
              <TextField name="senha" type="password" label="Senha" />
            </Stack>

            <Button textButton="Cadastrar" type="submit" variant="contained" />

            <Stack marginTop={3} spacing={1} mt={1}>
              <Typography color="#737373" variant="body2" fontSize={16}>
                Já tem uma conta?{' '}
                <Typography
                  color="white"
                  sx={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&:hover': {color: '#737373'},
                  }}
                  component={Link}
                  to="/">
                  Entrar.
                </Typography>
              </Typography>

              <Typography color="#737373" variant="body2" fontSize={14}>
                Não possuimos reCAPTCHA para o cadastro, mas confia que é
                sucesso!
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

export default Register;
