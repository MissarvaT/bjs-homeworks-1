// тут пусто, так как нету UI

//Задача 1

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) { }
  };
  
  function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  };
  
  function compareArrays(arr1, arr2) {
    return arr1.length == arr2.length && arr1.every((value, index) => value === arr2[index]);
  };
  
  function memorize(fn, limit) {
  
    const results = [];
  
    function fun(...args) {
  
      let memory = results.find((item) => compareArrays(item.args, args));
  
      if (memory === undefined) {
        memory = {
          'args': args,
          'result': fn(...args)
        };
        if (results.length < limit) {
          results.push(memory);
        };
      }
      return memory.result
    };
  
    return fun;
  };
  
  const testArray = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];
  
  
  function testCase(testFunction, timerName) {
  
    let i = 0;
    while (i < 10) {
  
      testArray.forEach((element) => {
        testFunction.apply(this, element)
      });
  
      i++;
    }
    console.timeEnd(timerName);
  };
  
  
  console.time('Timer_1');
  testCase(sum, 'Timer_1');
  
  
  const mSum = memorize(sum, 2);
  console.time('Timer_2');
  testCase(mSum, 'Timer_2');
