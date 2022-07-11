import api from '../../api/api';
import { LoginDto } from '../../dto/login.dto';
import { User } from '../../entities/user';
import StorageServices from '../../services/storage.service';
import { IAuthContext } from './interface';

const { login, logout, isLogged, getUser, setStorageUser } = StorageServices;

export default {
  signIn: async (data: LoginDto) => {
    const { data: response } = await api.post('login', data);
    login(response);
  },
  signOut: async () => {
    logout();
  },
  isAuthenticate: (): boolean => {
    return isLogged();
  },
  currentUser: getUser(),
} as Omit<IAuthContext, 'setUser'>;
