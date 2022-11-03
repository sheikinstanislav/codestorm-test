import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkIsAuth, loginUser } from '../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';
import './LoginForm.scss';

export const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const isAuth = useAppSelector(checkIsAuth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ email, password }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRemebmerMe = () => {
    setChecked(!checked);
  };

  return (
    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        onChange={handleEmailChange}
        value={email}
        placeholder="Email"
        required={true}
      />
      <Input
        type="password"
        onChange={handlePasswordChange}
        value={password}
        placeholder="Password"
        required={true}
      />
      <Checkbox
        onChange={handleRemebmerMe}
        checked={checked}
        label="Remember me"
        id="login-checkbox"
      />
      <Button type="submit" onClick={handleSubmit} text="Login" />
    </form>
  );
};
