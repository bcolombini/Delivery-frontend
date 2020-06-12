import { Injectable, TemplateRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<any>();
  toasts: any[] = [];
  
  getToastObservable(): Observable<any> {
    return this.toastSubject.asObservable()
  }

  private toastAction(itens){
    this.toastSubject.next(itens)
  }

  tostActionWhatsApp(){
    this.toastAction({
      message:"✉️ Nova mensagem",
      options:{
        classname: 'bg-primary text-light', 
        delay: 5000
      }
    })
  }

  toastActionStartItem(itemName){
    this.toastAction({
      message:"👌 O item "+itemName+" começou a ser vendido",
      options:{
        classname: 'bg-info text-light', 
        delay: 5000
      }
    })
  }

  toastActionStopItem(itemName){
    this.toastAction({
      message:"✋ O item "+itemName+" parou de ser vendido",
      options:{
        classname: 'bg-secondary text-light', 
        delay: 5000
      }
    })
  }

  toastActionNewOrder(){
    this.toastAction({
      message:"🎉 Nova venda!!",
      options:{
        classname: 'bg-warning text-light', 
        delay: 5000
      }
    })
  }

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    console.log(this.toasts)
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    console.log("REMOVE")
    this.toasts = this.toasts.filter(t => t !== toast);
  }
  
}


