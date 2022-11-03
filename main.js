const array=[]
for (let i = 0; i < 8; i++) {
    array[i]=Math.round(Math.random()*100);
}
console.log(array);



/////========Task1========
// min=array[0];
// for (let i = 1; i < array.length; i++) {
//     if(min>array[i]){
//         min=array[i];
//     }
// }
// console.log(min);
/////========Task2========
// max=array[0];
// for (let i = 1; i < array.length; i++) {
//     if(max<array[i]){
//         max=array[i];
//     }
// }
// console.log(max);
/////========Task3========
// let min=array[0];
// let index;
// for (let i = 1; i < array.length; i++) {
//     if(min>array[i]){
//         min=array[i];
//         index=i;
//     }
// } 
// console.log(index);
/////========Task4========
// max=array[0];
// let index;
// for (let i = 1; i < array.length; i++) {
//     if(max<array[i]){
//         max=array[i];
//         index=i;
//     }
// } 
// console.log(index);
/////========Task5========
// let sum=0;
// for (let i = 1; i < array.length; i+=2) {
//     sum+=array[i]
// }
// console.log(sum);
/////========Task6========
// function reverse(arr){
//     let temp;
//     for (let i = 0; i < array.length/2; i++) {
//         temp=arr[i];
//         arr[i]=arr[arr.length-i-1];
//         arr[arr.length-i-1]=temp;
//     }
//     console.log(arr);
// }
// reverse(array);
/////========Task7========
// let count=0;
// for (let i = 0; i < array.length; i++) {
//     if(array[i]%2!=0)
//         count++;
// }
// console.log(count);
/////========Task8========
// let temp;
// let half;
// for (let i = 0; i < array.length/2-1; i++) {
//     temp=array[i];
//     half=Math.round(array.length/2);
//     array[i]=array[half+i];
//     array[half+i]=temp;
// }
// console.log(array);
/////========Task9========
/////I will use bubble sort for this task
// let temp;
// for (let j = 0; j < array.length; j++) {
//     for (let i = 0; i < array.length-1; i++) {
//         if(array[i]<array[i+1]){
//             temp=array[i];
//             array[i]=array[i+1];
//             array[i+1]=temp;
//         }
//     }
// }
// console.log(array);
/////========Task10========
/////I will use selection sort for this task
// for (let i = 0; i < array.length; i++) {
//     let max=array[i];
//     let temp=array[i];
//     let index=i;
//     for (let j = i; j < array.length; j++) {
//         if(array[j]>max){
//             max=array[j];
//             index=j;
//         }
//     }
//     array[i]=max;
//     array[index]=temp;
// }
// console.log(array);

