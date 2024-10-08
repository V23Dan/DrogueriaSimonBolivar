import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly registerUserURL = 'http://localhost:3000/auth/registerUser';

  async registerUser(userData: any): Promise<any> {
    try {
      const response = await axios.post(this.registerUserURL, userData);
      console.log('Datos enviados desde el servicio');
      return response.data;
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  private readonly loginUserURL = 'http://localhost:3000/auth/loginUser';

  async loginUser(userDataLogin: any): Promise<any> {
    try {
      const res = await axios.post(this.loginUserURL, userDataLogin);
      console.log('Datos de login enviados');
      return res.data;
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}
