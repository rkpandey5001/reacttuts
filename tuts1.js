// const div=document.createElement("div");
// const heading=document.createElement("h1");
// heading.textContent="Hello Everyone";
// const para=document.createElement("p");
// para.textContent="Hello Everyone this is a para";
// const button=document.createElement("button");
// button.textContent="submit";
// div.append(heading);
// div.append(para);
// div.append(button);
// document.getElementById("root").append(div);

// const arr=[1,2,3,3,3,7,7,7,7];
// let sum=0;
// for(let i=0;i<arr.length;i++)
// {
// sum=sum+arr[i];
// }
// console.log(arr.length);
// console.log(sum);
// let count=0
// for(let i=0;i<arr.length;i++)
// {
// for(let j=i+1;j<arr.length;j++)
// {
//     if(arr[i]==arr[j]&&count==2)
//     {
//         console.log(arr[i]);
//         break;
//     }
//     else if(arr[i]==arr[j])
//     {
//         count++;
        
//     }

// }
// }

// Second largest element

// let arr=[7,6,2,1,5,7,2,6,3,10];
// let arr2=[];
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]>arr[j])
//         {
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]==arr[j])
//         {
//             arr2.push(arr[i]);
//         }
//         break;
//     }
// }
// console.log(arr2);


//Reverse the arrray k times

// let arr=[10,20,30,40,50,60,70];

// let k=2;
// let j=arr.length-1;
// for(let i=0;i<k;i++)
// {

// let temp=arr[j];
// for(let j=arr.length-1;j>0;j--)
// {
// arr[j]=arr[j-1];
// }
// arr[0]=temp;
// }
// console.log(arr);


//find dublicate elements in the array

// let arr=[1,2,3,3,4,5,5,5,6,7,7,8,9,10,10,10,11,11,23];

// let output=[];
// for(let i=0;i<arr.length;i++)
// {
//     let j=i+1;
    
//         if(arr[i]==arr[j])
//         {
//             output.push(arr[i]);
//             if(arr[i]==arr[j])
//             {
//                 i++;
//             }
//         }
    
// }
// console.log(output);

// function avg(sub1,sub2,sub3,sub4,sub5,sub6)
// {
// let sum;
// sum=sub1+sub2+sub3+sub4+sub5+sub6;
// let average=sum/6;
// return average;
// }

// let averag=avg(10,20,30,40,50,60);
// console.log(averag);


// let arr=[10,20,30,40,50,60,70];
// arr.forEach((val,index)=>{
//     console.log(index+1,val);
// })


// function doSomethingEvenMore()
// {
//     console.log("Line 4");
//     console.log("Line 5");
//     return 10;
// }

// function doSomethingMore()
// {
//     console.log("Line 2");
//     let a=doSomethingEvenMore();
//     console.log(a);
//     return a;

// }


// let abc=function()
// {
//     let a=doSomethingMore();
//     console.log(a+30);
// }

// abc();

// let a=function()
// {
//     console.log("I am reading");
// }

// function writing(a)
// {
//     console.log("I am writitng");
//     console.log(a);
// }

// writing(a());

let arr=[10,20,30,40,50,60,70];

// let ans=arr.map((val,index)=>{
//     return val>30?arr[index]:"";
// });
// console.log(ans);

let fun=a=>a+" hello ";
console.log(fun(10));
