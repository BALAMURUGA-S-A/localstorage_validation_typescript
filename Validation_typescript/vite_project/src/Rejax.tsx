export const Namevalid=(name:string)=>{
    const namereg=/^([A-z a-z ])+$/;
    return namereg.test(name);
}
export const Emailvalid=(email:string)=>{
    const emailreg=/^([A-Z a-z 0-9])+\@([a-z])+\.([a-z])+$/;
    return emailreg.test(email);
}
export const passvalid=(password:string)=>{
    const passreg=/^([A-z a-z 0-9 ])+([@])$/;
    return passreg.test(password);
}