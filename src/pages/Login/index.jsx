import styled from 'styled-components';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';

const LoginContainer = styled.section`
	width: 100%;
	height: calc(100vh - 70px);
	display: flex;
	justify-content: center;
	align-items: center;
  & form{
    width: 400px;
    & h3{
      text-align: center;
    }
    & label{
      font-size: 10px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 6px;
      color: #777;
      display: block;
    }
    & input{
      width: 100%;
      margin-bottom: 10px;
    }
    & span{
      width: 100%;
    }
    & .p-button{
      width: 100%;
      margin-top: 16px;
    }
  }
`;

const Login = () => {
  const [verSenha, setVerSenha] = useState(false);
  const { register, handleSubmit } = useForm(); 

  function logar(dados){
    console.log(dados);
  }

	return (
		<LoginContainer>
			<form onSubmit={handleSubmit(logar)}>
				<h3>Login</h3>
				<label htmlFor='email'>Email</label>
				<InputText 
          id={'email'} 
          placeholder={'email@email.com'} 
          {...register('email', {required: true})}
        />
				<label htmlFor='password'>Senha</label>
				<span className='p-input-icon-right'>
					<i className={`pi ${ !verSenha ? 'pi-eye-slash' : 'pi-eye'}`} onClick={() => setVerSenha(!verSenha)}/>
					<InputText 
            id='password' 
            type={!verSenha ? 'password' : 'text'} 
            placeholder='******'
            {...register('password', {required: true})}
          />
				</span>
        <Button type='submit' label='Entrar'/>
			</form>
		</LoginContainer>
	);
};

export default Login;
