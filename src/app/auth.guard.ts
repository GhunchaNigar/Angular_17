import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router)
  let islogedin=sessionStorage.getItem("isloggedin");
  if(islogedin=='flase'){
    alert('Login Again');
    _router.navigate(['login'])
    return false
  }
  return true;
};
