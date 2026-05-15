import { log } from "node:console";
import { LoginPageData } from "./login-page.data";

export interface User {
    username: string;
    password: string;
}

export const standard_user: User = {
    username: LoginPageData.credentials.usernames.standard_user,
    password: LoginPageData.credentials.password,  
    
};

export const performance_glitch_user: User = {
    username: LoginPageData.credentials.usernames.performance_glitch_user,
    password: LoginPageData.credentials.password,  
    
};

export const problem_user: User = {
    username: LoginPageData.credentials.usernames.problem_user,
    password: LoginPageData.credentials.password,  
    
};

export const locked_out_user: User = {
    username: LoginPageData.credentials.usernames.locked_out_user,
    password: LoginPageData.credentials.password,  
    
};