import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage';
import { CalendarPage } from '../calendar';

export const AppRouter = () => {
  
    const authStatus = 'Auth';
  
    return (
    <Routes>
        {
            (authStatus === 'not-Auth')
            ? <Route path='/auth/*' element={<LoginPage />} />
            : <Route path='/*' element={<CalendarPage />} />
        }
        <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
