import { Injectable } from '@angular/core';
import { windowTime } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TokenService {

    key = 'token';

    hasToken() {
        return !!this.getToken();
    }

    setToken(token) {
        window.localStorage.setItem(key, token);
    }

    getToken() {
        return window.localStorage.getItem(key);
    }

    removeToken() {
        window.localStorage.removeItem(key);
    }

}