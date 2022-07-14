import Cryptr from 'cryptr';

export function encryptPassword(password: string){
    const cryptr = new Cryptr(process.env.SECRET_KEY);
    return cryptr.encrypt(password);
}

export function decryptPassword(password: string){
    const cryptr = new Cryptr(process.env.SECRET_KEY);
    return cryptr.decrypt(password);
}