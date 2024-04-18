let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)

// task 3

//    const filtered= arr.filter((item)=>item.name.toLocaleLowerCase()[0] == "t" && item.name.toLocaleLowerCase()[item.name.length-1]==="t")

// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// 5) "name"-i en uzun olan obyekti tapin

// 6) "name"-i en uzun olan obyektin key'ni tapin

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)

// 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)in index(ler)ini tapin.

// 10) keylərin cəmini tapın

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq

// task 1
// let name = arr.filter((item) => item.name[0]==="t")
// console.log(name);

// task 2
//  count=0;
//  arr.forEach(element => {

//     if (element.name.startsWith("t") && element.name.endsWith("t")) {
//         console.log(element);
//      count++;
//     }
//  });
//  console.log(count);

//    console.log(filtered);

// task 3

// let sum =0;
// arr.forEach(element => {
//     if (element.name.startsWith("t") && element.name.endsWith("t")) {

//         sum+=element.key
//      console.log(sum);

// }});

// task 4

// arr.forEach(item => {
//     if (item.name.endsWith("e")) {
//         item.name="SuperDev"
//     }

// });
//  console.log(arr);

// task 5

// 5) "name"-i en uzun olan obyekti tapin

// let maxLengthElement = arr[0]

// arr.forEach((item)=>{
//     if (item.name.length > maxLengthElement.name.length) {
//         maxLengthElement = item
//     }
// })

// console.log(maxLengthElement);

// task 6

//  let maxLengthElement = arr[0]

//  arr.forEach((item)=>{
//      if (item.name.length > maxLengthElement.name.length) {
//          maxLengthElement = item
//      }
//  })

//  console.log(maxLengthElement);
//  console.log(maxLengthElement.key);
