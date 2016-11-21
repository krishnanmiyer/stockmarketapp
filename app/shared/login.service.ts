import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class LoginService {
    userLoggedIn: boolean = false;
    user: string;

    private cookieKey: string = "stockmarketuser";
    private userData: string;

    constructor(private cookieService: CookieService) {
        this.user = this.getCookie();

        if (this.user != null || this.user != undefined) {
            this.userLoggedIn = true;
        }
    }

    //call this function when login status changes
    changeLoginStatus(status: boolean, data?: string) {
        this.userLoggedIn = status;

        if (status) {
            this.userData = data;
            this.setCookie();
        }
        else {
            this.removeCookie();
        }
    }

    private getCookie() {
        return this.cookieService.get(this.cookieKey);
    }

    private removeCookie() {
        this.cookieService.remove(this.cookieKey);
    }

    private setCookie() {
        console.log("setting -->", this.userData);
        var date = new Date();
        var expiry = new Date(date.setTime(date.getTime() + 20 * 86400000));
        this.cookieService.put(this.cookieKey, this.userData, { expires: expiry });
    }
}