import { Observable} from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(6);
    subscriber.complete();
  }, 1000);
});

observable.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("done");
  },
});


export {};