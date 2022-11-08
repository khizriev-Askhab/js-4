
                                     //1 задания

function summ( a ){ return a % 2==0 ? `${a} четное число `: `${a} не четное число`}
    console.log(summ(3333));
    console.log(summ(2344));


                                // 2 задания
            


    function more(a, b, c) {
        if ((a >= b) && (a >= c)) { 
      return a;
        } else if ((b >= a) && (b >= c)) {
      return b;
        } else {
      return c;
 }
 }
                                
   console.log(more(1,3,2));
                 

                            // 3 задания
                

function x (a,f ){
    const result = a * f;
    console.log(result)

}
x(5400,0.10);


                        // 4 задания



function f (){
  let a = length ('lorem ipsum');
  let b = 15 ;
  
  if ( a===b){
    console.log('ошибка, слишком маленкий текст');
  }
  else {
    return b <= length 
  }
  
  f ( `lorem ipsum`,4);



}


                // 5 задания 



                let price = 120;

                function test() {
                   let price = 50;
                   
                }
                test();
                console.log(price);
                
/*      в консоль выведится  120 так как  'let price = 120' находится в глобальной облости..  Если бы мы вызволи консоль внутри функции 
то мы  бы получили  50 таак как консоль находится в сомом функции..*/