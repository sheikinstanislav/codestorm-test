import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { checkIsAuth } from '../../redux/features/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';

const PrivateRoutes: FC = () => {
  const isAuth = useAppSelector(checkIsAuth);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
