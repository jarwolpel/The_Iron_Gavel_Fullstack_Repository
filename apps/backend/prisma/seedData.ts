import { Term } from "@prisma/client";

export const termSeedData: Omit<Term, 'id'>[] = [
{
    title: 'API',
    definition: 'An API (Application Programming Interface) is a set of functions and protocols that allow communication between software components.',
    isFavourite: false
},
  {
      title: 'Asynchronous',
      definition: 'Asynchronous programming allows tasks to run separately from the main program flow, enabling non-blocking operations such as network requests.',
      isFavourite: false
  },
  {
      title: 'Callback',
      definition: 'A callback is a function passed into another function as an argument and executed after some operation completes.',
      isFavourite: false
  },
]